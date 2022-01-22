import React,{useState,useEffect} from 'react'

import { provider,auth } from '../services/Firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import Logo from '../assets/images/Logo.png'

import '../style/pages/EducatorRegister.scss'

import { FaFacebookSquare,FaGoogle } from 'react-icons/fa'
import { AiOutlineInstagram,AiOutlineWhatsApp,AiOutlineLinkedin,AiOutlineMail,AiOutlineTwitter,AiOutlineYoutube,AiFillFacebook } from 'react-icons/ai'

export function EducatorRegister() {
    
    const subjects = ['Física','Química','Matemática','Português','Litaratura','História','Geografia','Espanhol','Inglês']
    const daysOfWeek = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado']


    const [name,setName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [birthDay,setBirthDay] = useState<string>('')
    const [photo,setPhoto] = useState<string>('')
    const [city,setCity] = useState<string>('')
    const [subject,setSubject] = useState<string>('')
    const [bio,setBio] = useState<string>('')
    const [startHour,setStartHour] = useState<string>('')
    const [endHour,setEndHour] = useState<string>('')
    const [daysClass,setDaysClass] = useState<Array<''>>([''])
    const [type,setType] = useState<string>('')
    const [stage,setStage] = useState<string>('')
    const [linkInstagram,setLinkInstagram] = useState<string>('')
    const [linkFacebook,setLinkFacebook] = useState<string>('')
    const [numberWhatsapp,setNumberWhatsapp] = useState<string>('')
    const [linkLinkedin,setLinkLinkedin] = useState<string>('')
    const [linkEmail,setLinkEmail] = useState<string>('')
    const [linkYoutube,setLinkYoutube] = useState<string>('')
    const [linkTwitter,setLinkTWitter] = useState<string>('')

    const handleRegisterEducator = ()=> {}

    return(
        <div id="EducatorRegister">
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

                        <div className="get-informations-educator">
                            <button className='button-google'><span><FaGoogle/></span><p>Fazer registro com uma conta do Google</p></button>
                            <button className='button-facebook'><span><AiFillFacebook/></span><p>Fazer registro com uma conta do Facebook</p></button>
                        </div>

                        <div className="input-informations">
                            <div className="input-normal">
                                <label>Nome Completo: </label>
                                <input type="text" max={40} placeholder='Ex.: Roberto Souza Silva'required/>
                            </div>
                            <div className="input-normal">
                                <label>E-mail: </label>
                                <input type="text" max={50} placeholder='exemple1234@email.com' required/>
                            </div>
                            <div className="input-normal">
                                <label>Data de Nascimento: </label>
                                <input type="date"required/>
                            </div>
                            <div className="input-normal">
                                <label>Foto: </label>
                                <input type="text" placeholder='coloque a URL da sua foto'required/>
                            </div>
                            <div className="input-normal">
                                <label>Cidade: </label>
                                <input type="text" max={30} placeholder='São Paulo,SP'required/>
                            </div>
                            <div className="input-normal">
                                <label>Matéria: </label>
                                <select name="Choosed-subjects" required>
                                {subjects.map((value,key)=>{return <option value={value} key={key}>{value}</option>})} 
                                </select>
                            </div>
                            <div className="input-normal">
                                <label>Faça um pequena descrição seu currículo: </label>
                                <textarea name="bio-textarea" cols={30} rows={10} placeholder='Quais faculdades estudei/dei aulas,Escolas que dei,Minhas principais características dando aula(gosto de resumo,gosto muitos de exercícios),Tempo de experência' required></textarea>
                            </div>
                            <div className="input-normal">
                                <label>Estou disponível entre: </label>
                                <input type="time" name="start-time"required/>
                                <p id="separator-time">às</p>
                                <input type="time" name='end-time'required/>
                            </div>
                            <div className="input-normal">
                                <label>Dias da Semana que estou disponível: </label>
                                <div className="options">
                                    {daysOfWeek.map((value,key)=>{return <input type="button" value={value} className='day-unselected' key={key} />})}
                                </div>
                            </div>
                            <div className="input-normal">
                                <label>Estou disponível para aulas: </label>
                                <div className="chosed-type">
                                    <div className="first-option">
                                        <input type="checkbox" value={'ead'} required/> <label>EAD</label>
                                    </div>
                                    <div className="second-option">
                                        <input type="checkbox" value={'presencial'} required/> <label>Presencial</label>
                                    </div>
                                </div>
                            </div>
                            <div className="input-normal">
                                <label>Dou aulas para :</label>
                                <div className="chosed-type">
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
                            </div>
                            <div className="input-normal">
                                <p className='title-social'>Minhas redes socias são: </p>
                                <div className="social-medias">
                                    <div className="instagram-field">
                                        <label>Instagram <AiOutlineInstagram/></label>
                                        <input type="text" placeholder='https://www.instagram.com/meu_user/'/>
                                    </div>
                                    <div className="facebook-field">
                                        <label>Facebook <FaFacebookSquare/></label>
                                        <input type="text" placeholder='https://www.facebook.com/user_name/'/>
                                    </div>
                                    <div className="whatsapp-field">
                                        <label>Whatsapp <AiOutlineWhatsApp/></label>
                                        <input type="text" placeholder='912345678'/>
                                    </div>
                                    <div className="linkedin-field">
                                        <label>Linkedin <AiOutlineLinkedin/> </label>
                                        <input type="text"placeholder='https://www.linkedin.com/in/meu_user/id/'/>
                                    </div>
                                    <div className="email-field">
                                        <label>Email <AiOutlineMail/></label>
                                        <input type="text" placeholder='meuemail@email.com'/>
                                    </div>
                                    <div className="youtube-field">
                                        <label>Canal no Youtuber <AiOutlineYoutube/></label>
                                        <input type="text" placeholder='https://www.youtube.com/c/meu_canal'/>
                                    </div>
                                    <div className="twitter-field">
                                        <label>Twitter <AiOutlineTwitter/></label>
                                        <input type="text" placeholder='https://twitter.com/meu_user/'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className='submit-button'>Salvar dados e me cadastrar como Educator</button>
                    </form>
                </div>
            </main>
        </div>
    )
}