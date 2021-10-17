import './Project.css'
import {FaProjectDiagram, FaEdit, FaThermometerFull} from 'react-icons/fa/'
import ActiveProjectActions from '../../../redux/actions/ActiveProject'
import {useDispatch} from 'react-redux'
import {useRef} from 'react'


function Project({item}){
    const projectDiagramStyle = { color: "var(--yellowColor)", fontSize: "1.5em" }
    const faEditStyle = { color: "var(--grayColor)", fontSize: "1em", marginLeft: "15px", cursor:"pointer" }
    
    const dispatch = useDispatch()
    const dispatchProject = () => dispatch(ActiveProjectActions.activeProject(item))
    
    console.log('item',item)
    return(
        <div className="projectItem" onClick={dispatchProject}>
            <FaProjectDiagram style={projectDiagramStyle}/>
        
            <div className="projectItem-name" >
                {item.title}
            </div>

            {/* <FaEdit style={faEditStyle} /> */}
        </div>
    )
}

export default Project