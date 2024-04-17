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
    <div className="border-4 border-red-800 h-screen w-full p-10">
        <h1 className="text-arena-green-950 font-semibold">Lista de Reservas Activas</h1>

        <table className="w-full text-black rounded-md bg-gray-50 p-5" >
          <thead>
            <tr>
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
                  <tr key={reserva.reservation_id}>
                    <td className="">{reserva.reservation_date}</td>
                    <td className="">{reserva.reservation_time}</td>
                    <td className="">{reserva.cancha_nombre}</td>
                    <td className="">
                      <button className="bg-red-500 font-bold text-white hover:bg-red-700" onClick={()=>eliminar(reserva.reservation_id)}>Eliminar</button>
                    </td>
                  </tr>
                ))
              : <tr><td colSpan={5}>No hay usuarios registrados</td></tr>
            }
          </tbody>
        </table>
    </div>
  )
}
