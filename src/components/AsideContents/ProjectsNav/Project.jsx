import './Project.css'
import {AiFillFilePpt} from 'react-icons/ai'
import {useDispatch,useSelector} from 'react-redux'
import Api from '../../../api/api'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import ActionTypes from '../../../redux/actions/ActionTypes'

function Project({item}){
    const projectIconStyle = { color: item.color, borderRadius: '5px', fontSize: "1.5em", width:'20%' }
    const dispatch = useDispatch()
    const activeProjectState = useSelector(state => state.activeProject)

    const handleProjectClick = async () => {
        dispatchProject()
        const projectTasks = await getProjectTasks()
        dispatch({type: ActionTypes.SET_PROJECT_TASKS, projectTasks})
    }

    const dispatchProject = () => {
        dispatch({type:ActionTypes.SET_ACTIVE_PROJECT, activeProject:item})
    }
    
    const getProjectTasks = async()=>{
        return await Api.getTasks(item)
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