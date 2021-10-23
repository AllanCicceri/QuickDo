import styled from "styled-components";

const StyledInsertTask = styled.div`
    background-color: ${props => props.backGroundColor};
    width: 250px;
    height: 260px;
    z-index: 99;
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px 20px;
    padding: 10px 5px;

    border-radius: 15px;
    border: 2px solid var(--grayColor);
    
    box-shadow: 1px 1px 3px 3px rgba(100, 100, 100, .3);

    display: flex;
`

export default StyledInsertTask