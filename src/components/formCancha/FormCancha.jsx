import { useContext } from "react"
import { useCancha } from "../../hooks"
import { UserContext } from "../../context"

export const FormCancha = () => {

  const {usuarioToken} = useContext(UserContext)
  const {handleSubmit} = useCancha()

  return (
    <div className="h-screen rounded-md bg-primary-200 space-y-5 p-10">
        <h1 className="font-semibold text-arena-green-950 text-5xl">El Complejo</h1>
        <p className="text-arena-green-800 font-semibold ">Administra tus Canchas</p>
        <div className="flex flex-col w-full bg-accent-200 rounded-md p-5 h-fit justify-center space-y-10 items-center">
            <form onSubmit={(e)=> handleSubmit(e,usuarioToken)} className="flex flex-col gap-4 justify-center w-full ">
                {/* Inputs del formulario*/}
                <input
                    type="text"
                    name="cancha_nombre"
                    placeholder="Nombre de Cancha"
                    className="p-3 focus:outline-arena-green-400 outline-none text-gray-700 rounded-md"
                />
                <textarea
                    name="cancha_detalle"
                    placeholder="Detalle de cancha"
                    cols={30}
                    rows={5}
                    style={{resize: "none"}}
                    className="p-3 focus:outline-arena-green-400 outline-none text-gray-700 rounded-md"
                />
                {/* Botones */}
                <div className="flex gap-4 mt-5">
                    <button type="submit" className="bg-primary-100 hover:bg-primary-200 text-text-100 font-bold p-3 flex-1">
                        Agregar Cancha
                    </button>
                    <button type="button" className="border-4 border-primary-300 hover:text-black text-white font-bold p-3 flex-1">
                        Borrar Formulario
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
