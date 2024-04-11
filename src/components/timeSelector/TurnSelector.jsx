import React, { useContext } from "react";
import { CanchaContext } from "../../context/CanchaContext";

export const TurnSelector = () => {

  const {horarios} = useContext(CanchaContext)
  return (
    <section className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6">
      <h2 className="text-arena-green-700 font-bold mb-4">Horarios Disponibles</h2>
      <article className="flex md:flex-wrap items-center justify-start md:justify-center w-full gap-1 overflow-auto">
        {
          horarios.length > 0 &&
          horarios?.map(horario => (
            <div 
              key={crypto.randomUUID()}
              id={horario.id}
              className="bg-white min-w-32 md:min-w-20 md:w-20 h-20 flex items-center justify-center border border-gray-200 rounded-sm shadow cursor-pointer relative overflow-hidden hover:bg-arena-green-200">
              <p className="mb-1 font-semibold text-gray-700">
                {horario.hora}
              </p>
              {
                !horario.disponible &&
              <div className="absolute -rotate-[30deg] bg-arena-green-300 p-2 bottom-5 w-28 flex justify-center items-center">Reservado</div>
              }
            </div>
          ))
        }
      </article>
    </section>
  );
};
