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

export const GitHubContent = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 800px;
    table a{
        width: 140px;
        height: 35px;
        border: 1px solid rgb(192, 192, 192);
        border-radius: 5px;
        line-height: 35px;
        margin-left: 20px;
    }
    table img{
        vertical-align: center;
        margin:0 20px;
        width: 15px;

    }
    .ant-table-thead > tr > th{
        white-space:nowrap;
        }
        .ant-table-row td{
        white-space:nowrap;
    }
    tr td{
        min-width: 200px;
    }
}


`
export const JiraContent = styled(GitHubContent)`

`
export const ConfluenceContent = styled(GitHubContent)`
    border-top: 1px solid rgb(192, 192, 192);
    width: 50%;
    margin: 100px auto 0;
    padding-top: 20px;
    img{
        width: 25px;
        vertical-align: center;
    }
    span{
        color: rgb(12,48,74);
        font-weight: 500;
    }
`

export const Comment = styled(GitHubContent)`
    width: 50%;
    margin: 60px auto 0;
    text-align: right;
    >div{
        text-align: left;
        font-size: 20px;
        font-weight: 500;
        margin: 20px 0;
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