export function formatFileCodeMetrics(response) {

    let labelDataMap = getlabelDataMap(response);
    let frontend = [], backend = []
    let frontend_countline = [], backend_countline = [];
    let frontend_background_color = ["#f4a3bb","#f4abc0","#f5b2c6", "#f6b9cb", "#f7c1d1", 
    "#f8c8d6", "#f9cfdb", "#fad6e1", "#fbdee6", "#fbe5ec"]
    let backend_background_color = ["#9bcefd","#a3d2fd","#abd6fd", "#b3dafd", "#bbddfd", 
    "#c3e1fd", "#cbe5fd", "#d3e9fe", "#dbedfe", "#e3f1fe"]
    
    for (let i = 0; i < labelDataMap.source.length; i++){

        if (labelDataMap.source[i] =="frontend"){
            frontend.push([
              labelDataMap.file_name[i],
              labelDataMap.CountDeclClass[i],
              labelDataMap.CountDeclExecutableUnit[i],
              labelDataMap.CountDeclFunction[i],
              labelDataMap.CountLine[i],
              labelDataMap.CountLineCode[i],
              labelDataMap.CountLineBlank[i],
              labelDataMap.CountLineComment[i],
              labelDataMap.CountStmt[i],
              labelDataMap.CountStmtDecl[i],
              labelDataMap.CountStmtExe[i],
              labelDataMap.CountPath[i],
              labelDataMap.Cyclomatic[i],
              labelDataMap.Essential[i],
              labelDataMap.MaxNesting[i],
              labelDataMap.RatioCommentToCode[i],
            ])
            frontend_countline.push(labelDataMap.CountLine[i])
        }
        else {
          backend.push([
            labelDataMap.file_name[i],
            labelDataMap.CountDeclClass[i],
            labelDataMap.CountDeclExecutableUnit[i],
            labelDataMap.CountDeclFunction[i],
            labelDataMap.CountLine[i],
            labelDataMap.CountLineCode[i],
            labelDataMap.CountLineCodeDecl[i],
            labelDataMap.CountLineCodeExe[i],
            labelDataMap.CountLineBlank[i],
            labelDataMap.CountLineComment[i],
            labelDataMap.CountStmt[i],
            labelDataMap.CountStmtDecl[i],
            labelDataMap.CountStmtExe[i],
            labelDataMap.CountPath[i],
            labelDataMap.Cyclomatic[i],
            labelDataMap.Essential[i],
            labelDataMap.MaxNesting[i],
            labelDataMap.RatioCommentToCode[i],
          ])
          frontend_countline.push(labelDataMap.CountLine[i])
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


    let sort_frontend_filename = [], sort_frontend_countdeclclass = [], sort_frontend_countdeclexecutableunit = [];
    let sort_frontend_countdeclfunction = [], sort_frontend_countline = [], sort_frontend_countcode = [];
    let sort_frontend_countblank = [], sort_frontend_countcomment = [], sort_frontend_stmt = [], sort_frontend_stmtdecl = [];
    let sort_frontend_stmtexe = [], sort_frontend_countpath= [], sort_frontend_cyclomatic = [];
    let sort_frontend_essential = [], sort_frontend_maxnesting = [], sort_frontend_ratiocommenttocode = [];
    for (let i = 0; i < frontend.length; i++){
        sort_frontend_filename.push((frontend[i][0]).substring(frontend[i][0].lastIndexOf("/") + 1))
        sort_frontend_countdeclclass.push(frontend[i][1])
        sort_frontend_countdeclexecutableunit.push(frontend[i][2])
        sort_frontend_countdeclfunction.push(frontend[i][3])
        sort_frontend_countline.push(frontend[i][4])
        sort_frontend_countcode.push(frontend[i][5])
        sort_frontend_countblank.push(frontend[i][6])
        sort_frontend_countcomment.push(frontend[i][7])
        sort_frontend_stmt.push(frontend[i][8])
        sort_frontend_stmtdecl.push(frontend[i][9])
        sort_frontend_stmtexe.push(frontend[i][10])
        sort_frontend_countpath.push(frontend[i][11])
        sort_frontend_cyclomatic.push(frontend[i][12])
        sort_frontend_essential.push(frontend[i][13])
        sort_frontend_maxnesting.push(frontend[i][14])
        sort_frontend_ratiocommenttocode.push(frontend[i][15])
    }


    let sort_backend_filename = [], sort_backend_countdeclclass = [], sort_backend_countdeclexecutableunit = [];
    let sort_backend_countdeclfunction = [], sort_backend_countline = [], sort_backend_countcode = [];
    let sort_backend_countcodedecl = [], sort_backend_countcodeexe = [];
    let sort_backend_countblank = [], sort_backend_countcomment = [], sort_backend_stmt = [], sort_backend_stmtdecl = [];
    let sort_backend_stmtexe = [], sort_backend_countpath= [], sort_backend_cyclomatic = [];
    let sort_backend_essential = [], sort_backend_maxnesting = [], sort_backend_ratiocommenttocode = [];
    for (let i = 0; i < backend.length; i++){
        sort_backend_filename.push((backend[i][0]).substring(frontend[i][0].lastIndexOf("/") + 1))
        sort_backend_countdeclclass.push(backend[i][1])
        sort_backend_countdeclexecutableunit.push(backend[i][2])
        sort_backend_countdeclfunction.push(backend[i][3])
        sort_backend_countline.push(backend[i][4])
        sort_backend_countcode.push(backend[i][5])
        sort_backend_countcodedecl.push(backend[i][6])
        sort_backend_countcodeexe.push(backend[i][7])
        sort_backend_countblank.push(backend[i][8])
        sort_backend_countcomment.push(backend[i][9])
        sort_backend_stmt.push(backend[i][10])
        sort_backend_stmtdecl.push(backend[i][11])
        sort_backend_stmtexe.push(backend[i][12])
        sort_backend_countpath.push(backend[i][13])
        sort_backend_cyclomatic.push(backend[i][14])
        sort_backend_essential.push(backend[i][15])
        sort_backend_maxnesting.push(backend[i][16])
        sort_backend_ratiocommenttocode.push(backend[i][17])
    }

    return [
      {
        countline: {filename: sort_frontend_filename, value: sort_frontend_countline, color: frontend_background_color},
        countdeclclass: {filename: sort_frontend_filename, value: sort_frontend_countdeclclass, color: frontend_background_color},
        countdeclexecutableunit: {filename: sort_frontend_filename, value: sort_frontend_countdeclexecutableunit, color: frontend_background_color},
        countdeclfunction: {filename: sort_frontend_filename, value: sort_frontend_countdeclfunction, color: frontend_background_color},
        countcode: {filename: sort_frontend_filename, value: sort_frontend_countcode, color: frontend_background_color},
        countblank: {filename: sort_frontend_filename, value: sort_frontend_countblank, color: frontend_background_color},
        countcomment: {filename: sort_frontend_filename, value: sort_frontend_countcomment, color: frontend_background_color},
        countstmt: {filename: sort_frontend_filename, value: sort_frontend_stmt, color: frontend_background_color},
        countstmtdecl: {filename: sort_frontend_filename, value: sort_frontend_stmtdecl, color: frontend_background_color},
        countstmtexe: {filename: sort_frontend_filename, value: sort_frontend_stmtexe, color: frontend_background_color},
        countpath: {filename: sort_frontend_filename, value: sort_frontend_countpath, color: frontend_background_color},
        cyclomatic: {filename: sort_frontend_filename, value: sort_frontend_cyclomatic, color: frontend_background_color},
        essential: {filename: sort_frontend_filename, value: sort_frontend_essential, color: frontend_background_color},
        maxnesting: {filename: sort_frontend_filename, value: sort_frontend_maxnesting, color: frontend_background_color},
        ratiocommenttocode: {filename: sort_frontend_filename, value: sort_frontend_ratiocommenttocode, color: frontend_background_color},
      },
      {
        countline: {filename: sort_backend_filename, value: sort_backend_countline, color: backend_background_color},
        countdeclclass: {filename: sort_backend_filename, value: sort_backend_countdeclclass, color: backend_background_color},
        countdeclexecutableunit: {filename: sort_backend_filename, value: sort_backend_countdeclexecutableunit, color: backend_background_color},
        countdeclfunction: {filename: sort_backend_filename, value: sort_backend_countdeclfunction, color: backend_background_color},
        countcode: {filename: sort_backend_filename, value: sort_backend_countcode, color: backend_background_color},
        countcodedecl: {filename: sort_backend_filename, value: sort_backend_countcodedecl, color: backend_background_color},
        countcodeexe: {filename: sort_backend_filename, value: sort_backend_countcodeexe, color: backend_background_color},
        countblank: {filename: sort_backend_filename, value: sort_backend_countblank, color: backend_background_color},
        countcomment: {filename: sort_backend_filename, value: sort_backend_countcomment, color: backend_background_color},
        countstmt: {filename: sort_backend_filename, value: sort_backend_stmt, color: backend_background_color},
        countstmtdecl: {filename: sort_backend_filename, value: sort_backend_stmtdecl, color: backend_background_color},
        countstmtexe: {filename: sort_backend_filename, value: sort_backend_stmtexe, color: backend_background_color},
        countpath: {filename: sort_backend_filename, value: sort_backend_countpath, color: backend_background_color},
        cyclomatic: {filename: sort_backend_filename, value: sort_backend_cyclomatic, color: backend_background_color},
        essential: {filename: sort_backend_filename, value: sort_backend_essential, color: backend_background_color},
        maxnesting: {filename: sort_backend_filename, value: sort_backend_maxnesting, color: backend_background_color},
        ratiocommenttocode: {filename: sort_backend_filename, value: sort_backend_ratiocommenttocode, color: backend_background_color},
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