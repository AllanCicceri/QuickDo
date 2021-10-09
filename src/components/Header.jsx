import './Header.css'

function Header(){
    return(
        <header className="header">
            <div className="logo">
                <img src="logob.png" alt="" />
            </div>
            <div className="searchContainer">
                <input type="text" placeholder="search for task..."/>
            </div>
            <div className="user">
                <img src="avatar.png" alt="" />
                <div className="user-name">User Name</div>
            </div>
        </header>
    )
}

export default Header