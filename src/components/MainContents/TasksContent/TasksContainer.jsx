import './TasksContainer.css'
import TaskItem from './TaskItem'
import {useSelector} from 'react-redux'
import TaskState from '../../../assets/js/TaskState'

function TasksContainer() {
    const activeProjectState = useSelector(state => state.project.activeProject)
    const tasksState = useSelector(state => state.tasks)
    const tasksTodo = tasksState.allTasks.filter(task => task.state === TaskState.TODO)
    const tasksDoing = tasksState.allTasks.filter(task => task.state === TaskState.DOING)
    const tasksDone = tasksState.allTasks.filter(task => task.state === TaskState.DONE)

    if(activeProjectState === null)
        return(<main className="tasksContainer-noTasks"><h2>Select a project :)</h2></main>)

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