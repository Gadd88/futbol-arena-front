import { useContext, useState } from 'react'
import { ProductosContext } from '../context/ProductosContext'
import { UserContext } from '../context'

export const useProductos = () => {
    const [error, setError] = useState(false)
    const {productos, agregarCarrito, carrito, eliminarProducto, obtenerProductos, agregarProducto} = useContext(ProductosContext)
    const {usuarioToken} = useContext(UserContext)

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

    const handleEditar = async (id, producto) => {
        try{
            const response = await fetch(`https://futbol-arena-back.onrender.com/api/products/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${usuarioToken}`
                },
                body:JSON.stringify(producto)
            })
            const result = await response.json()
            await obtenerProductos()
            return result
        }catch(error){
            throw new Error(error)
        }
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
