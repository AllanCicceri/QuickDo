import './ProjectsNav.css'
import Project from './Project'
import Api from '../../../api/api'
import {useSelector} from 'react-redux'

function ProjectsNav() {
    const projects = [{id:1,title:"Pojeto1"}, {id:2,title:"Pojeto2"}, {id:3,title:"Pojeto3"}]
    const stateUser = useSelector(state => state.user)
    const projectsState = useSelector(state => state.project)


    const addProject = () =>
    {
        const projectName = document.getElementById('projectNameInput')
        if(projectName.value === '') return

        const project = {
            title: projectName.value,
        }

        projectName.value = ''
        
        Api.addProject(stateUser, project)
    }

    return (
        <div className="projects-container">
            <div className="projects-addProject-container">
                <input type="text" id="projectNameInput" className="projects-inputNameProject" placeholder="Name your new project"/>
                <button className="projects-addProject-btn" onClick={addProject}>+ add</button>
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