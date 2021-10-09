import './TaskItem.css'

function TaskItem({item}){
    return(
        <div className="taskItem">
            <div className="taskItem-title"> {item.title} </div>
           <div className="taskItem-description">{item.obs}</div>
        </div>
    )
}

export default TaskItem