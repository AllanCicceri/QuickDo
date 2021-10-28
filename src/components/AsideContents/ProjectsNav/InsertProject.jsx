import StyledInsertProject from "./InsertProject.styled";
import {useState} from 'react'

function InsertProject(){
    const colors = {blue: '#C4D6E3', yellow: '#FBB02D', red: '#E23C4A', green: '#99D17B', purple: '#8B7DF2'}
    const [selectedColor, setSelectedColor] = useState(colors.blue)
    const [projectObject, setProjectObject] = useState({color:'', title:'', description:''})
    
    const handleConfirm = e => {
        e.preventDefault()
        setProjectObject({...projectObject, color: selectedColor})      
    }

    const handleProjectTitle = e => {
        setProjectObject({...projectObject, color: selectedColor, title: e.target.value})
    }
    const handleProjectDescription = e => {
        setProjectObject({...projectObject, color: selectedColor, description: e.target.value})
    }

    const handleColor = color => {
        setSelectedColor(color)
    }


    return (
        <StyledInsertProject backGroundColor={selectedColor}>
            <form action="" onSubmit={handleConfirm}>
            <input type="text" placeholder="title..." onChange={handleProjectTitle} value={projectObject.title}/>
            <textarea type="" placeholder="Description..." onChange={handleProjectDescription} value={projectObject.description}/>
            <div className="insertProject--colorPicker">
                <div className="insertProject--color" style={{backgroundColor:`${colors.blue}`}} onClick={() => handleColor(colors.blue)}></div>
                <div className="insertProject--color" style={{backgroundColor:`${colors.red}`}} onClick={() => handleColor(colors.red)}></div>
                <div className="insertProject--color" style={{backgroundColor:`${colors.yellow}`}} onClick={() => handleColor(colors.yellow)}></div>
                <div className="insertProject--color" style={{backgroundColor:`${colors.green}`}} onClick={() => handleColor(colors.green)}></div>
                <div className="insertProject--color" style={{backgroundColor:`${colors.purple}`}} onClick={() => handleColor(colors.purple)}></div>
            </div>
            <div className="insertProject--buttonsContainer">
                <button>Confirm</button>
                <button>Cancel</button>
            </div>
            </form>
        </StyledInsertProject>
    )
}

export default InsertProject