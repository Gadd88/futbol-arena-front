import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../../context/UserContext"

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
        await loginUsuario(userData)
        setTimeout(()=>{
          navigate('/')
        }, 1000)
      };

  return {
    registrarUsuario,
    regResult,
    loginUsuario,
    usuarioToken,
    handleLogin,
    setUser,
    user
  }
}