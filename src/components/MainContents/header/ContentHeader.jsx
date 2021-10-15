import './ContentHeader.css'

function ContentHeader(){
    return(
        <header className="contentHeader">
            <h2>Project Name</h2>
            <div className="contentHeader-searchContainer">
                <input type="text" placeholder="search for task..."/>
            </div>
            <div className="contentHeader-insertTask">+ Add Task</div>
        </header>
    )
}

export default ContentHeader