export function formatUserComparisonData(response) {

    let labelDataMap = getlabelDataMap(response);
    let names = [], tasks = [];

    for (let i = 0; i < labelDataMap.realName.length; i++){
        names.push((labelDataMap.realName[i]).replace('-', ""))
        tasks.push([
            (labelDataMap.realName[i]).replace('-', ""),
            (labelDataMap.con_update_per[i]).toFixed(2), 
            (labelDataMap.con_att_per[i]).toFixed(2),
            (labelDataMap.git_update_per[i]).toFixed(2),
            (labelDataMap.git_change_per[i]).toFixed(2),

          ])
    }

    names.sort();

    tasks.sort(function(a,b){
        return names.indexOf(a[0]) - names.indexOf(b[0]);
    })

    let datasets = []
    for (let i = 0; i < names.length; i++){
        tasks[i].shift();
        datasets.push(
            {
                name: names[i],
                data: tasks[i]
            },
        )
    }

    return datasets;
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