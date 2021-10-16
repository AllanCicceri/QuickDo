import './ProjectsNav.css'
import Project from './Project'
import Api from '../../../api/api'
import {useSelector} from 'react-redux'

function ProjectsNav() {
    const projects = [{id:1,title:"Pojeto1"}, {id:2,title:"Pojeto2"}, {id:3,title:"Pojeto3"}]
    const stateUser = useSelector(state => state.user)

    const addProject = () =>
    {
        const project = {
            id: 8383,
            title: 'Projetinho basico',
            description: 'É um projetinho muito básico para teste'
        }

        Api.addProject(stateUser, project)
    }

    return (
        <div className="projects-container">
            <div className="projects-addProject-container">
                <div className="projects-addProject-btn" onClick={addProject}>+ add Project</div>
            </div>
            <div className="projects-ListOfProjects">
                {projects.map((item) => (
                    <Project key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsNav