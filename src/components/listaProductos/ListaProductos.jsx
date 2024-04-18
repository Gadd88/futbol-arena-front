import { useContext } from "react"
import { useProductos } from "../../hooks"
import { UserContext } from "../../context/UserContext"

export const ListaProductos = () => {

  
  const {productos, handleDelete, handleEditar} = useProductos()

  const {usuarioToken} = useContext(UserContext)
  
  const editarProducto = (producto_id) => {
    console.log(producto_id)
  }

  return (
    <section className="h-screen w-full p-8 space-y-10">
        <h1 className="text-arena-green-950 font-semibold">Lista de Productos</h1>

        <table className="w-full text-black rounded-md bg-gray-50 table-auto overflow-hidden border-separate border-spacing-y-5 border-spacing-x-3" >
          <thead>
            <tr className="">
              <th className="w-4/12">Producto</th>
              <th className="w-2/12">Categoria</th>
              <th className="w-2/12">Precio</th>
              <th className="w-1/12">Stock</th>
              <th className="w-2/12">Editar</th>
              <th className="w-1/12">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {
              productos.length > 0
              ? productos.map(producto => (
                <tr key={producto.producto_id} className="cursor-pointer hover:font-semibold">
                  <td className="text-start">{producto.producto}</td>
                  <td className="text-start">{producto.categoria.toUpperCase()}</td>
                  <td className="">{producto.precio}</td>
                  <td className="">{producto.stock}</td>
                  <td className="">
                    <button className="bg-cyan-300 font-bold text-white hover:bg-cyan-500" onClick={()=>editarProducto(producto.producto_id)}>Editar</button>
                  </td>
                  <td className="">
                    <button className="bg-red-500 font-bold text-white hover:bg-red-700" onClick={()=>handleDelete(producto.producto_id, usuarioToken)}>X</button>
                  </td>
                </tr>
              ))
              : <tr><td colSpan={5}>No hay productos cargados</td></tr>
            }
          </tbody>
        </table>
    </section>
  )
}
