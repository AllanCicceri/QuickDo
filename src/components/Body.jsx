import './Body.css'
import ListOfProjects from './ProjectsNav/ListOfProjects'
import Content from './TasksContent/Content'
import {useSelector} from 'react-redux'

function Body() {
    const state = useSelector(state => state.user)

    return (
        <body className="appBody">
            <aside className="projects-container">
                <div className="user">
                    <img src={state.avatar} alt="" />
                    <div className="user-name">{state.name}</div>
                </div>
                <div className="projects-header">
                    <div className="projects-label">Projects</div>
                    <div className="projects-insertProject">+ Add</div>
                </div>
                <ListOfProjects />
            </aside>
            <Content />
        </body>
    )
}

export default Body