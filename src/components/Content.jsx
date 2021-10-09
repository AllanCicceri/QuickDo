import './Content.css'
import TaskItem from './TaskItem'

function Content(){
    const tasks = [
        {id:1, title:'Task1', obs: 'I haveto do that and that...'},
        {id:2, title:'Task2', obs: 'I haveto do that thing about that sht...'},
        {id:1, title:'Task1', obs: 'I haveto do that and that...'},
        {id:2, title:'Task2', obs: 'I haveto do that thing about that sht...'},
        {id:1, title:'Task1', obs: 'I haveto do that and that...'},
        {id:2, title:'Task2', obs: 'I haveto do that thing about that sht...'},
        {id:1, title:'Task1', obs: 'I haveto do that and that...'},
        {id:2, title:'Task2', obs: 'I haveto do that thing about that sht...'},
        {id:1, title:'Task1', obs: 'I haveto do that and that...'},
        {id:2, title:'Task2', obs: 'I haveto do that thing about that sht...'},
        {id:1, title:'Task1', obs: 'I haveto do that and that...'},
        {id:2, title:'Task2', obs: 'I haveto do that thing about that sht...'}
    ]
    return(
        <main className="content">
            <div className="content-header">
                <div className="content-projectName">ProjectName</div>
                <div className="content-insertTask">+ Add Task</div>
            </div>
            <div className="content-tasks">
                {tasks.map(item => (
                    <TaskItem key={item.id} item={item} />
                ) )}
            </div>
        </main>
    )
}

export default Content