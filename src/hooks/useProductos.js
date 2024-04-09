import { useContext, useEffect, useState} from 'react'
import { ProductosContext } from '../context/ProductosContext'

export const useProductos = () => {
    
    const {productos, agregarCarrito, carrito} = useContext(ProductosContext)
    const [user, setUser] = useState({})

    useEffect(()=>{
        const userStorage = JSON.parse(localStorage.getItem('user'))
        setUser(userStorage)
    },[])

    return {
        productos,
        agregarCarrito,
        carrito,
        user
    }
}
