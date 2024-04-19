import {AboutUsBanner, AboutUsCards} from "../../components/";
import { groupInfo } from "../../components/aboutusCards/aboutUsTexts";

export const Nosotros = () => {
  return (
    <main className="w-full mx-auto xl:w-[1200px] rounded-xl overflow-hidden p-5 bg-bg-100">
      <section className="bg-bg-300 rounded-md p-5" >
        <AboutUsBanner />
        <article className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-4 m-10 ">
          {
            groupInfo.map((integrante, idx) => (
              <AboutUsCards key={idx} nombre={integrante.nombre} texto={integrante.texto}/>

            ))
          }
        </article>
      </section>
    </main>
  );
};
