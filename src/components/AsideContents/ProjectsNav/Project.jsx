import './Project.css'
import {FaProjectDiagram, FaEdit, FaThermometerFull} from 'react-icons/fa/'
import ActiveProjectActions from '../../../redux/actions/ActiveProject'
import {useDispatch} from 'react-redux'
import Api from '../../../api/api'

function Project({item}){
    const projectDiagramStyle = { color: "var(--yellowColor)", fontSize: "1.5em" }
    const faEditStyle = { color: "var(--grayColor)", fontSize: "1em", marginLeft: "15px", cursor:"pointer" }
    const dispatch = useDispatch()

    const handleProjectClick = async () => {
        dispatchProject()
        const tasks = getProjectTasks()
    }

    const dispatchProject = () => {
        dispatch(ActiveProjectActions.activeProject(item))
    }
    
    const getProjectTasks = async()=>{
        const tasks = await Api.getTasks(item)
        console.log('myTask', tasks)    
    }
    
    return(
        <div className="projectItem" onClick={handleProjectClick}>
            <FaProjectDiagram style={projectDiagramStyle}/>
        
            <div className="projectItem-name" >
                {item.title}
            </div>
        </div>
    )
}

export default Project