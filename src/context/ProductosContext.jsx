import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductosContext = createContext()

export const ProductosProvider = ({children}) => {
    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useState([])

    const agregarProducto = async () =>{

    }
    const editarProducto = async () =>{

    }
    const eliminarProducto = async () =>{

    }
    const obtenerProductos = async () =>{
        const response = await axios.get('https://futbol-arena-back.onrender.com/api/products')
        setProductos(response.data.sort((a,b)=>0.5 - Math.random()).slice(0,4))
    }

    const agregarCarrito = (producto) => {
        const productoIdx = carrito.findIndex(item => item.producto_id === producto.producto_id)
        if(productoIdx >= 0){
            const newCarrito = structuredClone(carrito)
            newCarrito[productoIdx].cantidad++
            setCarrito(newCarrito)
        }else{
            producto.cantidad = 1
            setCarrito([
                ...carrito,
                producto
            ])
        }
        console.log(carrito)
    }
    const eliminarCarrito = (producto_id) => {
        const newCarrito = carrito.filter(item => item.producto_id !== producto_id)
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
            carrito,
            productos
        }}>
            {children}
        </ProductosContext.Provider>
    )
}