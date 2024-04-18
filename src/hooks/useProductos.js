import { useContext } from 'react'
import { ProductosContext } from '../context/ProductosContext'

export const useProductos = () => {
    
    const {productos, agregarCarrito, carrito, eliminarProducto, obtenerProductos} = useContext(ProductosContext)

    const handleDelete = async (id, token) => {
        await eliminarProducto(id, token)
        obtenerProductos()
    }

    const handleEditar = async () => {

    }

    return {
        productos,
        agregarCarrito,
        carrito,
        handleDelete,
        handleEditar
    }
}
