import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer.jsx';
import error from "../../assets/404.png";

export const Error404 = () => {
  return (
    <div className="w-full mx-auto h-[100dvh] xl:w-[1200px] bg-arena-green-100 rounded-xl overflow-hidden">
      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl text-arena-green-950 mb-8">Error</h1>

        {/* Imagen central */}
        <img
          src={error}
          alt="Error 404"
          className="max-w-60"
        />

        {/* Descripción del error */}
        <p className="text-lg text-arena-green-950 mb-8">
          Lo sentimos, la página que estás buscando no está disponible.
        </p>

        {/* Botón para volver al inicio */}
        <Link
          to="/"
          className="inline-block bg-arena-green-950 hover:bg-arena-green-800 text-white font-bold py-2 px-4 rounded"
        >
          Volver al Inicio
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Error404;