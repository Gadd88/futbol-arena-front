import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { toast } from "sonner"
import { getUsers } from "../utils/getUser"

export const useUser = () => {
    const { registrarUsuario, regResult, loginUsuario, usuarioToken, usuario, setShowLogin, getUserData, showLogin, logout, eliminarUsuario } = useContext(UserContext)    
    const [error, setError] = useState(false)
    const [usersList, setUsersList] = useState([])
  
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleLogin = async (e,user) => {
      e.preventDefault();
      if(user.email == '' || user.password == '') {
        setError(true)
        setTimeout(()=>{
          setError(false)
        },1500)
        return
      }
      const userData = {
        email: user.email,
        password: user.password
      }
      toast.promise(loginUsuario(userData),{
        loading: 'Ingresando.. 🕐',
        success: 'A jugar!! ⚽',
        error: 'Falta Juez! ❌, ocurrió un error!'
      })
      setShowLogin(false)
    };

    const handleDelete = async (user_id) => {
      try{
        await eliminarUsuario(user_id)
        const newUsersList = usersList.filter(user => user.user_id != user_id)
        setUsersList(newUsersList)
        return toast.success('Usuario Eliminado')
      }catch(error){
        return toast.error(error.message)
      }
      
    }

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleLogout = () => {
      toast.error('Hasta luego...')
      logout()
    }

    useEffect(()=>{
      getUsers().then(result => setUsersList(result))
    },[])

  return {
    registrarUsuario,
    regResult,
    loginUsuario,
    usuarioToken,
    user,
    usuario,
    error,
    getUserData,
    showLogin,
    setShowLogin,
    usersList,
    handleLogin,
    handleInputChange,
    handleDelete,
    setUser,
    handleLogout
  }
}