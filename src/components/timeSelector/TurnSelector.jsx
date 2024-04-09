import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CanchaContext } from "../../context/CanchaContext";

const TurnSelector = () => {

  const {horarios} = useContext(CanchaContext)
  return (
    <section className="border-2 border-black  rounded-lg w-full">
        <h3 className="text-green-600 text-4xl font-bold mb-4">Selecciona el horario de tu partido</h3>
    <article className="flex flex-wrap items-center justify-start w-full gap-1">
      {
        horarios.length > 0 &&
        horarios?.map(horario => (
          <div 
            key={horario.id}
            className="bg-white w-32 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer relative">
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white text-green-600">
                Hora:
              </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {horario.hora}
            </p>
            {
              !horario.disponible &&
            <div className="absolute -rotate-[30deg] bg-red-500 top-6 right-5">Reservado</div>
            }
          </div>
        ))
      }
    </article>
    </section>
  );
};

export default TurnSelector;
