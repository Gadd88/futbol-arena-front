import { useEffect, useState } from "react";
import { CardProducto } from "../cardProducto/CardProducto";
import axios from "axios";
import { Link } from "react-router-dom";
import { useProductos } from "../../hooks/useProductos";

export const SectionShop = () => {

  const {productos} = useProductos();
  
  // const [productos, setProductos] = useState([])
  // const consultaApi = async () => {
  //   const response = await axios.get('https://futbol-arena-back.onrender.com/api/products')
  //   setProductos(response.data.sort((a,b)=>0.5 - Math.random()).slice(0,4))
  // }
  // useEffect(()=>{
  //   consultaApi()
  // },[])
  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-black text-3xl font-bold mb-6">Los productos mas vendidos</h2>
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
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
