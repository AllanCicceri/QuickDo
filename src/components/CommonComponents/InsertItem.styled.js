import styled from "styled-components";

const StyledInsertItem = styled.div`
    background-color: ${props => props.backGroundColor};
    width: 250px;
    height: 220px;
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    margin: 20px 50px;
    padding: 10px 10px;

    border-radius: 13px;
    border: 2px solid var(--grayColor);

    box-shadow: 1px 1px 3px 3px rgba(100, 100, 100, .3);

    display: flex;
    flex-direction: column;

    textarea,input{
        width: 100%;
        margin-top: 5px;
        border-radius: 3px;
        border: 1px var(--grayColor) solid;
        outline: none;
        font-size: .8rem;
        color: var(--grayColor);
    };

    textarea{
        height: 100px;
        resize: none;
    }

    .insertItem--colorPicker{
        display: flex;
        margin: 5px 0 30px 0;
        padding: 0 3px;
    }

    .insertItem--color{
        width: 15px;
        height: 15px;
        margin-right: 5px;
        border: 2px #fff solid;
        border-radius: 5px;
        cursor: pointer;
    }
    .insertItem--buttonsContainer{
        display: flex;
        justify-content: space-between;
    }

    button{
        width: 100px;
        border-radius: 5px;
        border: solid 1px var(--grayColor);
        background-color: #fff;
        font-weight: bold;
        font-size: 1.1rem;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        cursor: pointer;
    }

    .insertItem--btnConfirm{
        color: var(--greenColor)
    }
    .insertItem--btnCancel{
        color: var(--redColor)
    }
`

export default StyledInsertItem