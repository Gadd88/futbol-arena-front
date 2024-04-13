import React from "react";
import complejo from "../../assets/complejo.jpg";

const AboutUsBanner = () => {
  return (
    <section className="grid lg:grid-cols-2 content-center items-center place-content-center">
      <div>
        <img src={complejo} alt="" className="rounded-lg" />
      </div>
      <div className="container p-7">
        <h2 className="text-arena-green-700 font-bold text-center text-3xl mb-4">
          {" "}
          Sobre nosotros
        </h2>
        <p className="text-black font-semibold text-center text-l">
          En un pequeño pueblo, un pequeño grupo de entusiastas creó un complejo
          deportivo llamado Futbol Arena para fomentar la actividad física y el
          espíritu deportivo. Construyeron un espacio único como punto de
          encuentro para competir, compartir momentos y forjar amistades. Cada
          ladrillo representaba un paso hacia su visión, con instalaciones de
          primer nivel, tanto en lo deportivo como en lo recreativo. En la
          inauguración, la emoción llenaba el aire, niños corrían, jóvenes
          practicaban deportes y adultos revivían pasiones en las mesas del bar.
          El complejo se convirtió en el corazón de la comunidad y del futbol,
          donde los sueños se hacen realidad y reina el espíritu deportivo.
        </p>
      </div>
    </section>
  );
};

export default AboutUsBanner;
