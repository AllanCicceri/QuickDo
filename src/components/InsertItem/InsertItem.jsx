import StyledInsertItem from "./InsertItem.styled";
import {useState} from 'react'

function InsertItem({insertCB}){
    const colors = { yellow: '#FBB02D', red: '#E23C4A', green: '#99D17B', purple: '#8B7DF2'}
    const [itemObject, setItemObject] = useState({color: colors.yellow, title:'', description:''})
    
    const handleConfirm = e => {
        if(itemObject.title === '' || itemObject.description === '')
            return

        setItemObject({...itemObject})
        insertCB(itemObject)   
    }
    
    const handleCancel = e => {
        setItemObject({title:'', description:'', color:''})
        insertCB(null)
    }
    
    const handleItemTitle = e => {
        setItemObject({...itemObject, title: e.target.value})
    }
    const handleItemDescription = e => {
        setItemObject({...itemObject, description: e.target.value})
    }

    const handleColor = color => {
        setItemObject({...itemObject, color: color})
    }


    return (
        <StyledInsertItem backGroundColor={itemObject.color}>
            <input type="text" placeholder="title..." onChange={handleItemTitle} value={itemObject.title}/>
            <textarea type="" placeholder="Description..." onChange={handleItemDescription} value={itemObject.description}/>
            <div className="insertItem--colorPicker">
                <div className="insertItem--color" style={{backgroundColor:`${colors.red}`}} onClick={() => handleColor(colors.red)}></div>
                <div className="insertItem--color" style={{backgroundColor:`${colors.yellow}`}} onClick={() => handleColor(colors.yellow)}></div>
                <div className="insertItem--color" style={{backgroundColor:`${colors.green}`}} onClick={() => handleColor(colors.green)}></div>
                <div className="insertItem--color" style={{backgroundColor:`${colors.purple}`}} onClick={() => handleColor(colors.purple)}></div>
            </div>
            <div className="insertItem--buttonsContainer">
                <button className="insertItem--btnConfirm" onClick={handleConfirm}>Confirm</button>
                <button className="insertItem--btnCancel" onClick={handleCancel}>Cancel</button>
            </div>
        </StyledInsertItem>
    )
}

export default InsertItem