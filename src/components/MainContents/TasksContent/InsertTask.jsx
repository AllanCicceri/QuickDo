import './InsertTask.css'
import {useState} from 'react'
import StyledInsertTask from './InsertTask.styled'

function InsertTask(){
    const colors = {blue: '#C4D6E3', yellow: '#FBB02D', red: '#E23C4A', green: '#99D17B', purple: '#8B7DF2'}
    const [selectedColor, setSelectedColor] = useState(colors.blue)
    const [taskObject, setTaskObject] = useState({color:'', title:'', description:''})
    
    const handleConfirm = e => {
        e.preventDefault()
        setTaskObject({...taskObject, color: selectedColor})
        console.log(taskObject)        
    }

    const handleTaskTitle = e => {
        setTaskObject({...taskObject, color: selectedColor, title: e.target.value})
    }
    const handleTaskDescription = e => {
        setTaskObject({...taskObject, color: selectedColor, description: e.target.value})
    }

    const handleColor = color => {
        setSelectedColor(color)
    }

    return(
        <StyledInsertTask backGroundColor={selectedColor}>
            <form action="" onSubmit={handleConfirm} className="insertTask-form">
            <input type="text" placeholder="title..." className="insertTask-title" onChange={handleTaskTitle} value={taskObject.title}/>
            <textarea type="" placeholder="Description..." className="insertTask-description" onChange={handleTaskDescription} value={taskObject.description}/>
            <div className="colorsPicker">
                <div className="colorsPicker-element" style={{backgroundColor:`${colors.blue}`}} onClick={() => handleColor(colors.blue)}></div>
                <div className="colorsPicker-element" style={{backgroundColor:`${colors.red}`}} onClick={() => handleColor(colors.red)}></div>
                <div className="colorsPicker-element" style={{backgroundColor:`${colors.yellow}`}} onClick={() => handleColor(colors.yellow)}></div>
                <div className="colorsPicker-element" style={{backgroundColor:`${colors.green}`}} onClick={() => handleColor(colors.green)}></div>
                <div className="colorsPicker-element" style={{backgroundColor:`${colors.purple}`}} onClick={() => handleColor(colors.purple)}></div>
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