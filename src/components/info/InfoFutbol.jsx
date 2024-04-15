import React from "react";
import Map from "../map/Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import calendar from "../../assets/calendar.svg";
import clock from "../../assets/clock.svg"
import wp from '../../assets/wp.svg'
import email from '../../assets/email.svg'
import location from '../../assets/location.svg'

const InfoFutbol = () => {
  return (
    <section className="w-full mx-auto h-full bg-arena-green-50 rounded-xl p-5 flex flex-wrap gap-5 lg:p-10 place-content-center">
      <article className="lg:grid lg:grid-cols-3 lg:place-content-center justify-center items-stretch gap-5">
        <div >
          <Map />
        </div>

        <div className="grid grid-rows-3 gap-4 flex justify-center p-10 bg-white border border-gray-200 rounded-lg shadow">
          <div className="flex justify-center">
            <h3 className="text-arena-green-700 font-bold text-center text-3xl">
              {" "}
              Cuando abrimos?
            </h3>
          </div>
          <div className="flex justify-center flex-col justify-center place-items-center">
            <img src={calendar} alt="" className="w-10 h-10 text-center" />
            <h4 className="text-arena-green-700 font-bold text-2xl">
              {" "}
              Todos los dias
            </h4>
          </div>
          <div className="flex justify-center flex-col justify-center place-items-center">
            <img src={clock} alt="" className="w-10 h-10 text-center" />
            <h4 className="text-arena-green-700 font-bold text-center text-2xl">
              {" "}
              Horarios:{" "}
            </h4>
            <h5 className="text-black font-bold text-center"> 10:00 hasta las 23:00  </h5>
          </div>
        </div>

        <div className="grid grid-rows-3 gap-4 flex justify-start p-10 bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex justify-start flex-row gap-5">
                    <img src={wp} alt="" className="w-10 h-10 text-center"/>
                    <h4 className="text-black font-bold text-center"> Contactanos por Whatsapp: 381-4628299</h4>
                </div>
                <div className="flex justify-start flex-row gap-5">
                    <img src={email} alt="" className="w-10 h-10 text-center"/>
                    <h4 className="text-black font-bold text-center">Para eventos especiales y consultas: futbol_arena@gmail.com</h4>
                </div>
                <div className="flex justify-start flex-row gap-5">
                    <img src={location} alt="" className="w-10 h-10 text-center"/>
                    <h4 className="text-black font-bold text-center">Visita nuestro complejo en: Av. Libertador 1000</h4>
                </div>

        </div>
      </article>
    </section>
  );
};

export default InfoFutbol;
