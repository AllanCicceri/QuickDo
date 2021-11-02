import './ContentHeader.css'
import InsertItem from '../../CommonComponents/InsertItem'
import {useSelector} from 'react-redux'
import Api from '../../../api/api'
import {useState} from 'react'
import AddButton from '../../CommonComponents/AddButton'
import taskState from '../../../assets/js/TaskState'
import ActionTypes from '../../../redux/actions/ActionTypes'
import {useDispatch} from 'react-redux'

function ContentHeader(){
    const activeProjectState = useSelector(state => state.project.activeProject)
    const [showAddTask, setShowAddTask] = useState(false)
    const dispatchTask = useDispatch()
    const addButtonProps = {label:'+ Add Task', width:'150px', onClick:handleShowAddTask, enabled:(activeProjectState !== null)}

    
    function handleShowAddTask(){
        setShowAddTask(true)
    }


    const handleInsertItem = async (task) => {
        setShowAddTask(false)
        if(task === null) return
        
        const newTask = {...task, state: taskState.TODO}
        addNewTaskDb(newTask)
        dispatchTask({type:ActionTypes.ADD_TASK, newTask})
    }
    
    const addNewTaskDb = task => {
        Api.addTask(activeProjectState, task)
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