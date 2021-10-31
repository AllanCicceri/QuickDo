import './ContentHeader.css'
import InsertItem from '../../CommonComponents/InsertItem'
import {useSelector} from 'react-redux'
import Api from '../../../api/api'
import {useState} from 'react'
import AddButton from '../../CommonComponents/AddButton'

function ContentHeader(){
    const activeProjectState = useSelector(state => state.activeProject)
    const [showAddTask, setShowAddTask] = useState(false)
    const props = {label:'+ Add Task', width:'150px', onClick:handleAddTask, enabled:(activeProjectState !== null)}

    function handleAddTask(){
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
                <AddButton props={props} />
                {showAddTask && <InsertItem insertCB={handleInsertItem}/>}
            </div>
        </header>
    )
}

export default ContentHeader