import React,{useEffect} from 'react'
import {auth,provider} from '../services/Firebase'
import { GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

export  function AuthContext() {
    
    function signInWithGoogle() {
        const user = {
            name:'cavalo'
        }
    }

}