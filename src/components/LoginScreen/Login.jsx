import './Login.css'
import * as FaIcons from 'react-icons/fa'
import api from '../../api/api'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {createUser} from '../../redux/actions/User.actions'

function Login({userLogin = f=>f}){
    const iconStyles = {fontSize:'30px', backgroundColor:'transparent', marginLeft:'20px',cursor:'pointer'}
    const [avatar, setAvatar] = useState('')
    const dispatch = useDispatch()

    const handleClick = e => {
        const socialMedia = e.currentTarget.id
        
        switch (socialMedia) {
            case 'facebook':
                handleFacebookLogin()
                break;
        
            default:
                break;
        }
    }

    async function handleFacebookLogin(){
        let result = await api.fbPopup()
        if(result){
            const name = await result.additionalUserInfo.profile.name
            const email = await result.user.email
            const avatar = await api.fbAvatar(result).then(res => res.json()).then(out => out.picture.data.url)

            dispatch(createUser(name, email, avatar))
            // setAvatar(avatarResult)
        }else{
            alert('Erro!')
        }
    }

    return(
        <div className="login">
            <div className="login-container">
                <div className="app-name">QTasks</div>
                <p className="app-description">Welcome. QTasks is an app developed to
                    help you manage your daily tasks. You create a project and insert tasks in it,
                    once all the tasks are done, the project is done. Hope you enjoy! :)</p>

                <p className="app-login-label">Login</p>

                <div className="social-medias">
                    <FaIcons.FaFacebook style={{...iconStyles, color: '#3b5998'}} 
                        id="facebook" onClick={handleClick}  />
                    <FaIcons.FaTwitter style={{...iconStyles, color: '#1DA1F2'}}
                        id="twitter"  onClick={handleClick} />
                    <FaIcons.FaInstagram style={{...iconStyles, color: '#c13584'}}
                        id="instagram"  onClick={handleClick} />
                </div>

            </div>
        </div>
    )
}

export default Login