import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../style/pages/LandingPage.scss'

import Logo from '../assets/images/Logo 1.svg'
import BackgroundLanding from '../assets/images/backgroundLanding 1.svg'

export function LandingPage() {
    const navigate = useNavigate()
    return (
        <div id="LandingPage">
            <div className="introduction-content">
                <div className="image-content">
                    <img src={BackgroundLanding} alt="imagem de um homem estudando com um computador" />
                </div>
                <div className="principal-content">
                    <div className="logo-content">
                        <img src={Logo} alt="imagem do logo do Educators" />
                    </div>
                    <div className="phrase-content-desktop">
                        <h2>A plataforma feita para você estudar <br/> melhor forma possível.</h2>
                    </div>
                    <div className="phrase-content-mobile">
                        <h1>Seja bem-vindo ao <strong>Educator</strong>.</h1>
                        <p>Qual o seu desejo?</p>
                    </div>
                </div>
            </div>
            <div className="buttons-content">
                <div className="student-content">
                    <button onClick={()=>{navigate('/view/educators')}}><p>Achar um Educador</p></button>
                </div>
                <div className="educator-content">
                    <button onClick={()=>{navigate('/educator')}}><p>Me tornar um Educador</p></button>
                </div>
            </div>
        </div>
    )
}