import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../context/UserContext"
import { toast } from "sonner"

export const useUser = () => {
    const navigate = useNavigate()
    const { registrarUsuario, regResult, loginUsuario, usuarioToken } = useContext(UserContext)    

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleLogin = async (user) => {
        const userData = {
          email: user.email,
          password: user.password
        }
        toast.promise(loginUsuario(userData),{
          loading: 'Ingresando.. 🕐',
          success: 'A jugar!! ⚽',
          error: 'Falta Juez! ❌, ocurrió un error!'
        })
      };

    const handleLogout = () => {
      toast.error('Hasta luego...')
      localStorage.clear()
      navigate(0)
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