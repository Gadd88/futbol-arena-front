import { useContext } from 'react'
import { CanchaContext } from '../context/CanchaContext'

export const useCancha = () => {

    const { handleDate, listaCanchas, handleConsulta, horarios, selectedTime, reservation, setReservation } = useContext(CanchaContext)

    const cancelReservation = () => {
      setReservation({
        reservation_date: '',
        reservation_time:'',
        reservation_id:'',
        reservation_field_id:'',
        reservation_field_name:'',
      })
    }

  return {
    handleDate,
    listaCanchas,
    handleConsulta,
    horarios,
    selectedTime,
    reservation,
    cancelReservation
  }
}
