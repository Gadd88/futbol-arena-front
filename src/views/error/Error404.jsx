import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer.jsx';

export const Error404 = () => {
  return (
    <div className="w-full mx-auto h-[100dvh] xl:w-[1200px] bg-arena-green-50 rounded-xl overflow-hidden">
git
      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl text-arena-green-950 mb-8">Error</h1>

        {/* Imagen central */}
        <img
          src="/ruta/a/la/imagen.jpg"
          alt="Imagen temática"
          className="max-w-md mb-8"
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