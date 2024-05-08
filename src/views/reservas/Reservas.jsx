import {DatePicker, FieldComps, ReservationResume, TurnSelector} from '../../components/'
import { useCancha, useUser } from '../../hooks'
import { convertDate } from '../../utils/convertDate'

export const Reservas = () => {

  const {reservation, setReservation, consultaApi, listaCanchas} = useCancha()
  const {usuario} = useUser()

  const handleDate = (date) => {
    const newDate = convertDate(date)
    setReservation({
        ...reservation,
        reservation_date: newDate
    })
  }

  const handleField = (ev) => {  
    setReservation({
        ...reservation,
        reservation_field_id: ev.target.id,
        user_id: usuario.user_id
    })
    consultaApi(reservation)
}

  const handleTime = (horario) => {
    setReservation({
        ...reservation,
        reservation_time: horario
    })
}


  return (
    <section className='flex flex-col items-center justify-center h-full max-w-6xl mx-auto'>
      <article className="w-full mx-auto h-full bg-bg-100 rounded-xl p-5 flex flex-wrap gap-5 lg:p-10 lg:grid lg:grid-cols-3 lg:place-content-center justify-center items-stretch">
          <DatePicker handleDate={handleDate}/>
          <FieldComps handleField={handleField} listaCanchas={listaCanchas} reservation={reservation}/>
          <TurnSelector handleTime={handleTime}/>
      </article>
      {
        reservation.reservation_time != '' &&
        <ReservationResume reservation={reservation}/>
      }
    </section>
  )
}
