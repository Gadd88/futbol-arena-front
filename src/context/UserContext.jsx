import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [regResult, setRegResult] = useState({
        message:'',
        usuario:{},
    })
    const storageUser = JSON.parse(localStorage.getItem('usuario'))
    const storageToken = localStorage.getItem('token')
    const [usuario, setUsuario] = useState(storageUser || {})
    const [usuarioToken, setUsuarioToken] = useState(storageToken || '')
    const [showLogin, setShowLogin] = useState(false);
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
            setUsuario(usuarioDecode)
            return result
        }catch(err){
            throw new Error(err)
        }
    }

    const logout = () => {
        localStorage.clear()
        setUsuario({})
        setUsuarioToken('')
    }

    const getUserData = async(id) => {
        const response = await fetch(`https://futbol-arena-back.onrender.com/api/users/${id}`)
        const result = await response.json()
        setUsuario(result)
        localStorage.setItem('usuario', JSON.stringify(result))
    }

    const eliminarUsuario = async(id) => {
        const response = await fetch(`https://futbol-arena-back.onrender.com/api/users/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${usuarioToken}`
            }
        })
        const result = await response.json()
        return result
    }

    useEffect(()=>{
        localStorage.setItem('usuario', JSON.stringify(usuario))
        localStorage.setItem('token', JSON.stringify(usuarioToken))   
    },[usuario, usuarioToken])


    return(
        <UserContext.Provider value={{
            registrarUsuario,
            loginUsuario,
            getUserData,
            setShowLogin,
            setUsuario,
            logout,
            eliminarUsuario,
            regResult,
            usuarioToken,
            usuario,
            showLogin,
        }}>
            { children }
        </UserContext.Provider>
    )
}
