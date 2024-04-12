import { Link } from "react-router-dom";
import logo from "../../assets/futbolarenaTiny.png";
import { useContext, useState } from "react";
import { Login, Carrito } from "../";
import { UserContext } from "../../context/";


export const Header = () => {
  const {showLogin, setShowLogin, usuario, cerrarSesion} = useContext(UserContext)
  const [isActive, setIsActive] = useState(false)

  return (
    <header className="w-full bg-arena-green-950 rounded-xl mx-auto my-5">
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${isActive ? "pb-6" : ""}`}>
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Inicio</span>
              <img
                src={logo}
                alt="logo futbol arena"
                className="w-20 bg-arena-green-50 rounded-full"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-arena-green-200"
                    to="/nosotros"
                  >
                    Quienes Somos
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-arena-green-200"
                    to="/contacto"
                  >
                    Contacto
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-arena-green-200"
                    to="/galeria"
                  >
                    Galeria
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-arena-green-200"
                    to="/reservas"
                  >
                    Reservas
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            {
              usuario.email
              ? <div className="hidden sm:flex gap-4 place-content-center place-items-center">
                  <Link to='/micuenta' className="rounded-md bg-arena-green-400 px-5 py-2.5 text-sm font-medium text-white shadow">
                    Mi Cuenta
                  </Link>
                  <button className="bg-black text-white" onClick={cerrarSesion}>
                    Cerrar Sesión
                  </button>
                </div>
              :
                <div className="sm:flex sm:gap-4">
                  <button
                    className="rounded-md bg-arena-green-400 px-5 py-2.5 text-sm font-medium text-white shadow"
                    onClick={()=>setShowLogin(true)}
                  >
                    Ingresar
                  </button>
                  <div className="hidden sm:flex">
                    <Link
                      className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-arena-green-900"
                      to="/registro"
                    >
                      Registrarse
                    </Link>
                  </div>
                </div>
            }
            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={() => setIsActive(!isActive)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            isActive ? "flex" : "hidden"
          } items-start justify-center w-full h-80 bg-arena-green-50 rounded-md space-y-4 mt-4 md:hidden transition-all `}
        >
          <div className=" flex flex-col items-center justify-around w-full h-full overflow-hidden">
            <Link
              to="/"
              className="px-4 h-full leading-[3rem] text-arena-green-900 rounded border-b-[1px] border-b-arena-green-800 w-full"
            >
              Inicio
            </Link>
            <Link
              to="/reservas"
              className="px-4 h-full leading-[3rem] text-arena-green-900 rounded border-b-[1px] border-b-arena-green-800 w-full"
            >
              Reservas
            </Link>
            <Link
              to="/nosotros"
              className="px-4 h-full leading-[3rem] text-arena-green-900 rounded border-b-[1px] border-b-arena-green-800 w-full"
            >
              Quienes Somos
            </Link>
            <Link
              to="/galeria"
              className="px-4 h-full leading-[3rem] text-arena-green-900 rounded border-b-[1px] border-b-arena-green-800 w-full"
            >
              Galeria
            </Link>
            <Link
              to="/contacto"
              className="px-4 h-full leading-[3rem] text-arena-green-900 rounded w-full"
            >
              Contacto
            </Link>
            <div className="flex items-center gap-4 justify-center w-full h-full overflow-hidden">
              {
                usuario.email
                ? <div className="flex place-content-center place-items-center w-full h-full overflow-hidden">
                    <Link to='/micuenta' className="rounded-none bg-arena-green-400 py-3 text-sm font-medium text-white shadow w-1/2 h-full flex items-center justify-center">
                      Mi Cuenta
                    </Link>
                    <button className="bg-black text-white rounded-none w-1/2 h-full py-3" onClick={cerrarSesion}>
                      Cerrar Sesión
                    </button>
                  </div>
                :  <Link
                      className="rounded-none bg-arena-green-200 px-5 py-2.5 text-sm font-medium text-arena-green-900 w-full h-full flex justify-center items-center rounded-b-lg"
                      to="/registro"
                    >
                      Registrarse
                    </Link>
              }
            </div>
          </div>
        </div>
        {
          usuario.email && 
          <Carrito />
        }
      </div>
      <Login showLogin={showLogin} setShowLogin={setShowLogin}/>
    </header>
    
  );
};
