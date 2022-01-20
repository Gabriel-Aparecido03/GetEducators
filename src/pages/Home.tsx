import React from 'react'
import { useNavigate } from 'react-router-dom'

import { GiTeacher } from 'react-icons/gi'
import { BsBook } from 'react-icons/bs'

import Logo from '../assets/images/Logo.png'
import BackgroundHome from '../assets/images/LandingBackground.png'


export function Home() {
    const navigate = useNavigate()

    const handleEducatorsPage = ()=> {
        navigate('/educators')
    }

    const handleClientPage = ()=> {
        navigate('/viewEducators')
    }

    return(
        <div id="Home">
            <aside className='aside-image'>
                <div className="images-home-content">
                    <img src={BackgroundHome} alt="imagem de estudantes estudando" />
                </div>
                <div className="write-home-content">
                    <h2>Ache o Educator perfeito para você.</h2>
                </div>
            </aside>
            <main>
                <div className="principal-home-content">
                    <div className="logo-home-content">
                        <img src={Logo} alt="imagem do GetEducators" />
                    </div>
                    <div className="buttons-home-content">
                        <button 
                            onClick={handleEducatorsPage}>
                            <p>Entrar com Educador</p><span><GiTeacher/></span></button>
                            <p className='separatoe'>Ou entrar como</p>
                        <button 
                            onClick={handleClientPage}
                        ><p>Ter aula com um Educador</p><span><BsBook/></span></button>
                    </div>
                </div>
            </main>
        </div>
    )
}