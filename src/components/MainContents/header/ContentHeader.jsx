import './ContentHeader.css'
import {useSelector} from 'react-redux'
import Api from '../../../api/api'

function ContentHeader(){
    const activeProjectState = useSelector(state => state.activeProject)

    const handleAddTask = () => {
        activeProjectState !== null && 
            Api.addTask(activeProjectState, {title:'myLittleTask', description:'Ive got to do', state:'todo', priority:'low'})
    }

    return(
        <header className="contentHeader">
            <h2>{activeProjectState !== null? activeProjectState.title:"Olá, como está seu dia?"}</h2>
            <div className="contentHeader-searchContainer">
                <input type="text" placeholder="search for task..."/>
            </div>
            <button className="contentHeader-insertTask" onClick={handleAddTask}>+ Add Task</button>
        </header>
    )
}

export default ContentHeader