import { useContext, useState } from "react"
import { useProductos } from "../../hooks"
import { UserContext } from "../../context/UserContext"
import { LogoReservas } from "../drawer/iconos"
import { ProductoModal } from "../productoModal/ProductoModal"

export const ListaProductos = () => {

  const [showModal, setShowModal] = useState(false)
  const [producto, setProducto] = useState({})
  const {productos, handleDelete} = useProductos()

  const {usuarioToken} = useContext(UserContext)
  
  const closeModal = ()=>{
    setShowModal(false)
  }
  const editarProducto = (producto) => {
    setProducto(producto)
    setShowModal(true)
  }
  return (
    <section className="h-screen w-full p-2 md:p-8 space-y-10">
        <h1 className="text-arena-green-950 font-semibold text-2xl md:text-5xl">Lista de Productos</h1>

        <table className="w-full text-black rounded-md bg-gray-50 table-auto overflow-hidden border-separate border-spacing-y-5 border-spacing-x-3 text-xs sm:text-base" >
          <thead>
            <tr className="">
              <th className="w-5/12">Producto</th>
              <th className="w-2/12">Categoria</th>
              <th className="w-2/12">Precio</th>
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
                  <td className="text-center">{producto.categoria.toUpperCase()}</td>
                  <td className="">${producto.precio}</td>
                  <td className="">
                    <button className="bg-cyan-300 font-bold text-white hover:bg-cyan-500" onClick={()=>editarProducto(producto)}><LogoReservas/></button>
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
            {
              showModal &&
              <ProductoModal producto={producto} closeModal={closeModal} />
            }
    </section>
  )
}
