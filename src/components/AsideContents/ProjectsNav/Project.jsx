import './Project.css'
import {FaProjectDiagram} from 'react-icons/fa/'
import ProjectActions from '../../../redux/actions/Project.actions'
import {useDispatch} from 'react-redux'


function Project({item}){
    const style = { color: "var(--yellowColor)", fontSize: "1.5em" }
    const dispatch = useDispatch()

    const dispatchProject = () => dispatch(ProjectActions.selectProject(item))
    

    return(
        <div className="projectItem" onClick={dispatchProject}>
            <FaProjectDiagram style={style}/>
        
            <div className="projectItem-name">
                {item.title}
            </div>
        </div>
    )
}

export default Project