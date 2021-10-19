export function formatCardData(response) {

    let labelDataMap = getlabelDataMap(response);

    let names = [], commits = [];

    for (let i = 0; i < labelDataMap.user.length; i++){
        names.push((labelDataMap.user[i]).replace('-', ""))
        commits.push([
            labelDataMap.date[i].slice(0, 10),
            labelDataMap.git_username[i],
            labelDataMap.message[i], 
            labelDataMap.url[i],
            labelDataMap.date[i],
          ])
    }

    names.sort()

    commits.sort(function(a,b){
        return names.indexOf(a[0]) - names.indexOf(b[0]);
    })

    console.log(commits)

    let datasets = []
    for (let i = 0; i < names.length; i++){
        datasets.push(
            "Name: " + names[i] + "\n" +
            "Date: " + commits[i][0] + "\n" +
            "Username: " + commits[i][1] + "\n" +
            "Message: " + commits[i][2] + "\n" +
            "URL: " + commits[i][3] + "\n" 
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