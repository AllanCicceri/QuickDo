import './ContentHeader.css'
import InsertTask from '../TasksContent/InsertTask'
import {useSelector} from 'react-redux'
import Api from '../../../api/api'
import {useState} from 'react'

function ContentHeader(){
    const activeProjectState = useSelector(state => state.activeProject)
    const [showAddTask, setShowAddTask] = useState(false)

    const handleAddTask = () => {
        if(activeProjectState == null) return

        setShowAddTask(true)

        // Api.addTask(activeProjectState, {title:'myLittleTask', description:'Ive got to do', state:'todo', priority:'low'})
    }


    return(
        <header className="contentHeader">
            <h2>{activeProjectState !== null? activeProjectState.title:"Olá, como está seu dia?"}</h2>
            <div className="contentHeader-searchContainer">
                <input type="text" placeholder="search for task..."/>
            </div>
            <div className="contentHeader--buttonContainer">
                <button className="contentHeader-insertTask" onClick={handleAddTask}>+ Add Task</button>
                {showAddTask && <InsertTask/>}
            </div>
        </header>
    )
}

export default ContentHeader