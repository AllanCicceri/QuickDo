import styled from "styled-components";

const StyledInsertProject = styled.div`
    background-color: ${props => props.backGroundColor};
    width: 250px;
    height: 260px;
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    margin: 20px 50px;
    padding: 10px 10px;

    border-radius: 15px;
    border: 2px solid var(--grayColor);
    
    box-shadow: 1px 1px 3px 3px rgba(100, 100, 100, .3);

    display: flex;

    textarea,input{
        width: 100%;
        margin-top: 5px;
        border-radius: 5px;
        border: 1px var(--grayColor) solid;
    };

    textarea{
        height: 150px;
    }

    .insertProject--colorPicker{
        display: flex;
        justify-content: space-around;
        margin: 10px 0;
    }

    .insertProject--color{
        width: 15px;
        height: 15px;
        border: 2px #fff solid;
        cursor: pointer;
    }
    .insertProject--buttonsContainer{
        display: flex;
        justify-content: space-between;
    }

    button{
        width: 100px;
        border-radius: 5px;
        border: solid 1px var(--grayColor);
        background-color: #fff;
    }
`

export default StyledInsertProject