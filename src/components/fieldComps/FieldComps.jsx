import { Link } from "react-router-dom";
import cancha from "../../assets/cancha1.jpg";
import { useCancha } from "../../hooks/useCancha";

const FieldComps = () => {

  const {listaCanchas, handleConsulta} = useCancha()

  return (
    <article>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Selecciona tu cancha
        </h5>
        <ul className="my-4 space-y-3">
          {
            listaCanchas.length > 0 &&
            listaCanchas?.map(cancha => (
            <li className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white cursor-pointer"
              key={cancha.cancha_id}
              id={cancha.cancha_id}
              onClick={handleConsulta}>
              {cancha.cancha_nombre}
            </li>

            ))
          }
        </ul>
        <div></div>
      </div>
    </article>
  );
};

export default FieldComps;
