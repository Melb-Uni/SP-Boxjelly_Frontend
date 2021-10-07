export function formatGitTableData(response) {
    // console.log(response[0]);
    // console.log(response[0].date);
    // return [response[0].date, response[0].author, response[0].source, response[0].message, response[0].url]
    return response.map((item)=>{
        return {
            ...item,
            branchName:'master'
        }
    })
}
