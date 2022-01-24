import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

import { BsGoogle } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'

import '../style/pages/EducatorLanding.scss'

import BackgroundEducator from '../assets/images/backgroundEdcatorLanding.png'
import Logo from '../assets/images/Logo.png'

export function EducatorLanding() {
    
    const {signInWithGoogle} = useAuth()
    const {signInWithFacebook} = useAuth()

    const {user} = useAuth()

    const navigate = useNavigate()

    const handleNavigateToRegisterEducator = () => {
        navigate('/educators/new/register')
    }

    const handleUsingGoogle = () =>{
        signInWithGoogle()
    }

    const handleUsingFacebook = () =>{
        signInWithFacebook()
    }

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
                                onClick={handleUsingGoogle}
                            ><span><BsGoogle/></span> <p>Entrar usando uma conta Google</p></button>
                            <button 
                                onClick={handleUsingFacebook}
                                className='button-facebook'><span><AiFillFacebook/></span><p>Entrar usando uma conta Facebook</p></button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}