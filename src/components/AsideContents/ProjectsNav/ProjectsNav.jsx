import './ProjectsNav.css'
import Project from './Project'
import Api from '../../../api/api'
import {useSelector,useDispatch} from 'react-redux'
import ActionTypes from '../../../redux/actions/ActionTypes'
import InsertItem from '../../CommonComponents/InsertItem'
import {useState} from 'react'
import AddButton from '../../CommonComponents/AddButton'

function ProjectsNav() {
    const btnProps={label:'+ Add Project', width:'100%', onClick:handleAddProjectClick, enabled:true}
    const stateUser = useSelector(state => state.user)
    const projectsState = useSelector(state => state.project.allProjects)
    const [showInsertItem, setShowInsertItem] = useState(false)
    const dispatchProject = useDispatch()

    function handleAddProjectClick(){
        setShowInsertItem(true)
    }

    const addProject = (item) =>
    {
        setShowInsertItem(false)
        if(item === null) return
        
        Api.addProject(stateUser, item)

        // const newState = [...projectsState, item]
        
        dispatchProject({type:ActionTypes.ADD_PROJECT, newProject:item})
    }

    document.onkeyup = e => {
        if(e.key === "Escape" && showInsertItem) setShowInsertItem(false)
    }
    
    return (
        <div className="projects-container">
            <div className="projects-addProject-container">
                <AddButton props={btnProps}/>
                {showInsertItem && <InsertItem insertCB={addProject}/>}
            </div>
            <div className="projects-ListOfProjects">
                {projectsState !== null && projectsState.map((item) => (
                    <Project key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsNav