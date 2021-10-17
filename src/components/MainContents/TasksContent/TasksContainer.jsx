import './TasksContainer.css'
import TaskItem from './TaskItem'

function TasksContainer() {
    const tasksTodo = [{ id: 1, title: 'mytitle', obs: 'ive got to do that sh' }]
    const tasksDoing = [{ id: 44, title: 'mytitle', obs: 'ive got to do that sh' }]
    const tasksDone = [{ id: 66, title: 'mytitle', obs: 'ive got to do that sh' }]


    return (
        <main className="tasksContainer">
            <div className="tasks-todo">
                <div className="todo-label">To do</div>
                <div className="taskItems-todo">
                    {tasksTodo.map((item, index) => (
                        <TaskItem key={index} item={item} />
                    ))}
                </div>
            </div>

            <div className="tasks-doing">
                <div className="doing-label">Doing</div>
                <div className="taskItems-doing">
                    {tasksDoing.map((item, index) => (
                        <TaskItem key={index} item={item} />
                    ))}
                </div>
            </div>
            <div className="tasks-done">
                <div className="done-label">Done</div>
                <div className="taskItems-done">
                    {tasksDone.map((item, index) => (
                        <TaskItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default TasksContainer