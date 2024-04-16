import React from "react";

const AboutUsCards = () => {
  return (
    <section className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-4 m-10 ">
      <div className="flex flex-col border border-1 p-4 rounded-lg h-200 w-100 p-4 justify-items-center justify-center">
        <div className="flex justify-center justify-items-center">
          <img
            src="https://picsum.photos/200/200"
            alt=""
            className="rounded-full mb-3"
          />
        </div>
        <div>
          <h3 className="text-arena-green-700 font-bold text-center text-xl mb-4">
            Juan Perez
          </h3>
          <p className="text-gray-400 italic text-center text-l">
            "Desde que centre mi primer div, se desperto el nerd dentro de mi,
            no pude parar mas."
          </p>
        </div>
      </div>
      <div className="flex flex-col border border-1 rounded-lg p-4 h-200 w-100 p-4 justify-items-center justify-center">
        <div className="flex justify-center justify-items-center">
          <img
            src="https://picsum.photos/200/200"
            alt=""
            className="rounded-full"
          />
        </div>
        <div>
          <h3 className="text-arena-green-700 font-bold text-center text-xl mb-4">
            Juan Perez
          </h3>
          <p className="text-gray-400 italic text-center text-l">
            "Despues de un largo dia de trabajo con el codigo, no hay nada como
            tomarse un rico cafe."
          </p>
        </div>
      </div>
      <div className="flex flex-col border border-1 rounded-lg p-4 h-200 w-100 p-4 justify-items-center justify-center">
        <div className="flex justify-center justify-items-center">
          <img
            src="https://picsum.photos/200/200"
            alt=""
            className="rounded-full"
          />
        </div>
        <div>
          <h3 className="text-arena-green-700 font-bold text-center text-xl mb-4">
            Juan Perez
          </h3>
          <p className="text-gray-400 italic text-center text-l">
            "Tuve que elegir entre el futbol o la programacion, asi que hice una
            pagina web de futbol.."
          </p>
        </div>
      </div>
      <div className="flex flex-col border border-1 rounded-lg p-4 h-200 w-100 p-4 justify-items-center justify-center">
        <div className="flex justify-center justify-items-center">
          <img
            src="https://picsum.photos/200/200"
            alt=""
            className="rounded-full"
          />
        </div>
        <div>
          <h3 className="text-arena-green-700 font-bold text-center text-xl mb-4">
            Juan Perez
          </h3>
          <p className="text-gray-400 italic text-center text-l">
            "No me pude decidir por uno de los dos, asi que me hice FullStack
            :)"
          </p>
        </div>
      </div>
      <div className="flex flex-col border border-1 rounded-lg p-4 rounded-lg h-200 w-100 p-4 justify-items-center justify-center">
        <div className="flex justify-center justify-items-center">
          <img
            src="https://picsum.photos/200/200"
            alt=""
            className="rounded-full mb-3"
          />
        </div>
        <div>
          <h3 className="text-arena-green-700 font-bold text-center text-xl mb-4">
            Juan Perez
          </h3>
          <p className="text-gray-400 italic text-center text-l">
            "La programacion es mi pasion, me encanta el front-end!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCards;
