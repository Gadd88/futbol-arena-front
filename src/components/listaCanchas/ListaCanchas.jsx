import { useContext } from "react"
import { useCancha } from "../../hooks/useCancha"
import { UserContext } from "../../context"

export const ListaCanchas = () => {

  const {listaCanchas, handleDelete} = useCancha()
  const {usuario} = useContext(UserContext)

  return (
    <section className="h-screen w-full p-10 space-y-10">
        <h1 className="text-arena-green-950 font-semibold">Lista de Canchas Activas</h1>

        <table className="w-full text-black rounded-md bg-gray-50 border-separate border-spacing-5" >
          <thead className="">
            <tr className="">
              <th className="">Nombre de Cancha</th>
              <th className="">Detalle</th>
              <th className="">Acción</th>
            </tr>
          </thead>
          <tbody>
            {
              listaCanchas.length > 0
              ? listaCanchas.map(cancha => (
                <tr key={cancha.cancha_id}>
                  <td className="text-start">{cancha.cancha_nombre}</td>
                  <td className="">{cancha.cancha_detalle}</td>
                  <td className="">
                    <button className="bg-red-500 font-bold text-white hover:bg-red-700" onClick={()=>handleDelete(cancha.cancha_id,usuario)}>Eliminar</button>
                  </td>
                </tr>
              ))
              : <tr><td colSpan={5}>No hay canchas registradas</td></tr>
            }
          </tbody>
        </table>
    </section>
  )
}
