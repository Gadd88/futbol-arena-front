import { useEffect, useState } from "react"
import { getProducts } from "../../utils/getProducts"
import { useProductos } from "../../hooks"

export const ListaProductos = () => {

  // const [productos, setProductos] = useState([])

  const {productos} = useProductos()


  const eliminarProducto = (producto_id) => {
    console.log(producto_id)
  }

  return (
    <section className="border-4 border-red-800 h-screen w-full p-10 space-y-10">
        <h1 className="text-arena-green-950 font-semibold">Lista de Productos</h1>

        <table className="w-full text-black rounded-md bg-gray-50" >
          <thead>
            <tr>
              <th className="">Producto</th>
              <th className="">Categoria</th>
              <th className="">Precio</th>
              <th className="">Stock</th>
              <th className="">Acción</th>
            </tr>
          </thead>
          <tbody>
            {
              productos.length > 0
              ? productos.map(producto => (
                <tr key={producto.producto_id}>
                  <td className="">{producto.producto}</td>
                  <td className="">{producto.categoria}</td>
                  <td className="">{producto.precio}</td>
                  <td className="">{producto.stock}</td>
                  <td className="">
                    <button className="bg-red-500 font-bold text-white hover:bg-red-700" onClick={()=>eliminarProducto(producto.producto_id)}>Eliminar</button>
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
