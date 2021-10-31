import './User.css'
import { useSelector, useDispatch } from 'react-redux'
import UserActions from '../../../redux/actions/User.actions'
import {useState} from 'react'
import {TiArrowSortedDown} from 'react-icons/ti'

function User() {
    const state = useSelector(state => state.user)
    const [logOutVisible, setlogOutVisible] = useState(false)
    const dispatch = useDispatch()

    const handleLogOutVisibility = () => {
        setlogOutVisible(!logOutVisible)
    }
    const userLogOut = () => dispatch(UserActions.userLogout())


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