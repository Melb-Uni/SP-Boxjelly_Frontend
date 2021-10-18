export function formatGitTableData(response) {
    // sort descending by date
    response.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
    })
    return response.map((item)=>{
        return {
            ...item,
            branchName:'master'
        }
    })
}
