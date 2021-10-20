export function formatConCardData(response) {

    let labelDataMap = getlabelDataMap(response);

    let names = [], commits = [];

    for (let i = 0; i < labelDataMap.displayName.length; i++){
        names.push((labelDataMap.displayName[i]).replace('-', ""))
        commits.push([
            labelDataMap.time[i].slice(0, 10),
            labelDataMap.title[i],
            labelDataMap.url[i],
            (labelDataMap.displayName[i]).replace('-', ""),
          ])
    }

    names.sort()   

    commits.sort(function(a,b){
        return names.indexOf(a[3]) - names.indexOf(b[3]);
    })

    let datasets = []
    for (let i = 0; i < names.length; i++){
        datasets.push(
            "Name: " + names[i] + "\n" +
            "Date: " + commits[i][0] + "\n" +
            "Title: " + commits[i][1] + "\n" +
            "URL: " + commits[i][2] + "\n" 
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