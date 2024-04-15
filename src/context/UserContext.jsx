import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

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
            const response = await toast.promise(fetch(`${apiUrl}/registro`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user)
                }),{
                    pending: 'Registrando 👌',
                    success: 'Registro Exitoso!! ⚽',
                    error: 'Falta Juez! ❌ - Ocurrió un error! '
                })
            if(!response.ok){
                throw new Error('Error en el registro')
            }
            const result = await response.json()
            setRegResult({
                message: result.message,
                usuario: result.usuario
            })
        }catch(err){
            console.log(err)
        }
    }

    const loginUsuario = async (user) => {
        // const response = await fetch('http://localhost:3001/api/login',{
        const response = await fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        if(!response.ok){
            const result = await response.json()
            console.log(result.message)
            return
        }
        const result = await response.json()
        setUsuarioToken(result.token)
        localStorage.setItem('token',result.token)
    }
    const cerrarSesion = () => {
        setTimeout(()=>{
            localStorage.clear()
            location.reload()

        },500)
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
            cerrarSesion,
            regResult,
            usuarioToken,
            usuario,
            showLogin
        }}>
            { children }
        </UserContext.Provider>
    )
}
