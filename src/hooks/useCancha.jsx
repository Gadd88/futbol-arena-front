import { useContext } from 'react'
import { CanchaContext } from '../context/CanchaContext'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

export const useCancha = () => {
    const navigate = useNavigate()
    const { handleDate, listaCanchas, handleConsulta, horarios, handleTime, reservation, setReservation, data, addReservation, crearCancha, eliminarCancha, setListaCanchas, getCanchas } = useContext(CanchaContext)

    const cancelReservation = () => {
      setReservation({
        reservation_date: '',
        reservation_time:'',
        reservation_field_id:'',
        reservation_field_name:'',
        user_id: ''
      })
    }
    const sendReservation = async (data) => {
      toast.promise(addReservation(data),{
        loading: 'Reservando...',
        success: (data) => {
          toast.success(data.message)
          navigate(0)
        },
        error: 'Ocurrió un error'
      })
    }
    const handleSubmit = async (e, token) => {
      e.preventDefault()
      const formData = new FormData(e.target)
  
      const nuevaCancha = {
        cancha_nombre: formData.get('cancha_nombre'),
        cancha_detalle: formData.get('cancha_detalle'),
      }
      
      await crearCancha(nuevaCancha, token)
      await getCanchas()
      
    }

    const handleDelete = async(id,user) => {
      const { isAdmin } = user
      await eliminarCancha(id, isAdmin)
      const newListaCanchas = listaCanchas.filter(cancha => cancha.cancha_id != id)
      setListaCanchas(newListaCanchas)
    }

  return {
    handleDate,
    listaCanchas,
    handleConsulta,
    horarios,
    handleTime,
    reservation,
    data,
    eliminarCancha,
    cancelReservation,
    handleDelete,
    handleSubmit,
    sendReservation
  }
}
