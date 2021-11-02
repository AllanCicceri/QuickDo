import StyledTaskItem from './TaskItem.styled'

function TaskItem({item}){
    
    return(
        <StyledTaskItem backGroundColor={item.color}>
            <div className="taskItem-Container">
                <div className="taskItem-title"> {item.title} </div>
                <div className="taskItem-description">{item.description}</div>
            </div>
        </StyledTaskItem>
    )
}

export default TaskItem