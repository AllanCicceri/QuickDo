import './Content.css'
import TaskItem from './TaskItem'

function Content(){
    const tasksTodo = [
        {id:1, title:'Task1', obs: 'I haveto do that and that...', state:'todo'},
        {id:2, title:'Task2', obs: 'I haveto do that thing about that sht...', state:'todo'},
        {id:1, title:'Task1', obs: 'I haveto do that and that...', state:'todo'},
        {id:2, title:'Task2', obs: 'I haveto do that thing about that sht...', state:'todo'},
        {id:1, title:'Task1', obs: 'I haveto do that and that...', state:'todo'},
        {id:1, title:'Task1', obs: 'I haveto do that and that...', state:'todo'},
        {id:2, title:'Task2', obs: 'I haveto do that thing about that sht...', state:'todo'},
        {id:1, title:'Task1', obs: 'I haveto do that and that...', state:'todo'},
        {id:2, title:'Task2', obs: 'I haveto do that thing about that sht...', state:'todo'}
    ]
    const tasksDoing = [
        {id:1, title:'Task1', obs: 'I haveto do that and that...', state:'doing'}, 
        {id:2, title:'Task2', obs: 'I haveto do that thing about that sht...', state:'doing'},
    ]
    const tasksDone = [
        {id:2, title:'Task2', obs: 'I haveto do that thing about that sht...', state:'done'},
        {id:1, title:'Task1', obs: 'I haveto do that and that...', state:'done'},
        {id:2, title:'Task2', obs: 'I haveto do that thing about that sht...', state:'done'},
        
    ]

    return(
        <main className="content">
            <div className="content-header">
                <div className="content-projectName">ProjectName</div>
                <div className="content-insertTask">+ Add Task</div>
            </div>
            <div className="content-tasks">
                <div className="tasks-todo">
                    <div className="todo-label">To do</div>
                    <div className="taskItems-todo">
                        {tasksTodo.map(item => (
                            <TaskItem key={item.id} item={item} />
                        ) )}
                    </div>
                </div>

                <div className="tasks-doing">
                    <div className="doing-label">Doing</div>
                    <div className="taskItems-doing">
                        {tasksDoing.map(item => (
                            <TaskItem key={item.id} item={item} />
                        ) )}
                    </div>
                </div>
                <div className="tasks-done">
                    <div className="done-label">Done</div>
                    <div className="taskItems-done">
                        {tasksDone.map(item => (
                            <TaskItem key={item.id} item={item} />
                        ) )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Content