export function formatTenFileCodeMetrics(response) {

    let labelDataMap = getlabelDataMap(response);
    let frontend = [], backend = []
    let frontend_countline = [], backend_countline = [];
    let frontend_background_color = ["#f4a3bb","#f4abc0","#f5b2c6", "#f6b9cb", "#f7c1d1", 
    "#f8c8d6", "#f9cfdb", "#fad6e1", "#fbdee6", "#fbe5ec"]
    let backend_background_color = ["#9bcefd","#a3d2fd","#abd6fd", "#b3dafd", "#bbddfd", 
    "#c3e1fd", "#cbe5fd", "#d3e9fe", "#dbedfe", "#e3f1fe"]
    
    for (let i = 0; i < labelDataMap.source.length; i++){

        if (labelDataMap.source[i] =="frontend"){
            frontend.push([labelDataMap.file_name[i], labelDataMap.CountLine[i]])
            frontend_countline.push(labelDataMap.CountLine[i])
        }
        else {
            backend.push([labelDataMap.file_name[i], labelDataMap.CountLine[i]])
            backend_countline.push(labelDataMap.CountLine[i])
        }
    }

    frontend_countline.sort();
    frontend_countline.reverse();
    backend_countline.sort();
    backend_countline.reverse();

    frontend.sort(function(a,b){
        return frontend_countline.indexOf(a[1]) - frontend_countline.indexOf(b[1]);
    })
    backend.sort(function(a,b){
        return backend_countline.indexOf(a[1]) - backend_countline.indexOf(b[1]);
    })

    let sort_frontend_filename = [], sort_frontend_countline = [];
    for (let i = 0; i < frontend.length; i++){
        sort_frontend_filename.push((frontend[i][0]).substring(frontend[i][0].lastIndexOf("/") + 1))
        sort_frontend_countline.push(frontend[i][1])
    }

    let sort_backend_filename = [], sort_backend_countline = [];
    for (let i = 0; i < backend.length; i++){
        sort_backend_filename.push((backend[i][0]).substring(backend[i][0].lastIndexOf("/") + 1))
        sort_backend_countline.push(backend[i][1])
    }

    return [
        {
            labels: sort_frontend_filename.slice(0,10),
            datasets: [{
                data: sort_frontend_countline.slice(0,10),
                backgroundColor: frontend_background_color,
                borderWidth: 1,
            }]
        },{
            labels: sort_backend_filename.slice(0,10),
            datasets: [{
                data: sort_backend_countline.slice(0,10),
                backgroundColor: backend_background_color,
                borderWidth: 1,
            }]
        }
    ]
}

function getlabelDataMap(rawData) {
    let labelDataMap = {};
    for (let i = 0, len = rawData.length; i < len; i++) {
      for (let key in rawData[i]) {
        if (!labelDataMap[key]) {
          labelDataMap[key] = [rawData[i][key]];
        } else {
          labelDataMap[key].push(rawData[i][key]);
        }
      }
    }
    return labelDataMap;
  }