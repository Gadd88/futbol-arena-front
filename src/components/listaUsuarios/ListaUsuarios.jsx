import { useEffect } from "react"
import { getUsers } from "../../utils/getUser"
import { useState } from "react"

export const ListaUsuarios = () => {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    getUsers().then(result => setUsers(result))
  },[])

  const eliminarUsuario = (user_id) => {
    console.log(user_id)
  }

  return (
    <section className="h-screen w-full p-10 space-y-10">
        <h1 className="text-arena-green-950 font-semibold">Lista de Usuarios Activas</h1>

        <table className="w-full text-black rounded-md bg-gray-50 border-separate border-spacing-5" >
          <thead>
            <tr>
              <th className="">Nombre</th>
              <th className="">Email</th>
              <th className="">Teléfono</th>
              <th className="">N° Reservas</th>
              <th className="">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {
              users.length > 0
              ? users.map(user => (
                <tr key={user.user_id}>
                  <td className="text-start">{user.nombre}</td>
                  <td className="text-start">{user.email}</td>
                  <td className="">{user.telefono}</td>
                  <td className="">{user.reservas.length}</td>
                  <td className="">
                    <button className="bg-red-500 font-bold text-white hover:bg-red-700" onClick={()=>eliminarUsuario(user.user_id)}>X</button>
                  </td>
                </tr>
              ))
              : <tr><td colSpan={5}>No hay usuarios registrados</td></tr>
            }
          </tbody>
        </table>

    </section>
  )
}
