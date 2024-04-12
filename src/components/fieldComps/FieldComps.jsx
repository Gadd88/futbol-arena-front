import { Link } from "react-router-dom";
import cancha from "../../assets/cancha1.jpg";
import { useCancha } from "../../hooks/useCancha";

export const FieldComps = () => {

  const {listaCanchas, handleConsulta} = useCancha()

  return (
      <section className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6">
        <h2 className="mb-3 text-base font-bold text-arena-green-700">
          Selecciona tu cancha
        </h2>
        <ul className="my-4 space-y-3">
          {
            listaCanchas.length > 0 &&
            listaCanchas?.map(cancha => (
            <li className="flex items-center p-3 text-base font-bold rounded-lg bg-gray-100 text-arena-green-800 hover:bg-arena-green-100 active:bg-arena-green-100 group hover:shadow cursor-pointer"
              key={cancha.cancha_id}
              id={cancha.cancha_id}
              onClick={handleConsulta}>
              {cancha.cancha_nombre}
            </li>

            ))
          }
        </ul>
      </section>
  );
};
