import './User.css'
import { useSelector, useDispatch } from 'react-redux'
import UserActions from '../../../redux/actions/User.actions'
import {useState} from 'react'

function User() {
    const state = useSelector(state => state.user)
    const [logOutVisible, setlogOutVisible] = useState(false)
    const dispatch = useDispatch()

    const handleClickUser = () => setlogOutVisible(true)
    const userLogOut = () => dispatch(UserActions.userLogout())


    return (
        <div className="user-container">
            <img src={state.avatar} alt=""  onClick={handleClickUser}/>
            {logOutVisible && <div className="user-logOut" onClick={userLogOut}>Log out</div>}
            <div className="user-name">{state.name}</div>
        </div>
    )
}

export default User