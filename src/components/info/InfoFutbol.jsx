import React from "react";
import Map from "../map/Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import calendar from "../../assets/calendar.svg";

const InfoFutbol = () => {
  return (
    <section className="w-full mx-auto h-full bg-arena-green-50 rounded-xl p-5 flex flex-wrap gap-5 lg:p-10 ">
      <h3 className="text-arena-green-700 font-bold text-center ">
        Donde estamos:
      </h3>
      <article className="lg:grid lg:grid-cols-3 lg:place-content-center justify-center items-stretch">
        <div>
          <Map />
        </div>

        <div className="grid grid-rows-3 gap-4">
          <div className="flex justify-center">
            <h3 className="text-arena-green-700 font-bold text-center">
              {" "}
              Cuando abrimos?
            </h3>
          </div>
          <div className="flex justify-center">
            <img src={calendar} alt="" className="w-10 h-10" />
            <h4 className="text-arena-green-700 font-bold text-center">
              {" "}
              Todos los dias
            </h4>
          </div>
          <div className="flex justify-center">
            <h4 className="text-arena-green-700 font-bold text-center">
              {" "}
              Horarios:{" "}
            </h4>{" "}
          </div>
        </div>

        <div></div>
      </article>
    </section>
  );
};

export default InfoFutbol;
