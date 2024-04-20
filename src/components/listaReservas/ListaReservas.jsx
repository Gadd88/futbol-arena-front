import { useContext, useEffect, useState } from "react"
import {  getReservations, eliminarReserva } from "../../utils/reservasUtil"
import { UserContext } from "../../context/UserContext"

export const ListaReservas = () => {

  const [reservas, setReservas] = useState([])
  const {usuario} = useContext(UserContext)
  
  useEffect(()=>{
    getReservations().then(result => setReservas(result))
  },[])

  const eliminar = async (id) => {
    const newReservas = reservas.filter(reserva => reserva.reservation_id != id)
    await eliminarReserva(id, usuario)
    setReservas(newReservas)
  }

  return (
    <div className="h-screen w-full p-10 space-y-10 overflow-scroll">
        <h1 className="text-arena-green-950 font-semibold">Lista de Reservas Activas</h1>

        <table className="w-full text-black rounded-md bg-gray-50 p-5 border-separate border-spacing-3 table-fixed" >
          <thead>
            <tr className="">
              <th className="">Fecha</th>
              <th className="">Hora</th>
              <th className="">Cancha</th>
              <th className="">Acción</th>
            </tr>
          </thead>
          <tbody>
            {
              reservas.length > 0
              ? reservas?.map(reserva =>  (
                  <tr key={reserva.reservation_id} className="cursor-pointer hover:font-semibold">
                    <td className="text-start">{reserva.reservation_date}</td>
                    <td className="">{reserva.reservation_time}</td>
                    <td className="text-center">{reserva.reservation_field_name}</td>
                    <td className="">
                      <button className="bg-red-500 font-bold text-white hover:bg-red-700" onClick={()=>eliminar(reserva.reservation_id)}>Eliminar</button>
                    </td>
                  </tr>
                ))
              : <tr><td colSpan={5}>No hay reservas registradas</td></tr>
            }
          </tbody>
        </table>
    </div>
  )
}
