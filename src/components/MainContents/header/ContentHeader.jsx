import './ContentHeader.css'
import {useSelector} from 'react-redux'

function ContentHeader(){
    const activeProjectState = useSelector(state => state.activeProject)

    return(
        <header className="contentHeader">
            <h2>{activeProjectState !== null? activeProjectState.title:"Olá, como está seu dia?"}</h2>
            <div className="contentHeader-searchContainer">
                <input type="text" placeholder="search for task..."/>
            </div>
            <div className="contentHeader-insertTask">+ Add Task</div>
        </header>
    )
}

export default ContentHeader