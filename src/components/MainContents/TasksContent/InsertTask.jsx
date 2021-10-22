import './InsertTask.css'

function InsertTask(){
    const handleConfirm = e => {
        e.preventDefault()
        console.log('form', e.target)
    }
    return(
        <div className="insertTask-container">
            <form action="" onSubmit={handleConfirm} className="insertTask-form">
            <input type="text" placeholder="title..." className="insertTask-title"/>
            <textarea type="" placeholder="Description..." className="insertTask-description"/>
            <input type="color" name="colorPicker" id="colorPicker" className="insertTask-colorPicker"/>
            <div className="insertTask-buttonsContainer">
                <button className="insertTask-btnConfirm">Confirm</button>
                <button className="insertTask-btnCancel">Cancel</button>
            </div>
            </form>
        </div>
    )
}

export default InsertTask