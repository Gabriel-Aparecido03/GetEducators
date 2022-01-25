import React,{useEffect,useState,createContext, ReactNode} from 'react'

import axios from 'axios'

type IndividualState = {
    id:number,
    siga:string,
    nome:string,
    regiao:{
        id:number,
        siga:string,
        nome:string
    }
}

type GroupOfState = [{[key:string ] : IndividualState}]


type IndividualCity = {
    id:string,
    nome:string,
    microrregiao: {
        id:number,
        nome:string,
        mesorregiao: {
            id:number,
            nome:string,
            UF:{
                id:number,
                sigla:string,
                nome:string,
                regiao:{
                    id:number,
                    sigla:string,
                    nome:string
                }
            }
        }
    }

}

type GroupOfCities = [{[key:string] : IndividualCity}]

type UFContextType = {
    states: GroupOfState | undefined,
    cities: GroupOfCities | undefined ,
    handleGettingCities: any
}

type UFContextProps = {
    children: ReactNode
}


export const UFContext = createContext({} as UFContextType)
export function UFContextProvider(props : UFContextProps ) {

    const [states,setStates] = useState<any>([])
    const [cities,setCities] = useState<any>()
    
    useEffect(()=>{
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then((result)=>{
            setStates(result.data)
        })
    },[])

    function handleGettingCities(id:string) {
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/15/municipios `).then((result)=>{
            setCities(result.data)
        })
    }

    return (
        <UFContext.Provider value={{states,cities,handleGettingCities}}>
            <div>{props.children}</div>
        </UFContext.Provider>
    )
}