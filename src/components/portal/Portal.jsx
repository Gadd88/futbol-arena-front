import React from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const modalElement = document.getElementById("modalLogin");

export const Portal = ({ show, setShow }) => {
  const closeModal = () => {
    setShow(false);
  };

  return (
    <div className="relative">
      {show &&
        createPortal(
          <div className="flex w-[96%] h-[30rem] sm:w-[30rem] items-center justify-around text-white rounded-md fixed top-[6.4rem] sm:top-[10rem] flex-col right-0 left-0 sm:right-[7rem] sm:left-[7rem] mx-auto sm:mx-auto backdrop-opacity-90 bg-black/75 backdrop-blur-md">
            <button className="bg-arena-green-400 ms-auto me-3 mt-3 sm:mt-5 rounded-sm" onClick={closeModal}>X</button>
            <section className="flex w-full flex-col space-y-10 p-5">
            <div className="text-center text-4xl font-medium">
              Iniciar Sesión
            </div>
              <form className="space-y-10 flex flex-col">
                <div className="mb-4 flex flex-col gap-6">
                  <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-arena-green-400">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="w-full border-none bg-transparent outline-none focus:outline-none"
                    />
                  </div>

                  <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-arena-green-400">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="w-full border-none bg-transparent outline-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="inline-flex items-center"></div>
                <button
                  className="transform rounded-sm bg-arena-green-400 py-2 font-bold duration-300 hover:bg-arena-green-600 "
                  type="submit"
                >
                  Iniciar Sesion
                </button>
              </form>
            </section>
              <Link
                to="#"
                className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
              >
                OLVIDASTE TU PASSWORD?
              </Link>
              <p className="text-center text-lg">
              Aún no tienes cuenta?
              <Link
                to="/registro"
                className="font-medium ms-2 text-arena-green-300 underline-offset-4 hover:underline"
              >
                Regístrate
              </Link>
            </p>
            
          </div>,
          modalElement
        )}
    </div>
  );
};
