import styled from "styled-components";

const StyledTaskItem = styled.span`
    width: 350px;
    height: 160px;
    margin: 10px;
    border-radius: 20px;
    display: inline-block;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 1px 1px 3px 3px rgba(100, 100, 100, .3);
    background-color: ${props => props.backGroundColor};

    .taskItem-Container{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 15px;
    }
    
    .taskItem-title{
        height: 15%;
        width: 100%;
        color: #fff;
        font-weight: bold;
        font-family: 'Yanone Kaffeesatz', sans-serif;
        font-size: 1.2rem;
    }
    .taskItem-description{
        padding-top: 10px;
        height: 100%;
        width: 100%;
        overflow: hidden;
        color: #fff;
        font-family: 'Yanone Kaffeesatz', sans-serif;
        font-size: 1.2rem;
    }
`

export default StyledTaskItem