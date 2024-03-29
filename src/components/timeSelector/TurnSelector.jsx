import React from "react";
import { Link } from "react-router-dom";

const TurnSelector = () => {
  return (
    <section>
        <h3 className="text-green-600 text-4xl font-bold mb-4">Selecciona el horario de tu partido</h3>
    <article className="grid grid-cols-2">
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white text-green-600">
            Hora:
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          18:00 - 19:00
        </p>
        <Link
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        > Reservar
        </Link>
      </div>
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-600 dark:text-white">
            Hora:
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          18:00 - 19:00
        </p>
        <Link
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        > Reservar
        </Link>
      </div>
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-600 dark:text-white">
            Hora:
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          18:00 - 19:00
        </p>
        <Link
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        > Reservar
        </Link>
      </div>
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-600 dark:text-white">
            Hora:
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          18:00 - 19:00
        </p>
        <Link
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        > Reservar
        </Link>
      </div>
    </article>
    </section>
  );
};

export default TurnSelector;
