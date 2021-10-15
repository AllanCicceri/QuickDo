import './MainContainer.css'
import ContentHeader from './header/ContentHeader'
import TasksContainer from './TasksContent/TasksContainer'

function MainContainer(){
    return (
        <main className="mainContainer">
            <ContentHeader />
            <TasksContainer />
        </main>
    )
}

export default MainContainer