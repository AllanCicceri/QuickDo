import './InsertTask.css'

function InsertTask(){
    const handleConfirm = e => {
        e.preventDefault()
        console.log('entru')
    }
    return(
        <div className="insertTask-container">
            <form action="" className="insertTask-form">
            <input type="text" placeholder="title..." className="insertTask-title"/>
            <textarea type="" placeholder="Description..." className="insertTask-description"/>
            <select name="priority" id="cmbPriority" className="insertTask-select">
                <option value="" hidden>Priority</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="low">Low</option>
            </select>
            <div className="insertTask-buttonsContainer">
                <button className="insertTask-btnConfirm" onClick={handleConfirm}>Confirm</button>
                <button className="insertTask-btnCancel">Cancel</button>
            </div>
            </form>
        </div>
    )
}

export default InsertTask