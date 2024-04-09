import { CardProducto } from "../cardProducto/CardProducto";
import { Link } from "react-router-dom";
import { useProductos } from "../../hooks/useProductos";

export const SectionShop = () => {

  const {productos} = useProductos();
  
  return (
    <section className=" py-5 bg-gray-100">
      <h2 className="text-black text-3xl font-bold mb-6">Los productos mas vendidos</h2>
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10 h-full">
        {
          productos.map((producto) => (
            <CardProducto 
              key={producto.producto_id}
              data={producto}/>
          ))
        }
      </div>
      <Link className="bg-arena-green-500 p-3 rounded-xl flex w-fit justify-end ml-auto mr-5">Ver más &#x27A1;</Link>
    </section>
  );
};
