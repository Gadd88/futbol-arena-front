import { useCancha } from "../../hooks/useCancha"

export const ListaCanchas = () => {

  const {listaCanchas} = useCancha()

  return (
    <section className="border-4 border-red-800 h-screen w-full p-10 space-y-10">
        <h1 className="text-arena-green-950 font-semibold">Lista de Canchas Activas</h1>

        <table className="w-full text-black rounded-md bg-gray-50" >
          <thead className="">
            <tr>
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
                  <td className="">{cancha.cancha_nombre}</td>
                  <td className="">{cancha.cancha_detalle}</td>
                  <td className="">
                    <button className="bg-red-500 font-bold text-white hover:bg-red-700" onClick={()=>console.log(cancha.cancha_id)}>Eliminar</button>
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
