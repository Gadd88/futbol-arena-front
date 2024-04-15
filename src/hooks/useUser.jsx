import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../context/UserContext"
import { toast } from "sonner"

export const useUser = () => {
    const navigate = useNavigate()
    const { registrarUsuario, regResult, loginUsuario, usuarioToken, cerrarSesion } = useContext(UserContext)    

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleLogin = async (user) => {
        const userData = {
          email: user.email,
          password: user.password
        }
        try{
          toast.promise(loginUsuario(userData),
        {
          loading: 'Ingresando 🕐...',
          success: 'A Jugar!! ⚽',
          error: 'Falta Juez!! ❌ - Usuario y/o Contraseña incorrectos.'
        })
          navigate('/')
        }catch(error){
          toast.error(error.message)
        }
      };

    const handleLogout = () => {
      toast.error('Hasta luego...')
      cerrarSesion()
    }

  return {
    registrarUsuario,
    regResult,
    loginUsuario,
    usuarioToken,
    handleLogin,
    setUser,
    user,
    handleLogout
  }
}