import React from 'react'

import Logo from '../assets/images/Logo.png'

import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

import '../style/pages/EducatorRegister.scss'


export function EducatorRegister() {

    const allSubjects = ['Física','Química','Matemática','Geometria','História','Geografia','Filosofia','Sociologia','Inglês','Espanhol','Alemão','Japonês','Português','Literatura']

    const daysOfWeek = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado']

    return(
        <div id="EducatorRegister">
            <header className="header">
                <div className="header-content">
                    <div className="top-informations">
                        <div className="arrow-header-content">
                            <a><HiOutlineArrowNarrowLeft/></a>
                        </div>  
                        <div className="image-header-content">
                            <img src={Logo} alt="imagem da logo" />
                        </div>
                    </div>
                </div>
                <div className="motivation">
                    <h1>Isso é muito incrível que você queira se tornar <strong>Educador</strong></h1>
                    <p>Portanto,o segundo passo é: preencher corretamente o formúlario de inscrição abaixo</p>
                    <span>Lembrando que algumas informções já estaram preenchidas</span>
                </div>
            </header>
            <main>
                <form action="">
                    <div className="form-content">
                        <div className="personal-date">
                            <h1>Dados Persoais</h1>
                            <div className="information-content">
                                <label>Nome completo</label>
                                <input type="text" />
                            </div>
                            <div className="information-content">
                                <label htmlFor="">Link da Foto</label>
                                <input type="text" />
                            </div>
                            <div className="informations-content">
                                <label htmlFor="">Meu número de Whatsapp</label>
                                <input type="text" />
                            </div>
                            <div className="information-content">
                                <label htmlFor="">Biografia</label>
                                <textarea cols={30} rows={10}></textarea>
                            </div>
                        </div>
                        <div className="class-date">
                            <h1>Sobre Minha Aula</h1>
                            <div className="informations-content">
                                <label htmlFor="">Preço por aula</label>
                                <input type="number" />
                            </div>
                            <div className="informations-content">
                                <label htmlFor="">Minha matéria</label>
                                <select name="" id="">
                                    {allSubjects.map((value,key)=>{return <option value={value} key={key}>{value}</option>})}
                                </select>
                            </div>
                        </div>
                        <div className="time-date">
                            <h1>Minha grade de horários</h1>
                            <div className="informations-content">
                                <label htmlFor="">Dia das semana que estou disponível</label>
                                    {daysOfWeek.map((value,key)=>{return <button value={value} key={key}>{value}</button>})}
                            </div>
                            <div className="informations-content">
                                <label>Horários que estou disponível</label>
                                <div className="datetime">
                                    <div className="start-hour">
                                        <span>Das</span>
                                        <input type="text" />
                                    </div>
                                    <div className="end-hour">
                                        <span>Até</span>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}