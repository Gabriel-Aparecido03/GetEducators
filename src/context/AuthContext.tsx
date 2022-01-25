import React,{createContext, ReactNode, useEffect, useState} from 'react'

import {auth,providerFacebook,providerGoogle,database} from '../services/Firebase'
import { GoogleAuthProvider,FacebookAuthProvider,signInWithPopup, setPersistence, browserSessionPersistence} from 'firebase/auth'
import { ref,child,get } from 'firebase/database'
import { useNavigate } from 'react-router-dom'

type AuthContextProviderProps = {
    children:ReactNode
}


type UserFinal = {
    name:string,
    email:string,
    birthDay:string,
    photo:string,
    city:string,
    subject:string,
    bio:string,
    startHour:string,
    endHour:string,
    dayClass:Array<0>,
    type:Array<0>,
    stage:Array<0>,
    linkInstagram:string,
    linkTwitter:string,
    linkLinkedin:string,
    linkEmail:string,
    linkYoutube:string,
    numberWhatsapp:string,
}

type UserLoginGoogle = {
    name:string,
    id:string,
    photo:string,
    email:string
}

type AuthContextType = {
    user:any | undefined,
    signInWithGoogle:any,
    signInWithFacebook : any
}


export const AuthContext = createContext({} as AuthContextType)
export function AuthContextProvider(props: AuthContextProviderProps) {
    
    const navigate = useNavigate()
    const [user,setUser] = useState<UserLoginGoogle>()
    const [finalUser,setFinalUser] = useState<any>()

    useEffect(()=>{
        const currentUser = auth.currentUser
        if(!currentUser) {
           // navigate('/educators')
        }

        setPersistence(auth,browserSessionPersistence).then(()=>{
            if(GoogleAuthProvider) {
                return signInWithPopup(auth,providerGoogle)
            }
            else {
                return signInWithPopup(auth,providerFacebook)
            }
        })
        
    },[])
    
    function signInWithGoogle() {
        signInWithPopup(auth,providerGoogle).then((result: any)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken
            
            const {displayName,uid,photoURL,email} = result.user

           if(!displayName|| !photoURL) {
               return false
           }

           setUser({
               name:displayName,
                id: uid,
                photo: photoURL,
                email: email
           })
           console.log(result.user)
           checkInDatabase(uid)
        })
    }

    function signInWithFacebook() {
        signInWithPopup(auth,providerFacebook).then((result:any)=>{
            const credential = FacebookAuthProvider.credentialFromResult(result)
            const accessToken = credential?.accessToken

            const {displayName,uid,photoURL,email} = result.user

            if(!displayName || !photoURL) {
                return false
            }

            setUser({
                name: displayName,
                id: uid,
                photo: photoURL,
                email: email
            })

            console.log(result.user)
        })
    }

    function checkInDatabase(id:string) {
        const databaseRef = ref(database)
        get(child(databaseRef,`educators/${id}`)).then((snapshot)=>{
            if(snapshot.exists()) {
                const userDatabase = snapshot.val()
                setFinalUser({

                })
            }
            else {
                navigate('/educators/new/register')
            }
        })
    }



    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, signInWithFacebook }}>
            <div>{props.children}</div>
        </AuthContext.Provider>
    )
   
}