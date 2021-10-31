import './ContentHeader.css'
import InsertItem from '../../CommonComponents/InsertItem'
import {useSelector} from 'react-redux'
import Api from '../../../api/api'
import {useState} from 'react'
import AddButton from '../../CommonComponents/AddButton'
import taskState from '../../../assets/js/TaskState'

function ContentHeader(){
    const activeProjectState = useSelector(state => state.activeProject)
    const [showAddTask, setShowAddTask] = useState(false)
    const addButtonProps = {label:'+ Add Task', width:'150px', onClick:handleShowAddTask, enabled:(activeProjectState !== null)}

    
    function handleShowAddTask(){
        setShowAddTask(true)
    }


    const handleInsertItem = (task) => {
        setShowAddTask(false)
        if(task === null) return
        
        addNewTask(task)
    }
    
    const addNewTask = task => {
        const newTask = {...task, state: taskState.TODO}
        Api.addTask(activeProjectState, newTask)
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
                <AddButton props={addButtonProps} />
                {showAddTask && <InsertItem insertCB={handleInsertItem}/>}
            </div>
        </header>
    )
}

export default ContentHeader