import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [regResult, setRegResult] = useState({
        message:'',
        usuario:{},
    })
    const storageUser = JSON.parse(localStorage.getItem('usuario')) || {}
    const [showLogin, setShowLogin] = useState(storageUser);
    const [usuario, setUsuario] = useState({})
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
            const usuarioDecode = jwtDecode(result.token)
            localStorage.setItem('token',JSON.stringify(result.token))
            localStorage.setItem('usuario',JSON.stringify(usuarioDecode))
            return result
        }catch(err){
            throw new Error(err)
        }
        
    }
    
    useEffect(()=>{
        const sesionUser = JSON.parse(localStorage.getItem('usuario'))
        if(sesionUser){
            setUsuario(sesionUser)
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
            showLogin,
            setUsuario
        }}>
            { children }
        </UserContext.Provider>
    )
}
