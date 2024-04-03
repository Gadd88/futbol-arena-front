import { useContext} from 'react'
import { ProductosContext } from '../context/ProductosContext'

export const useProductos = () => {
    
    const {productos, agregarCarrito, carrito} = useContext(ProductosContext)

    return {
        productos,
        agregarCarrito,
        carrito
    }
}
