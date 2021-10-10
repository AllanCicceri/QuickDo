import './TaskItem.css'

function TaskItem({item}){
    return(
        <span className="taskItem">
            <div className="taskItem-title"> {item.title} </div>
           <div className="taskItem-description">{item.obs}</div>
        </span>
    )
}

export default TaskItem