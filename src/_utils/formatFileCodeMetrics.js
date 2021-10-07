export function formatFileCodeMetrics(response) {

















  
    console.log(response);
    
    return [" spacekey: "+response[0].space_key, ", source: "+response[0].source, 
    ", filename: "+response[0].file_name, 
    ", code line: "+response[0].code_lines_count, ", blank line: "+response[0].blank_lines_count, 
    ", comment line: "+response[0].comment_lines_count, ", ratio: "+ response[0].comment_to_code_ratio]
}