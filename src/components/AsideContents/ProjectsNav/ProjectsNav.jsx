import './ProjectsNav.css'
import Project from './Project'
import Api from '../../../api/api'
import {useSelector,useDispatch} from 'react-redux'
import ProjectActions from '.././../../redux/actions/Project.actions'
import InsertItem from '../../InsertItem/InsertItem'
import {useState} from 'react'

function ProjectsNav() {
    const stateUser = useSelector(state => state.user)
    const projectsState = useSelector(state => state.project)
    const [showInsertItem, setShowInsertItem] = useState(false)
    const dispatch = useDispatch()

    const handleAddProjectClick = () => {
        setShowInsertItem(true)
    }

    const addProject = (item) =>
    {
        setShowInsertItem(false)
        if(item === null) return
        
        Api.addProject(stateUser, item)

        const newState = [...projectsState, item]
        dispatch(ProjectActions.addPoject(newState))
    }
    
    return (
        <div className="projects-container">
            <div className="projects-addProject-container">
                <button className="projects-addProject-btn" onClick={handleAddProjectClick}>+ add Project</button>
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