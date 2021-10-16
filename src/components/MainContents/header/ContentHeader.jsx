import './ContentHeader.css'
import {useSelector} from 'react-redux'

function ContentHeader(){
    const state = useSelector(state => state.project)

    return(
        <header className="contentHeader">
            <h2>{state !== null? state.title:"Olá, como está seu dia?"}</h2>
            <div className="contentHeader-searchContainer">
                <input type="text" placeholder="search for task..."/>
            </div>
            <div className="contentHeader-insertTask">+ Add Task</div>
        </header>
    )
}

export default ContentHeader