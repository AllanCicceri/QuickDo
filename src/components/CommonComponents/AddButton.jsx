import StyledAddButton from "./AddButton.styled"

function AddButton({props}){
    

    return(
        <StyledAddButton width={props.width} onClick={props.onClick} enabled={props.enabled} disabled={!props.enabled}>
            {props.label}
        </StyledAddButton>        
    )
}

export default AddButton