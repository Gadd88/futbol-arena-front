import { createPortal } from "react-dom";
import { useCarrito } from "../../hooks/useCarrito";
import { ProductoCarrito } from "../productoCarrito/ProductoCarrito";

export const Carrito = () => {
  const { carrito, totalCarrito, isActive, setIsActive } = useCarrito();

  return (
    <section className="flex justify-end me-10 my-2 pb-2">
      <article className="flex items-center justify-center flex-col">
        <p className="relative scale-75 cursor-pointer" onClick={()=>setIsActive(!isActive)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span className="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
            {carrito?.length}
          </span>
        </p>
        {
            isActive &&
            createPortal(
                <div className="p-5 absolute top-10 left-0 right-0 mx-auto w-96 bg-black/80 backdrop-blur-sm z-20 rounded-lg flex flex-col items-end gap-4">
                    <button className="py-1 px-3 bg-green-400 font-bold text-white rounded-sm" onClick={()=>setIsActive(false)}>X</button>
                    {
                        carrito.length > 0
                        ?   <>
                                <table className="">
                                    <thead className="shadow-xl border-green-300 rounded-xl border-2">
                                        <tr className="">
                                            <th className="w-1/6"></th>
                                            <th className="w-2/6">Producto</th>
                                            <th className="w-1/6">Precio</th>
                                            <th className="w-1/6">Cantidad</th>
                                            <th className="w-1/6"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            carrito.map((item) => (
                                                <ProductoCarrito 
                                                    key={item.producto_id} 
                                                    item={item}
                                                    />
                                            ))
                                        }
                                    </tbody>
                                </table>
                                <button className="text-base px-4 py-2 rounded font-bold cursor-pointer bg-arena-green-700 text-arena-200">
                                    Pagar ${totalCarrito}
                                </button>
                            </>
                        : <p className="text-center border-2 border-arena-green-200 block w-full">No tiene elementos en su carrito </p>
                    }
                </div>
                , document.body
            )
        }
      </article>
    </section>
  );
};