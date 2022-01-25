import React,{useState,useEffect} from 'react'

import axios from 'axios'

import { ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Logo from '../assets/images/Logo.png'

import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { IoIosAlert } from 'react-icons/io'
import { MdError} from 'react-icons/md'

import {useAuth} from '../hooks/useAuth'
import {useUF} from '../hooks/useUF'

import '../style/pages/EducatorRegister.scss'


export function EducatorRegister() {

    const correctStyle = '.1rem green solid'
    const wrongStyle = '1.rem red solid'

    const allSubjects = ['Física','Química','Matemática','Geometria','História','Geografia','Filosofia','Sociologia','Inglês','Espanhol','Alemão','Japonês','Português','Literatura']

    const daysOfWeek = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado']

    const consultDDD = [ 11,12,13,14,15,16,17,18,19,21,22,24,27,28,31,32,33,34,35,37,38,41,42,43,44,45,46,47,48,49,51,53,54,55,61,62,63,64,65,66,67,68,69,71,73,74,75,77,79,81,82,83,84,85,86,87,88,89,91,92,93,94,95,96,97,98,99]
    
    const {states,handleGettingCities,cities} = useUF() 

    const[listCities,setListCities] = useState<Array<0>>()

    const [situation,setSituation] = useState<number>(0)
    // 1 = aproved to subscribe
    // 0 = reproved to subscribe

    const [name,setName] = useState<string>()
    const [photo,setPhoto] = useState<string>()
    const [number,setNumber] = useState<string>()

    const[isDaySelect,setIsDaySelect] = useState<boolean>(false)

    const [uf,setUf] = useState<string>()
    const [city,setCity] = useState<string>()
    const [bio,setBio] = useState<string>()
    const [price,setPrice] = useState<string>()
    const [subject,setSubject] = useState<string>()
    const [daysClass,setDaysClass] = useState<string>()
    const [startHour,setStartHour] = useState<string>()
    const [endHour,setEndHour] = useState<string>()

    const[idState,setIdState] = useState<any>()

    const handleGetState = (e:any) =>{
        const chosedState = e.target.value
        const numOfStates = 27
        var id 
        for(var i=0;i<numOfStates;i++) {
            if(chosedState === states?.[i].nome) {
                id =  states?.[i].id
            }
        }
        handleGettingCities(id)
    }

    const handleNumberPhone = (e:any) =>{
        const element = e.target
        const number = element.value
        const ddd = parseInt(e.target.value[0] + e.target.value[1])
        if(number.length <= 10 || consultDDD.indexOf(ddd) === -1) {
            element.style.border = wrongStyle
            setSituation(0)
        }
        else {
            element.style.border = correctStyle
            setSituation(1)
        }
    }

    const handleUF = (e:any) => {
        setUf(e.target.value)
    }

    const handleCity = (e:any) => {
        setCity(e.target.value)
    }

    const handleBio = (e:any) => {
        const bioText = e.target.value
        const numOfLetters = bioText.length

        if(numOfLetters <= 150) {
            e.target.style = correctStyle
            setSituation(1)
        }

        else {
            e.target.style = wrongStyle
            setSituation(0)
        }
    }

    const handleSetPrice = (e:any) => {
        const primaryPrice = e.target.value
        if(primaryPrice <= 0) {
            setSituation(0)
            e.target.style.border = wrongStyle
        } 
        else {
            setSituation(1)
        }
    }

    const handleSubject = (e:any) => {
        const unselected = 'day-unselected'
        const selected = 'day-selected'

        if(isDaySelect === true) {
            e.target.className = unselected
            
        }
    }

    return(
        <div id="EducatorRegister">
            <>
                <ToastContainer>
                    position="top-left"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                </ToastContainer>
            </>
            <header className="header-register">
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
                    <span>Lembrando que algumas informações já estaram preenchidas</span>
                </div>
            </header>
            <main className="main-register-content">
                <form action="">
                    <div className="form-content">
                        <div className="personal-date">
                            <h1>Dados Pessoais</h1>
                            <div className="informations-content">
                                <label>Nome completo</label>
                                <input
                                required
                                readOnly
                                type="text" />
                            </div>
                            <div className="informations-content">
                                <label htmlFor="">Link da Foto</label>
                                <input 
                                readOnly
                                required
                                type="text" />
                            </div>
                            <div className="informations-content">
                                <label htmlFor="">Meu número de Whatsapp</label>
                                <input 
                                required
                                onChange = {handleNumberPhone}
                                type="text" />
                            </div>
                            <div className="informations-content">
                                <label htmlFor="">UF</label>
                                <select onChange={handleGetState}>
                                    {states?.map((value,key)=>{return <option key={key} >{value.nome}</option>})}
                                </select>
                            </div>
                            <div className="informations-content">
                                <label htmlFor="">Cidade</label>
                                <select name="" id="">
                                    {cities?.map((value,key)=>{return <option key={key}>{value.nome}</option>})}
                                </select>
                            </div>
                            <div className="informations-content">
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
                            <div className="subject-content">
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
                                    <div className="buttons-content">
                                        {daysOfWeek.map((value,key)=>{return <button className={'day-unselected'} value={value} key={key}>{value}</button>})}
                                    </div>
                            </div>
                            <div className="time-content">
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
                        <div className="final-form">
                            <div className="alert-content">
                                <p><IoIosAlert/>Preencha todos os campos</p>
                            </div>
                            <button type='submit'>Finalizar Cadastro</button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}