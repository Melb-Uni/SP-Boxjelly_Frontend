import styled from "styled-components";

export const H1 = styled.div`
    margin: 50px 0;
    font-size: 30px;
    font-weight: 700;
    width: 100%;
    text-align: center;
`

export const ControlBar = styled.div`
    text-align: center;
    >*{
        margin: 0px 50px; 
        line-height: 45px;
        padding: 0 40px;
    }
    button{
        background: rgb(26,66,127);
        color: white;
        border: none;
        box-shadow: 6px 6px 12px rgba(0, 0, 0, .4);
        border-radius: 10px;
    }
    select{
        height: 30px;
    }
`
export const MembersWrap = styled.div`
    margin-top: 50px;
    width: 100%;
    thead.ant-table-thead{
        line-height: 60px;
        //line-width: 60px;
    }
    th.ant-table-cell{
        font-weight: 600;
    }
    td{
        line-height: 50px;
        //min-width: 246px;
        //max-width: 283px;
    }
    img{
        width: 60px;
    }
    td:last-of-type, th:last-of-type{
        //min-width: 400px;
    }
`

export const MyTAb = styled.div`
  margin:0 auto;
  height:200px;
  width:304px;
  line-height:50px;
  text-align:center;
  display:table;
`

export const GitHubContent = styled.div`
    margin-top: 50px;
    //width: 100%;
    //height: 800px;
    //table .link{
    //    //width: 140px;
    //    height: 35px;
    //    border: 1px solid rgb(192, 192, 192);
    //    border-radius: 5px;
    //    line-height: 35px;
    //    margin-left: 20px;
    //}
    //table img{
    //    vertical-align: center;
    //    margin:0 20px;
    //    width: 15px;
    //
    //}
    //.ant-table-thead > tr > th{
    //    white-space:nowrap;
    //    }
    //    .ant-table-row td{
    //    white-space:nowrap;
    //}
    //tr td{
    //    //min-width: 200px;
    //}
    //th{
    //    line-height: 40px;
    //}
    //td{
    //    line-height: 35px;
    //}
`
export const JiraContent = styled(GitHubContent)`
    table a{
        border: none;
    }
`
export const ConfluenceContent = styled.div`
    border-top: 1px solid rgb(192, 192, 192);
    width: 50%;
    margin: 100px auto 0;
    padding-top: 20px;
    height: 800px;
    img{
        width: 25px;
        vertical-align: center;
    }
    span, p{
        color: rgb(12,48,74);
        font-weight: 500;
    }
    p{
        text-indent: 30px;
    }
`

export const Comment = styled(GitHubContent)`
    width: 50%;
    margin: 60px auto 0;
    text-align: right;
    position: relative;
    >div{
        text-align: left;
        font-size: 20px;
        font-weight: 500;
        margin: 20px 0;
    }
    button:first-of-type{
        position: absolute;
        left: 0;
    }
    button{
        background: rgb(26,66,127);
        color: white;
        border: none;
        box-shadow: 6px 6px 12px rgba(0, 0, 0, .4);
        border-radius: 10px;
        line-height: 45px;
        padding: 0 40px;
        margin-top: 30px;
    }
    
`

