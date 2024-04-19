import { useContext } from "react";
import { useProductoImg, useProductos } from "../../hooks";
import { UserContext } from "../../context/UserContext";

export const FormProducto = () => {
  const {usuarioToken} = useContext(UserContext)
  const { productoBlob, productoCloudData, handleProductoFile} = useProductoImg()
  const {handleSubmit, error} = useProductos()

  return (
    <div className="h-screen rounded-md bg-primary-200 space-y-5 p-10">
        <h1 className="font-semibold text-arena-green-950 text-5xl">El Complejo</h1>
        <p className="text-arena-green-800 font-semibold ">Administra tus Productos</p>
        <div className="flex flex-col w-full bg-gray-200 rounded-md p-5 h-fit justify-center space-y-10 items-center">
            <form onSubmit={(e)=>handleSubmit(e,usuarioToken, productoCloudData)} className="flex flex-col gap-4 justify-center w-full ">
              {
                error && <p className="bg-red-400 font-semibold p-5 rounded-md">Todos los campos son obligatorios</p>
              }
                {/* Inputs del formulario*/}
                <input
                    type="text"
                    name="producto"
                    placeholder="Producto"
                    className="p-3 focus:outline-arena-green-400 outline-none text-gray-700 rounded-md"
                />
                <input
                    name="detalle"
                    placeholder="Detalle de producto"
                    cols={30}
                    rows={5}
                    style={{resize: "none"}}
                    className="p-3 focus:outline-arena-green-400 outline-none text-gray-700 rounded-md"
                />
                <div className="flex gap-2 justify-between">
                  <label htmlFor="categoria" className="text-black font-semibold">Categoria
                    <input type="text" name="categoria" placeholder="Categoria" className="p-3 ms-5 focus:outline-arena-green-400 outline-none text-gray-700 rounded-md"/>
                  </label>
                  <label className="text-black font-semibold" htmlFor="precio">Precio
                    <input type="number" name="precio" className="p-3 focus:outline-arena-green-400 outline-none text-gray-700 ms-5 rounded-md"/>
                  </label>
                </div>
                <input type="file" name="imagen" accept='image/png image/jpg image/jpeg' placeholder="Imagen" className="p-3 focus:outline-arena-green-400 outline-none text-gray-700 rounded-md" onChange={(e)=>handleProductoFile(e)}/>
                {
                  productoBlob
                  ? 
                    <figure className="border-2 border-arena-green-200 w-1/3 mx-auto min-h-20">
                      <img src={productoBlob} alt="producto imagen" />
                    </figure>
                  : <p className="text-arena-green-950">Agregue una imagen para el producto</p>
                }
                {/* Botones */}
                <div className="flex gap-4 mt-5">
                    <button type="submit" className="bg-arena-green-300 hover:bg-arena-green-500 text-white p-3 flex-1">
                        Agregar
                    </button>
                    <button type="button" className="bg-black hover:bg-white hover:text-black text-white p-3 flex-1">
                        Borrar Formulario
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};
