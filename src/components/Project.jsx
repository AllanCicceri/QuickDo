import './Project.css'
import {FaProjectDiagram} from 'react-icons/fa/'
import { IconContext } from "react-icons";

function Project({item}){
    const style = { color: "#FFDE70", fontSize: "1.5em" }

    return(
        <div className="project-item">
            <FaProjectDiagram style={style}/>
        
            <div className="project-ItemName">
                {item.title}
            </div>
        </div>
    )
}

export default Project