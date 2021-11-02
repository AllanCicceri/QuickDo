import './TasksContainer.css'
import TaskItem from './TaskItem'
import {useSelector} from 'react-redux'
import TaskState from '../../../assets/js/TaskState'
import {useEffect} from 'react'

function TasksContainer() {
    const activeProjectState = useSelector(state => state.project.activeProject)
    const tasksState =  useSelector(state => state.tasks.allTasks)
    
    useEffect(() => {
    }, [tasksState])

    if(activeProjectState === null)
    return(<main className="tasksContainer-noTasks"><h2>Select a project :)</h2></main>)
    
    const tasksTodo = tasksState.filter(task => task.state === TaskState.TODO)
    const tasksDoing = tasksState.filter(task => task.state === TaskState.DOING)
    const tasksDone = tasksState.filter(task => task.state === TaskState.DONE)

    
    
    return (
        <main className="tasksContainer">
            <div className="tasks-todo">
                <div className="todo-label">To do</div>
                <div className="taskItems-todo">
                    {tasksTodo.length > 0 && tasksTodo.map((item, index) => (
                        <TaskItem key={index} item={item} />
                    ))}
                </div>
            </div>

            <div className="tasks-doing">
                <div className="doing-label">Doing</div>
                <div className="taskItems-doing">
                    {tasksDoing.length > 0 && tasksDoing.map((item, index) => (
                        <TaskItem key={index} item={item} />
                    ))}
                </div>
            </div>
            <div className="tasks-done">
                <div className="done-label">Done</div>
                <div className="taskItems-done">
                    {tasksDone.length > 0 && tasksDone.map((item, index) => (
                        <TaskItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default TasksContainer