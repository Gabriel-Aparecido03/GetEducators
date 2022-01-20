import React from 'react'
import { useNavigate } from 'react-router-dom'

import { GiTeacher } from 'react-icons/gi'
import { HiIdentification } from 'react-icons/hi'

import BackgroundEducator from '../assets/images/backgroundEdcatorLanding.png'
import Logo from '../assets/images/Logo.png'

export function EducatorLanding() {
    const navigate = useNavigate()

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
                        <button>Já sou um Educador</button>
                        <p className='separatoe'>Ou entrar como</p>
                        <button>Quero me tornar um Educador</button>
                    </div>
                </div>
            </main>
        </div>
    )
}