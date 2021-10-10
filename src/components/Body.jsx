import './Body.css'
import ListOfProjects from './ListOfProjects'
import Content from './Content'

function Body() {
    return (
        <body className="appBody">
            <aside className="projects-container">
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