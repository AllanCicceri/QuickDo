import './Header.css'
import {useSelector, useDispatch} from 'react-redux'
import UserActions from '../redux/actions/User.actions'

function Header(){
    const state = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    const userLogOut = () => dispatch(UserActions.userLogout())

    return(
        <header className="header">
            <div className="logo">
                <img src="logob.png" alt="" />
            </div>
            <div className="searchContainer">
                <input type="text" placeholder="search for task..."/>
            </div>
            <div className="user">
                <img src={state.avatar} alt="" onClick={userLogOut}/>
                <div className="user-name">{state.name}</div>
            </div>
        </header>
    )
}

export default Header