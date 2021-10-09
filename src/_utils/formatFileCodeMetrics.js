export function formatFileCodeMetrics(response) {

    let labelDataMap = getlabelDataMap(response);

    console.log(labelDataMap)
    return labelDataMap.file_name[0]










  
    // console.log(response);
    
    // return [" spacekey: "+response[0].space_key, ", source: "+response[0].source, 
    // ", filename: "+response[0].file_name, 
    // ", code line: "+response[0].code_lines_count, ", blank line: "+response[0].blank_lines_count, 
    // ", comment line: "+response[0].comment_lines_count, ", ratio: "+ response[0].comment_to_code_ratio]
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