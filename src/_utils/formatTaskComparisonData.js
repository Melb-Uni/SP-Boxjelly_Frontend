export function formatTaskComparisonData(response) {

    let labelDataMap = getlabelDataMap(response);

    let all_gitUpdate = [], all_gitChange = [];
    let all_conUpdate = [], all_conAttendence = [];
    let names = [], user_task = [];

    for (let i = 0; i < labelDataMap.realName.length; i++){
        names.push((labelDataMap.realName[i]).replace('-', ""))
        user_task.push([
            (labelDataMap.realName[i]).replace('-', ""),
            (labelDataMap.git_update_per[i]).toFixed(2),
            (labelDataMap.git_change_per[i]).toFixed(2),
            (labelDataMap.con_update_per[i]).toFixed(2), 
            (labelDataMap.con_att_per[i]).toFixed(2)])
    }

    names.sort();

    user_task.sort(function(a,b){
        return names.indexOf(a[0]) - names.indexOf(b[0]);
    })

    for (let i = 0; i < names.length; i++){
        
        all_gitUpdate.push((user_task[i][1]))
        all_gitChange.push(user_task[i][2])
        all_conUpdate.push(user_task[i][3])
        all_conAttendence.push((user_task[i][4]))
    }

    return {
        names: names,
        gitUpdate: all_gitUpdate,
        gitChange: all_gitChange,
        conUpdate: all_conUpdate,
        conAttendence: all_conAttendence,
    };
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