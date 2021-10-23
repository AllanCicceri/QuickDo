import './InsertTask.css'
import {useState} from 'react'
import StyledInsertTask from './InsertTask.styled'

function InsertTask(){
    const [taskObject, setTaskObject] = useState({})
    const colors = {blue: '#C4D6E3', yellow: '#FBB02D', red: '#E23C4A', green: '#99D17B',}
    const [selectedColor, setSelectedColor] = useState(colors.blue)
    
    const handleConfirm = e => {
        e.preventDefault()
        console.log('form', e.target)
    }

    const handleColor = color => {
        setSelectedColor(color)
    }

    return(
        // <div className="insertTask-container">
        <StyledInsertTask backGroundColor={selectedColor}>
            <form action="" onSubmit={handleConfirm} className="insertTask-form">
            <input type="text" placeholder="title..." className="insertTask-title"/>
            <textarea type="" placeholder="Description..." className="insertTask-description"/>
            <div className="colorsPicker">
                <div className="colorsPicker-element" style={{backgroundColor:`${colors.blue}`}} onClick={() => handleColor(colors.blue)}></div>
                <div className="colorsPicker-element" style={{backgroundColor:`${colors.red}`}} onClick={() => handleColor(colors.red)}></div>
                <div className="colorsPicker-element" style={{backgroundColor:`${colors.yellow}`}} onClick={() => handleColor(colors.yellow)}></div>
                <div className="colorsPicker-element" style={{backgroundColor:`${colors.green}`}} onClick={() => handleColor(colors.green)}></div>
            </div>
            <div className="insertTask-buttonsContainer">
                <button className="insertTask-btnConfirm">Confirm</button>
                <button className="insertTask-btnCancel">Cancel</button>
            </div>
            </form>
        </StyledInsertTask>
    )
}

export default InsertTask