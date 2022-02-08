import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/pages/ViewEducators.scss'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import Logo from '../assets/images/Logo 1.svg'
import { database } from '../services/firebase'
import { ref,child,get, onValue } from 'firebase/database'

export function ViewEducators() {
    const navigate = useNavigate()
    const databaseRef = ref(database)

    const [ArrayEducators,setArrayEducators] =  useState<Array<any>>([])

    const [chosedCity,SetChosedCity] = useState<string>()
    const [chosedState,setChosedState] = useState<string>()
    const [chosedSubject,setChosedSubject] = useState<string>()



    useEffect(()=>{ 
        onValue(ref(database,'/educators'),(snapshot)=>{
            snapshot.forEach((educator)=>{
                setArrayEducators(prevArr =>[...prevArr,educator.val()])
            })
        })
    },[])   

    

    return(
        <div id="ViewEducators">
            <header className='header-view-educators'>
                <div className="logo-header-content">
                    <img src={Logo} alt="logo do Educators" />
                    <p><HiOutlineArrowNarrowLeft/></p>
                </div>
                <div className="phrase-content">
                    <h1>Aqui estão os Educadores disponíveis.</h1>
                </div>
            </header>   
            <main>
                <div className="principal-content">
                    <div className="search-bar">
                        <div className="search-box">
                            <p>Matéria</p>
                            <select name="" id=""></select>
                        </div>
                        <div className="search-box">
                            <p>Estado</p>
                            <select name="" id=""></select>
                        </div>
                        <div className="search-box">
                            <p>Cidade</p>
                            <select name="" id=""></select>
                        </div>
                    </div>
                    <div className="educators-content">
                      {ArrayEducators.map((value,key)=>{ 
                       return(
                        <div className="educator-container" key={key}>
                        <div className="perfil-content">
                            <div className="image-content">
                                <img src={'https://lh3.googleusercontent.com/a/AATXAJz_fK0qfxZUQhKV-HONCUdGtqInKzKjmpKJ-HjN=s96-c'} alt="foto de perfil do educador" />
                            </div>
                            <div className="name-content">
                                <h1>{ArrayEducators[key].name}</h1>
                                <p>{ArrayEducators[key].subject}</p>
                            </div>
                        </div>
                        <div className="bio-content">
                            <p>{ArrayEducators[key].bio}</p>
                        </div>
                        <div className="contact-content">
                            <div className="price-content">
                                <p>Preço/Hora <span>{ArrayEducators[key].price}</span></p>
                            </div>
                            <div className="whatsapp-content">
                                <button onClick={()=>{navigate(`https://wa.me/+55${ArrayEducators[key].numberPhone}`)}}>Entar em contato</button>
                            </div>
                        </div>
                    </div>
                       )
                    })}
                    </div>
                </div>
            </main>
        </div>
    )
}