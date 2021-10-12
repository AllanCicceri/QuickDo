import './Header.css'
import {useSelector} from 'react-redux'

function Header(){
    const state = useSelector(state => state.user)

    return(
        <header className="header">
            <div className="logo">
                <img src="logob.png" alt="" />
            </div>
            <div className="searchContainer">
                <input type="text" placeholder="search for task..."/>
            </div>
            <div className="user">
                <img src={state.avatar} alt="" />
                <div className="user-name">{state.name}</div>
            </div>
        </header>
    )
}

export default Header