import React from "react";

const AboutUsCards = () => {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 m-3 mt-10 ">
      <div className="container border border-2 rounded-lg content-center box-border h-200 w-100 p-4 justify-center">
        <div>
          <img
            src="https://picsum.photos/200/200"
            alt=""
            className="rounded-full mb-3"
          />
        </div>
        <h3 className="text-arena-green-700 font-bold text-center text-xl mb-4">
          Juan Perez
        </h3>
        <p className="text-arena-green-700 font-bold text-center text-l">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          reiciendis fuga labore aliquid magnam! Ipsa?"
        </p>
      </div>
      <div className="container border border-2">
        <div>
          <img
            src="https://picsum.photos/200/200"
            alt=""
            className="rounded-full"
          />
        </div>
        <h3 className="text-arena-green-700 font-bold text-center text-xl mb-4">
          Juan Perez
        </h3>
        <p className="text-arena-green-700 font-bold text-center text-l">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          reiciendis fuga labore aliquid magnam! Ipsa?"
        </p>
      </div>
      <div className="container border border-2">
        <div>
          <img
            src="https://picsum.photos/200/200"
            alt=""
            className="rounded-full"
          />
        </div>
        <h3 className="text-arena-green-700 font-bold text-center text-xl mb-4">
          Juan Perez
        </h3>
        <p className="text-arena-green-700 font-bold text-center text-l">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          reiciendis fuga labore aliquid magnam! Ipsa?"
        </p>
      </div>
      <div className="container border border-2">
        <div>
          <img
            src="https://picsum.photos/200/200"
            alt=""
            className="rounded-full"
          />
        </div>
        <h3 className="text-arena-green-700 font-bold text-center text-xl mb-4">
          Juan Perez
        </h3>
        <p className="text-arena-green-700 font-bold text-center text-l">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          reiciendis fuga labore aliquid magnam! Ipsa?"
        </p>
      </div>
    </section>
  );
};

export default AboutUsCards;
