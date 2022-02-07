import React,{ useState,useEffect} from 'react'

import '../style/pages/FormEducator.scss'

import { auth } from '../services/firebase'
import axios from 'axios'

export function FormEducator() {

    const [allStatesArr,setAllStatesArr] = useState<any>([])

    const [previewUser,setPreviweUser] = useState<any>()

    const [collectionsStates,setCollectionsStates] = useState<Array<''>>([])
    const [collectionsCities,setCollectionsCities] = useState<Array<''>>([])

    const daysOfWeek = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado']
    const subjects = ['Educação Física','Português','História','Geografia','Matemática','Física','Química','Inglês','Espanhol','Biologia']
    const allDDDinBrazil = [11,12,13,14,15,16,17,18,19,21,22,24,27,28,31,32,33,34,35,37,38,41,42,43,44,45,46,47,48,49,51,53,54,55,61,62,63,64,65,66,67,68,69,71,73,74,75,77,79,81,82,83,84,85,86,87,88,89,91,92,93,94,95,96,97,98,99]

    const [name,setName] = useState<any>()
    const [birthDay,setBirthDay] = useState<string>('')
    const [numberPhone,setNumberPhone] = useState<string>('')
    const [state,setState] = useState<string>('')
    const [photo,setPhoto] = useState<any>()
    const [city,setCity] = useState<string>('')
    const [bio,setBio] = useState<string>('')
    const [subject,setSubject] = useState<string>('')
    const [startHour,setStartHour] = useState<string>('')
    const [endHour,setEndHour] = useState<string>('')
    const [price,setPrice] = useState<string>('')
    const [daysAvailable,setDaysAvailable] = useState<Array<''>>([])

    const[situation,setSituation] = useState<boolean>(false)


    const wrongStyle = '.1rem solid red'
    const rightStyle = '1.rem solid green'

    useEffect(()=>{
        const user = auth.currentUser
        
        setPreviweUser({
            name:user?.displayName,
            id:user?.uid,
            photo:user?.photoURL
        })

        setName(user?.displayName)
        setPhoto(user?.photoURL)

        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then((response)=>{
            const states = response.data
            setAllStatesArr(response.data)

            for(var element in states) {
                const state = states[element].nome
                setCollectionsStates(prevElements => [...prevElements,state])
            }
        })
    },[])

    const handlebirthDay = (e:any)=>{
        const element = e.target
    }

    const handleNumber = (e:any)=>{
        const element = e.target
        const DDD = element.value[0]+element.value[1]

        allDDDinBrazil.indexOf(DDD) === -1 || element.value.length !== 9?setSituation(false):setSituation(true)
        setNumberPhone(element.value)
    }

    const handleCity = (e:any)=>{
        const city = e.target.value
        if(city === 'none') {
            e.target.style.border = wrongStyle
            return false
        }
        else {
            setCity(city)
        }
    }

    const handleBio = (e:any) =>{
        const bioLetters = e.targer.value
        if(bioLetters.length>150) {
            e.target.style.border = wrongStyle
            setSituation(false)
        }
        else {
            e.target.style.border = rightStyle
            setBio(bio)
            setSituation(true)
        }
    }
    
    const handleSubject = (e:any) =>{

    }
    
    const handleStartHour = (e:any)=>{
        const textStartHour = e.target.value
        if(textStartHour>24 || textStartHour<0) {
            e.target.style.border = wrongStyle
            setSituation(false)
        }
        else {
            e.target.style.border = rightStyle
            setStartHour(textStartHour)
            setSituation(true)
        }
    }

    const handleEndHour = (e:any)=>{
        const textEndHour = e.target.value
        if(textEndHour > 24 || textEndHour<0) {
            e.target.style = rightStyle
            setSituation(false)
        }
        else {
            setSituation(true)
            e.target.style.border = rightStyle
            setEndHour(textEndHour)
        }
    }
    
    const handlePrice = (e:any)=>{
        const textPrice = e.target.value
        if(textPrice < 0) {
            setSituation(false)
            e.target.style.border = wrongStyle
        }
        else {
            setSituation(true)
            setPrice(textPrice)
            e.target.style.border = rightStyle
        }
    }
    
    
    const handleDaysAvailable = (e:any) =>{

    }

    function selectedCities(e:any) {
        const selectedState = e.target.value
        let idState;
        setState(selectedState)
        for(var element in allStatesArr) {
            const stateName = allStatesArr[element].nome
            if(stateName === selectedState) {
                idState = allStatesArr[element].id
            }
        }
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idState}/distritos`).then((result)=>{
            const cities = result.data
            var citiesName = []
            for(var element in cities) {
                citiesName.push(cities[element].nome)
            }
            setCollectionsCities(citiesName)
        })
    }

    return(
        <div id="FormEducator">
            <header>
                <div className="header-form-content">
                    <div className="title-content">
                        <h1>Excelente que você deseja se tornar um <span>Educator</span></h1>
                        <p>O primeiro passo é determinar de preencher o formulário </p>
                    </div>
                </div>
            </header>
            <main>
                <form action="">
                    <div className="form-content">
                        <div className="informations-block">
                            <h1>Dados Pessoais</h1>
                            <div className="questions-block">
                                <div className="individual-question-content">
                                    <label>Nome</label>
                                    <input type="text" value={name} readOnly/>
                                </div>
                            </div>
                            <div className="individual-question-content">
                                <label>Data de Nascimento</label>
                                <input type="date" />
                            </div>
                            <div className="individual-question-content">
                                <label htmlFor="">Foto</label>
                                <input type="text"value={photo} readOnly/>
                            </div>
                            <div className="individual-question-content">
                                <label htmlFor="">Número de Whatsapp</label>
                                <input type="number" />
                            </div>
                            <div className="individual-question-content">
                                <label>UF</label>
                                <select name="selected-uf"  >
                                    <option value="none"> --Selecione seu UF-- </option>
                                   {
                                    collectionsStates?.map((value,key)=>{return <option key={key} onClick={selectedCities} value={value}>{value}</option>})
                                   }
                                </select>
                            </div>
                            <div className="individual-question-content">
                                <label>Cidade</label>
                                <select name="selected-city">
                                    <option value="none"> --Selecione sua Cidade-- </option>
                                    {
                                        collectionsCities?.map((value,key)=>{
                                            return <option key={key} value={value}>{value}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="individual-question-content">
                                <label>Biografia</label>
                                <textarea name="" id="" cols={40} rows={30} placeholder='Faça um pequena descrição sobre sua experiência profissional e acadêmica,dentro de um limite de 200 letras'></textarea>
                            </div>
                        </div>
                        <div className="informations-block">
                            <h1>Sobre sua a Aula</h1>
                            <div className="individual-question-content">
                                <label>Matéria</label>
                                <select>
                                    <option value="none"> --Selecione sua matéria-- </option>
                                    {subjects.map((value,key)=>{return <option key={key}>{value}</option>})}
                                </select>
                            </div>
                        </div>
                        <div className="individual-question-content">
                            <label htmlFor="">Preço da Aula</label>
                            <input type="number" />
                        </div>
                        <div className="informations-block">
                            <h1>Sua Grade de Hóraios</h1>
                            <div className="individual-question-content">
                                <label htmlFor="">Estou dísponível</label>
                                <div className="hours-informations">
                                    <p>Das</p>
                                    <input type="number" />
                                    <p>Até</p>
                                    <input type="number" />
                                </div>
                            </div>
                            <div className="individual-question-content">
                                <label>Estou disponível no dias</label>
                                <div className="days-of-week">
                                    {daysOfWeek.map((value,key)=>{return <button key={key} className='unselect-day'>{value}</button>})}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button-content">
                        <button type='submit'>Me Tornar um Educador</button>
                    </div>
                </form>

            </main>
        </div>   
    )
}