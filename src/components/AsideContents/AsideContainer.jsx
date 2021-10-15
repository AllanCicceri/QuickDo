import './AsideContainer.css'
import User from './User/User'
import ProjectsNav from '../ProjectsNav/ProjectsNav'

function AsideContainer(){
    return (
        <aside className="container">
            <User />
            <ProjectsNav />
        </aside>
    )
}

export default AsideContainer