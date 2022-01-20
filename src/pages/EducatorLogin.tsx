import React from 'react'

import Logo from '../assets/images/Logo.png'

import { FaGoogle } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

export function EducatorLogin() {

    const handleRegisterEducator = ()=>{}
    const handleGetInformationsWithGoogle = ()=> {}
    const handleGetInformationsWithFacebook = ()=> {}

    const subjects = ['Física','Química','Matemática','Português','Litaratura','História','Geografia','Espanhol','Inglês']
    const daysOfWeek = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado']
    const stateOfSchool = ['Ensino Fundamental','Ensino Médio','Ensino Superior']

    return(
        <div id="EducatorLogin">
            <header>
                <div className="logo-content-header">
                    <img src={Logo} alt="imagem do logo da GetEducators" />
                </div>
            </header>
            <main>
                <div className="form-content">
                    <div className="introduction-content">
                        <h1>Venha se torna mais um <strong>Educator</strong> e ajude a melhorar a educação no Brasil.</h1>
                        <p>Para isso preencha o formulário abaixo para se tornar inscrito no <strong>GetEducartors</strong>.</p>
                    </div>
                    <form onSubmit={handleRegisterEducator}>
                        <div className="options-informations">
                            <button
                                onClick={handleGetInformationsWithGoogle}
                            >Usar uma conta Google</button>
                            <button
                                onClick={handleGetInformationsWithFacebook}
                            >Usar uma conta do Facebook</button>
                        </div>
                        <div className="input-informations">
                            <div className="input-individual">
                                <label>Nome Completo: </label>
                                <input type="text" max={40} placeholder='Ex.: Roberto Souza Silva'/>
                            </div>
                            <div className="input-individual">
                                <label>E-mail: </label>
                                <input type="text" max={50} placeholder='exemple1234@email.com' />
                            </div>
                            <div className="input-individual">
                                <label>Data de Nascimento: </label>
                                <input type="date"/>
                            </div>
                            <div className="input-individual">
                                <label>Foto: </label>
                                <input type="text" placeholder='coloque a URL da sua foto'/>
                            </div>
                            <div className="input-indivual">
                                <label>Cidade: </label>
                                <input type="text" max={30} placeholder='São Paulo,SP'/>
                            </div>
                            <div className="input-individual">
                                <label>Matéria: </label>
                                <select name="Choosed-subjects">
                                    <option value="Física">Física</option>
                                    <option value="Química">Química</option>
                                    <option value="Matemática">Matemática</option>
                                    <option value="Português">Português</option>
                                    <option value="Literatura">Literatura</option>
                                    <option value="História">História</option>
                                    <option value="Geografia">Geografia</option>
                                    <option value="Espanhol">Espanhol</option>
                                    <option value="Inglês">Inglês</option>
                                </select>
                            </div>
                            <div className="bio-input">
                                <label>Faça um pequena descrição seu currículo: </label>
                                <textarea name="bio-textarea" cols={30} rows={10} placeholder='Quais faculdades estudei/dei aulas,Escolas que dei,Minhas principais características dando aula(gosto de resumo,gosto muitos de exercícios),Tempo de experência'></textarea>
                            </div>
                            <div className="datetime-input">
                                <label>Estou disponível entre: </label>
                                <input type="datetime-local" name="start-time"/>
                                <p>às</p>
                                <input type="datetime-local" name='end-time'/>
                            </div>
                            <div className="doted-input">
                                <label>Dias da Semana que estou disponível: </label>
                                <div className="options">
                                    <input type="button" value="Domingo" />
                                    <input type="button" value="Segunda-feira" />
                                    <input type="button" value="Terça-feira" />
                                    <input type="button" value="Quarta-feira" />
                                    <input type="button" value="Quinta-feira" />
                                    <input type="button" value="Sexta-feira" />
                                    <input type="button" value="Sábado" />
                                </div>
                            </div>
                            <div className="method-class">
                                <label>Estou disponível para aulas: </label>
                                <div className="first-option">
                                    <input type="checkbox" value={'ead'} /> <label>EAD</label>
                                </div>
                                <div className="second-option">
                                    <input type="checkbox" value={'presencial'} /> <label>Presencial</label>
                                </div>
                            </div>
                            <div className="states-school">
                                <div className="first-option">
                                    <input type="checkbox" value={'ensino-fundamental'} /> <label>Ensino Fundamental</label>
                                </div>
                                <div className="second-option">
                                    <input type="checkbox" value={'ensino-medio'} /> <label>Ensino Médio</label>
                                </div>
                                <div className="third-option">
                                    <input type="checkbox" value={'ensino-superior'} /> <label>Ensino Superior</label>
                                </div>
                            </div>
                            <div className="social-medias-input">
                                <div className="instagram-field">
                                    <label>Instagram <AiOutlineInstagram/></label>
                                    <input type="text"/>
                                </div>
                                <div className="facebook-field">
                                    <label>Facebook <FaFacebookSquare/></label>
                                    <input type="text"/>
                                </div>
                                <div className="whatsapp-field">
                                    <label>Whatsapp <AiOutlineWhatsApp/></label>
                                    <input type="text"/>
                                </div>
                                <div className="linkedin-field">
                                    <label>Linkedin <AiOutlineLinkedin/> </label>
                                    <input type="text"/>
                                </div>
                                <div className="email-field">
                                    <label>Email <AiOutlineMail/></label>
                                    <input type="text"/>
                                </div>
                                <div className="youtube-field">
                                    <label>Canal no Youtuber <AiOutlineYoutube/></label>
                                    <input type="text"/>
                                </div>
                                <div className="twitter-field">
                                    <label>Twitter <AiOutlineTwitter/></label>
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                        <button type="submit">Salvar dados e me cadastrar como Educator</button>
                    </form>
                </div>
            </main>
        </div>
    )
}