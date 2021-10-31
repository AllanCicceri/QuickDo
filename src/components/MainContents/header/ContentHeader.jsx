import './ContentHeader.css'
import InsertItem from '../../InsertItem/InsertItem'
import {useSelector} from 'react-redux'
import Api from '../../../api/api'
import {useState} from 'react'

function ContentHeader(){
    const activeProjectState = useSelector(state => state.activeProject)
    const [showAddTask, setShowAddTask] = useState(false)

    const handleAddTask = () => {
        if(activeProjectState === null) return

        setShowAddTask(true)

        // Api.addTask(activeProjectState, {title:'myLittleTask', description:'Ive got to do', state:'todo', priority:'low'})
    }

    const handleInsertItem = (item) => {
        if(item === null){
            setShowAddTask(false)
            return
        }
    }

    
    document.onkeyup = e => {
        if(e.key === "Escape" && showAddTask) setShowAddTask(false)
    }
    

    return(
        <header className="contentHeader">
            <h2>{activeProjectState !== null? activeProjectState.title:"Olá, como está seu dia?"}</h2>
            <div className="contentHeader-searchContainer">
                <input type="text" placeholder="search for task..."/>
            </div>
            <div className="contentHeader--buttonContainer">
                <button className="contentHeader-btnInsertTask" onClick={handleAddTask}>+ Add Task</button>
                {showAddTask && <InsertItem insertCB={handleInsertItem}/>}
            </div>
        </header>
    )
}

export default ContentHeader