import styled from "styled-components";

const StyledAddButton = styled.button`
    width: ${props => props.width};
    height: 30px;
    padding: 1px;
    margin: 0 10px;

    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
    font-family: 'Yanone Kaffeesatz', sans-serif;

    box-shadow: 1px 1px 5px 1px rgba(50, 50, 50, .2);
    background-color: ${props => (props.enabled?'#FBB02D':'#858585')};
    color: #FFF;
    border-radius: 10px;
    border: none;
    cursor: ${props => (props.enabled?'pointer':'default')};
`
export default StyledAddButton