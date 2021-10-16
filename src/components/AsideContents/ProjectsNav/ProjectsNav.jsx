import './ProjectsNav.css'
import Project from './Project'

function ProjectsNav() {
    const projects = [{id:1,title:"Pojeto1"}, {id:2,title:"Pojeto2"}, {id:3,title:"Pojeto3"}]

    return (
        <div className="projects-container">
            <div className="projects-addProject-container">
                <div className="projects-addProject-btn">+ add Project</div>
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