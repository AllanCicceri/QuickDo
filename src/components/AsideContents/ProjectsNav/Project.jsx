import './Project.css'
import {AiFillFilePpt} from 'react-icons/ai'
import ActiveProjectActions from '../../../redux/actions/ActiveProject'
import {useDispatch,useSelector} from 'react-redux'
import Api from '../../../api/api'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

function Project({item}){
    const projectIconStyle = { color: item.color, borderRadius: '5px', fontSize: "1.5em", width:'20%' }
    const dispatch = useDispatch()
    const activeProjectState = useSelector(state => state.activeProject)

    const handleProjectClick = async () => {
        dispatchProject()
        const tasks = getProjectTasks()
    }

    const dispatchProject = () => {
        dispatch(ActiveProjectActions.activeProject(item))
    }
    
    const getProjectTasks = async()=>{
        const tasks = await Api.getTasks(item)
    }

    return(
        <Tippy content={item.description}>
            <div className="projectItem" onClick={handleProjectClick}>
                <AiFillFilePpt style={projectIconStyle}/>
            
                <div className="projectItem-name" >
                    {item.title}
                </div>
            </div>
        </Tippy>
    )
}

export default Project