import { useContext, useState } from "react"
import { ProductosContext } from "../context/ProductosContext"

export const useCarrito = () => {
    const [isActive, setIsActive] = useState(false);
    const { carrito, eliminarCarrito } = useContext(ProductosContext)
    const totalCarrito = carrito.reduce(
        (acc, curr) => acc + curr.precio * curr.cantidad,
        0
      );

  return {
    carrito,
    eliminarCarrito,
    totalCarrito,
    isActive,
    setIsActive
  }
}
