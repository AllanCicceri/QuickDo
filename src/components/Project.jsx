import './Project.css'
import {GrProjects} from 'react-icons/gr/'

function Project({item}){
    
    return(
        <div className="project-item">
            <GrProjects />
            <div className="project-ItemName">
                {item.title}
            </div>
        </div>
    )
}

export default Project