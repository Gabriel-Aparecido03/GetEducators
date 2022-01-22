import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { auth,provider } from '../services/Firebase'
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth'

import { BsGoogle } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'

import '../style/pages/EducatorLanding.scss'

import BackgroundEducator from '../assets/images/backgroundEdcatorLanding.png'
import Logo from '../assets/images/Logo.png'

export function EducatorLanding() {
    const navigate = useNavigate()

    const handleNavigateToRegisterEducator = () => {
        navigate('/educators/new/register')
    }

    var userGoogle;

    return(
        <div id="EducatorLanding">
            <aside className="aside-educator-landing">
                <img src={BackgroundEducator} alt="imagem de uma sala de aula vazia" />
            </aside>
            <main>
                <div className="principal-content">
                    <div className="logo-content">
                        <div className="logo-content">
                            <img src={Logo} alt="" />
                        </div>                       
                        <div className="write-content">
                            <h2>Área do Educador</h2>    
                        </div>     
                    </div>
                    <div className="login-content">
                        <h2>Entra usando uma conta</h2>
                        <div className="buttons-content">
                            <button
                                className='button-google'
                            ><span><BsGoogle/></span> <p>Entrar usando uma conta Google</p></button>
                            <button className='button-facebook'><span><AiFillFacebook/></span><p>Entrar usando uma conta Facebook</p></button>
                        </div>
                    </div>
                    <div className="sign-in-educator">
                        <a href='/educators/new/register'>Se cadastrar como um Educador</a>
                    </div>
                </div>
            </main>
        </div>
    )
}