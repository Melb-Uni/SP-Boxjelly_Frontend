let calendar_dict = {};
let calendar_list = [];
const today = new Date();
const three_months = getThreeMonths(today);

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getThreeMonths(today){
  let three_months = [];
  for(let i = 150; i > 0; i--){
    three_months.push(shiftDate(today, -i).toISOString().slice(0, 10));
  }
  three_months.push(today.toISOString().slice(0,10));
  return three_months;
}

export function formatGitHeatmapUpdateData(response) {

  // sort ascending by date
  response.sort(function(a,b){
    return new Date(a.date) - new Date(b.date);
  })

  let labelDataMap = getlabelDataMap(response);

  for (let i = 0; i < response.length; i++){
      let long_date = response[i].date
      let date = long_date.slice(0, 10);
      if (!calendar_dict.hasOwnProperty(date)){
        calendar_dict[date] = 1
      } else {
         calendar_dict[date] += 1
      }
  }

  let count = 0

  for (let i = 0; i < three_months.length; i++){
    let json_info = {};
    let cur_date = three_months[i]

    if (calendar_dict.hasOwnProperty(cur_date)){

      console.log(cur_date)
      let cur_count = calendar_dict[cur_date]
      let new_count = count + cur_count
      json_info.date = cur_date

      // json_info.count = cur_count
      let round_count = Math.floor(cur_count/5)
      if (cur_count/5 > 0 && cur_count/5 < 1){
          round_count = 1
      }
      json_info.count = round_count

      let authors = labelDataMap.author.slice(count, new_count)
      json_info.authors = authors
      let sources = labelDataMap.source.slice(count, new_count)
      json_info.sources = sources
      let messages = labelDataMap.message.slice(count, new_count)
      json_info.messages = messages     
      // let urls = labelDataMap.url.slice(count, new_count)
      // json_info.urls = urls

      count = new_count

      calendar_list.push(json_info);
      console.log(json_info)
      console.log("--------------------------------------")
    

    }else {
      json_info.date = cur_date
      json_info.count = 0
      json_info.authors = []
      json_info.sources = []
      json_info.messages = []
      // json_info.urls = []

      calendar_list.push(json_info);
    }
  }
  console.log(calendar_list)
  return calendar_list
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