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
    background-color: ${props => props.enabled? 'rgba(251,176,45,1)':'rgba(150,150,150,.6)'};
    color: #FFF;
    border-radius: 10px;
    border: none;
    cursor: ${props => props.enabled?'pointer':'default'};

    &:hover{
        scale: ${props => props.enabled?1.1:1}
    }
`
export default StyledAddButton