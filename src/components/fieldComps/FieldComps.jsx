import { Link } from "react-router-dom";
import cancha from "../../assets/cancha1.jpg";

const FieldComps = () => {
  return (
    <article>
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Selecciona tu cancha
        </h5>
        <ul class="my-4 space-y-3">
          <li>
            <Link className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              {" "}
              Cancha 1
            </Link>
          </li>
          <li>
            <Link className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              {" "}
              Cancha 2
            </Link>
          </li>
          <li>
            <Link className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              {" "}
              Cancha 3
            </Link>
          </li>
        </ul>
        <div></div>
      </div>
    </article>
  );
};

export default FieldComps;
