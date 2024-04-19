import { useContext, useState } from 'react'
import { ProductosContext } from '../context/ProductosContext'

export const useProductos = () => {
    const [error, setError] = useState(false)
    const {productos, agregarCarrito, carrito, eliminarProducto, obtenerProductos, agregarProducto} = useContext(ProductosContext)

    const handleDelete = async (id, token) => {
        await eliminarProducto(id, token)
        obtenerProductos()
    }

    const handleSubmit = async(e,token, productoCloudData) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newProducto = {
            producto: formData.get('producto'),
            detalle: formData.get('detalle'),
            precio: formData.get('precio'),
            categoria: formData.get('categoria'),
            imagen: productoCloudData.url,
        }
        const {producto, detalle, precio, categoria, imagen} = newProducto
        if(!producto || !detalle || !precio | !categoria || !imagen) {
            setError(true)
            setTimeout(()=>{
                setError(false)
            },1000)
            return 
        }
        await agregarProducto(newProducto, token)
        obtenerProductos()
    }

    const handleEditar = async () => {

    }

    return {
        productos,
        agregarCarrito,
        carrito,
        error,
        handleDelete,
        handleEditar,
        handleSubmit,
    }
}
