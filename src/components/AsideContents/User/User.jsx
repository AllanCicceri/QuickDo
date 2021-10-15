import './User.css'
import { useSelector, useDispatch } from 'react-redux'
import UserActions from '../../../redux/actions/User.actions'

function User() {
    const state = useSelector(state => state.user)
    const dispatch = useDispatch()

    const userLogOut = () => dispatch(UserActions.userLogout())


    return (
        <div className="user-container">
            <img src={state.avatar} alt="" onClick={userLogOut} />
            <div className="user-name">{state.name}</div>
        </div>
    )
}

export default User