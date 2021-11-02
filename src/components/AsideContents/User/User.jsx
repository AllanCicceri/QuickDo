import './User.css'
import { useSelector, useDispatch } from 'react-redux'
import {useState} from 'react'
import {TiArrowSortedDown} from 'react-icons/ti'
import ActionTypes from '../../../redux/actions/ActionTypes'

function User() {
    const state = useSelector(state => state.user)
    const [logOutVisible, setlogOutVisible] = useState(false)
    const dispatch = useDispatch()

    const handleLogOutVisibility = () => {
        setlogOutVisible(!logOutVisible)
    }
    const userLogOut = () => dispatch({type:ActionTypes.USER_LOGOUT})

    
    document.onkeyup = e => {
        if(e.key === "Escape" && logOutVisible) setlogOutVisible(false)
    }

    return (
        <div className="user-container">
            <div className="user-imgAndActions">
                <img src={state.avatar} alt=""  onClick={handleLogOutVisibility}/>
                {!logOutVisible && <div className="arrowFont"><TiArrowSortedDown fontSize={15}/></div>}
            </div>
                {logOutVisible && <div className="user-logOut" onClick={userLogOut}>Log out</div>}
            <div className="user-name">{state.name}</div>
        </div>
    )
}

export default User