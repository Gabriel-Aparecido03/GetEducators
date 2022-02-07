import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../style/pages/EducatorPage.scss'

import BackgroungEducatorPage from '../assets/images/background-educator-login 1.svg'

import { signInWithPopup,GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import { providerGoogle,providerFacebook,auth } from '../services/firebase'

import { FaCertificate } from 'react-icons/fa' 
import { ImFacebook } from 'react-icons/im'
import { FcGoogle } from 'react-icons/fc'

type UserInitial = {
    name:any,
    id:any,
    photo:any
}


export function EducatorPage() {
    const navigate = useNavigate()
    const [user,setUser] = useState<UserInitial>()

    function handleSignInWithGoogle() {
        signInWithPopup(auth,providerGoogle).then((result)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken

            const {displayName,uid,photoURL} = result.user

            setUser({
                name:displayName,
                id:uid,
                photo:photoURL
            })

            navigate('/register/new/educator')
        })
    }

    function handleSignInWithFacebook() {
        signInWithPopup(auth,providerFacebook).then((result)=>{
            const {displayName,uid,photoURL} =  result.user

            const credential = FacebookAuthProvider.credentialFromResult(result)
            const acessToken = credential?.accessToken

            setUser({
                name:displayName,
                id:uid,
                photo:photoURL
            })

            navigate('/register/new/educator')
        })
    }

    return(
        <div id="EducatorPage">
            <div className="image-content">
                <img src={BackgroungEducatorPage} alt="professor ensinado uma menina" />
            </div>
            <div className="login-content">
                <div className="welcome-educator-content">
                    <h1>Olá seja bem vindo.</h1>
                    <p>Muito feliz que você quer se tornar um Educador.</p>
                </div>
                <div className="login-form-content">
                    <div className="instructions-login-content">
                        <div className="write-content">
                            <p>Para se tornar Educador.<br/>Use apenas contas da Google ou do Facebook</p>
                        </div>
                    </div><div className="buttons-login-content">
                        <button 
                            onClick={handleSignInWithFacebook}
                            className='facebook-button'><p><ImFacebook/> Entar usando um a conta do Facebook</p></button>
                        <button 
                            onClick={handleSignInWithGoogle}
                            className='google-button'><p>< FcGoogle/>  Entrar udando uma conte Google</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}