import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const modalElement = document.getElementById("modalLogin");

export const Login = ({ showLogin, setShowLogin }) => {

  const { handleLogin, setUser, user } = useUser()
  
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user)
    setTimeout(()=>{
      setShowLogin(false)
    },1000)
  }
  

  return (
    <div className="relative">
      {showLogin &&
        createPortal(
          <div className="flex w-[96%] h-[32rem] sm:w-[30rem] items-center justify-around text-white rounded-md fixed top-[6.7rem] sm:top-[10rem] flex-col right-0 left-0 sm:right-[7rem] sm:left-[7rem] mx-auto backdrop-opacity-90 bg-black/75 backdrop-blur-md">
            <section className="flex w-full flex-col space-y-10 px-5 relative">
              <button className="bg-arena-green-400 rounded-sm absolute left-auto right-3 -top-4 " onClick={()=>setShowLogin(false)}>X</button>
              <h2 className="text-center text-4xl font-medium">
                Iniciar Sesión
              </h2>
              <form className="space-y-10 flex flex-col"  onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col gap-10">
                  <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-arena-green-400">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                      className="w-full border-none bg-transparent outline-none focus:outline-none p-2"
                    />
                  </div>

                  <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-arena-green-400">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={handleInputChange}
                      className="w-full border-none bg-transparent outline-none focus:outline-none p-2"
                    />
                  </div>
                </div>
                <button
                  className="transform rounded-sm bg-arena-green-400 font-bold duration-300 hover:bg-arena-green-600 w-3/5 mx-auto"
                  type="submit"
                >
                  Iniciar Sesion
                </button>
              </form>
            </section>
              <section
                className="transform text-center font-semibold text-slate-200 duration-300 hover:text-gray-300">
                  <Link to='#' className="text-arena-green-200">
                    OLVIDASTE TU PASSWORD?
                  </Link>
                <p className="text-center text-lg">
                  Aún no tienes cuenta?
                  <Link
                    to="/registro"
                    className="font-medium ms-2 text-arena-green-300"
                  >
                    Regístrate
                  </Link>
                </p>
              </section>
          </div>,
          modalElement
        )}
    </div>
  );
};
