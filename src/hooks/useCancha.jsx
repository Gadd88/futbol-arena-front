import { useContext } from 'react'
import { CanchaContext } from '../context/CanchaContext'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

export const useCancha = () => {
    const navigate = useNavigate()
    const { handleDate, listaCanchas, handleConsulta, horarios, handleTime, reservation, setReservation, data, addReservation } = useContext(CanchaContext)

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

  return {
    handleDate,
    listaCanchas,
    handleConsulta,
    horarios,
    handleTime,
    reservation,
    cancelReservation,
    data,
    sendReservation
  }
}
