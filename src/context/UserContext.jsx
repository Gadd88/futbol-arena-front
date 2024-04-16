import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [regResult, setRegResult] = useState({
        message:'',
        usuario:{},
    })
    const storageUser = JSON.parse(localStorage.getItem('usuario')) || {}
    const [showLogin, setShowLogin] = useState(false);
    const [usuario, setUsuario] = useState(storageUser)
    const [usuarioToken, setUsuarioToken] = useState('')
    const apiUrl='https://futbol-arena-back.onrender.com/api'

    const registrarUsuario = async (user) => {
        try{
            const response = await fetch(`${apiUrl}/registro`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user)
                })
            if(!response.ok){
                const result = await response.json()
                throw new Error(result.message)
            } 
            const result = await response.json()
            setRegResult({
                message: result.message,
                usuario: result.usuario
            })
            return result
        }catch(err){
            throw new Error(err)
        }
    }

    const loginUsuario = async (user) => {
        try{
            const response = await fetch(`${apiUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            const result = await response.json()
            if(!response.ok){
                throw new Error(result.message)
            }
            setUsuarioToken(result.token)
            localStorage.setItem('token',result.token)
            return result
        }catch(err){
            throw new Error(err)
        }
        
    }
    
    useEffect(()=>{
        if(usuarioToken.length>0){
            const user = jwtDecode(usuarioToken)
            setUsuario(user)
            localStorage.setItem('usuario', JSON.stringify(user))
        }
    },[usuarioToken])


    return(
        <UserContext.Provider value={{
            registrarUsuario,
            loginUsuario,
            setShowLogin,
            regResult,
            usuarioToken,
            usuario,
            showLogin
        }}>
            { children }
        </UserContext.Provider>
    )
}
