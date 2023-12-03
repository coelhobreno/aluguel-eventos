import { useEffect, useState } from 'react'
import { db } from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'

export const useAuthentication = () => {
    
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    const checkIfCancelled = () => {
        if(cancelled){
            return
        }
    }
    
    const createUser = async (data) => {
        
        checkIfCancelled()
        setLoading(true)
        setError("")

        try{

            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password,
            )

            await updateProfile(user, {
                displayName: data.displayName,
            })

            setLoading(false)

            return user

        }catch(error){
            let systemErrorMessage
            if(error.message.includes("email-already-in-use")){
               systemErrorMessage = "Este e-mail já está em uso" 
            }else if(error.message.includes("Password should be at least")){
                systemErrorMessage = "A senha deve ter pelo menos 6 caracteres"
            }else{
                systemErrorMessage = error.message
            }
            setError(systemErrorMessage)
            setLoading(false)

        }
    }

    const login = async(document) => {

        checkIfCancelled()
        setLoading(true)
        setError("")

        try{

            const { email, password } = document

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            )

            setLoading(false)

        }catch(error){

            let systemErrorMessage;

            if(error.message.includes("invalid-login-credentials")){
                systemErrorMessage = "Credenciais inválidas. Verifique seu e-mail e senha e tente novamente."
            }else{
                systemErrorMessage = "Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde."
            }

            setError(systemErrorMessage)
            setLoading(false)

        }

    }

    const logout = () => {

        checkIfCancelled()
        setLoading(true)
        setError("")

        try{

            signOut(auth)
            setLoading(false)

        }catch(error){
            
            
            setError(error.message)
            setLoading(false)

        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        loading,
        error,
        createUser,
        login,
        logout
    }

}