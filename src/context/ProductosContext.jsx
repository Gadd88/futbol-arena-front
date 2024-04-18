import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

export const ProductosContext = createContext()

export const ProductosProvider = ({children}) => {
    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useState([])
    
    const agregarProducto = async (producto, token) =>{
        try {
            const response = await fetch('http://localhost:3001/api/products',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify(producto)
            })
            const result = await response.json()
            console.log(result)
        } catch (error) {
            throw new Error(error)
        }
    }
    const editarProducto = async () =>{

    }
    const eliminarProducto = async (prod_id, token) =>{
        try {
            const response = await fetch(`http://localhost:3001/api/products/${prod_id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            const result = await response.json()
            console.log(result)
        } catch (error) {
            throw new Error(error)
        }

    }
    const obtenerProductos = async () =>{
        const response = await axios.get('https://futbol-arena-back.onrender.com/api/products')
        setProductos(response.data)
    }

    const agregarCarrito = (producto) => {
        const productoIdx = carrito.findIndex(item => item.producto_id === producto.producto_id)
        if(productoIdx >= 0){
            const newCarrito = structuredClone(carrito)
            newCarrito[productoIdx].cantidad++
            toast.success('Producto Agregado...')
            setCarrito(newCarrito)
        }else{
            producto.cantidad = 1
            setCarrito([
                ...carrito,
                producto
            ])
        }
    }
    const eliminarCarrito = (producto_id) => {
        const newCarrito = carrito.filter(item => item.producto_id !== producto_id)
        toast.error('Producto eliminado')
        setCarrito(newCarrito)
    }
    
    useEffect(()=>{
      obtenerProductos()
    },[])

    return (
        <ProductosContext.Provider value={{
            agregarProducto,
            editarProducto,
            eliminarProducto,
            agregarCarrito,
            eliminarCarrito,
            obtenerProductos,
            carrito,
            productos
        }}>
            {children}
        </ProductosContext.Provider>
    )
}