import {AboutUsBanner, AboutUsCards} from "../../components/";
import { groupInfo } from "../../components/aboutusCards/aboutUsTexts";

export const Nosotros = () => {
  return (
    <main className="w-full mx-auto max-w-6xl rounded-xl overflow-hidden p-5 bg-arena-green-100">
      <section className="rounded-md" >
        <AboutUsBanner />
        <article className="my-10 bg-arena-green-200 p-5 rounded-md shadow-lg">
          <h2 className="font-bold text-center text-2xl my-5">Integrantes</h2>
          <article className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-4 m-5 md:m-10 ">
            {
              groupInfo.map((integrante, idx) => (
                <AboutUsCards key={idx} nombre={integrante.nombre} texto={integrante.texto}/>

              ))
            }
          </article>
        </article>
      </section>
    </main>
  );
};
