import React from 'react';
import logo from "../../assets/futbolarenaTiny2.png";
import fb from "./icons/fb.svg";
import gh from "./icons/gh.svg";
import ig from "./icons/ig.svg";

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">¡Visita nuestras redes sociales!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Encuentranos en estas plataformas, respondemos de 1 a 2 dias hábiles.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex items-center">
  <div className="mr-3">
    <img src={fb} alt="facebook" width={40} height={40}/>
  </div>
  <div className="mr-3">
    <img src={ig} alt="instagram" width={40} height={40}/>
  </div>
  <div className="mr-3">
    <img src={gh} alt="github" width={40} height={40}/>
  </div>
</div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Links útiles</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">Sobre nosotros</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">+ Información</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
              <img className="rounded-full" src={logo} alt="flogo" width={100} height={100}/>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300"/>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span><p> Futbol Arena</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;