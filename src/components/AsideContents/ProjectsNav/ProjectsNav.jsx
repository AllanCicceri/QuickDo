import './ProjectsNav.css'
import Project from './Project'

function ProjectsNav() {
    const projects = [{id:1,title:"Pojeto1"}, {id:2,title:"Pojeto2"}, {id:3,title:"Pojeto3"}]

    return (
        <div className="projects-container">
            <div className="ListOfProjects">
                {projects.map((item) => (
                    <Project key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsNav