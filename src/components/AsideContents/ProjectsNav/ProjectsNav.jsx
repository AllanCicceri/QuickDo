import './ProjectsNav.css'
import Project from './Project'
import Api from '../../../api/api'
import {useSelector,useDispatch} from 'react-redux'
import ProjectActions from '.././../../redux/actions/Project.actions'
import InsertProject from './InsertProject'
import {useState} from 'react'

function ProjectsNav() {
    const stateUser = useSelector(state => state.user)
    const projectsState = useSelector(state => state.project)
    const [showInsertProject, setShowInsertProject] = useState(false)
    const dispatch = useDispatch()

    const handleAddProjectClick = () => {
        setShowInsertProject(true)
    }

    const addProject = () =>
    {
        const projectName = document.getElementById('projectNameInput')
        if(projectName.value === '') return

        const project = {
            title: projectName.value,
        }

        projectName.value = ''
        
        Api.addProject(stateUser, project)

        const newState = [...projectsState, project]
        dispatch(ProjectActions.addPoject(newState))
    }
    
    return (
        <div className="projects-container">
            <div className="projects-addProject-container">
                {/* <input type="text" id="projectNameInput" className="projects-inputNameProject" placeholder="Name your new project"/> */}
                <button className="projects-addProject-btn" onClick={handleAddProjectClick}>+ add Project</button>
                {showInsertProject && <InsertProject/>}
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