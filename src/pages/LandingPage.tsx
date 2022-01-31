import React from 'react'

import '../style/pages/LandingPage.scss'

import Logo from '../assets/images/Logo.png'
import BackgroundLanding from '../assets/images/backgroundLanding.jpg'

export function LandingPage() {
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
                    <button><p>Achar um Educador</p></button>
                </div>
                <div className="educator-content">
                    <button><p>Me tornar um Educador</p></button>
                </div>
            </div>
        </div>
    )
}