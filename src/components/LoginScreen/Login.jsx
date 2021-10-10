import './Login.css'
import * as FaIcons from 'react-icons/fa'
import { useRef } from 'react'

function Login(){
    const iconStyles = {fontSize:'30px', backgroundColor:'transparent', marginLeft:'20px',cursor:'pointer'}
    const socialMedia = useRef('')

    const handleClick = e => {
        const socialMedia = e.currentTarget.id
        console.log(socialMedia)
    }

    return(
        <div className="login">
            <div className="login-container">
                <div className="app-name">QTasks</div>
                <p className="app-description">Welcome. QTask is an app developed to
                    help you manage your daily tasks. You create a project and insert tasks in it,
                    once all the tasks are done, the project is done. Hope you enjoy! :)</p>

                <p className="app-login-label">Login</p>

                <div className="social-medias">
                    <FaIcons.FaFacebook style={{...iconStyles, color: '#3b5998'}} 
                        id="facebookIcon" onClick={handleClick}  />
                    <FaIcons.FaTwitter style={{...iconStyles, color: '#1DA1F2'}}
                        id="twitterIcon"  onClick={handleClick} />
                    <FaIcons.FaInstagram style={{...iconStyles, color: '#c13584'}}
                        id="instagramIcon"  onClick={handleClick} />
                </div>

            </div>
        </div>
    )
}

export default Login