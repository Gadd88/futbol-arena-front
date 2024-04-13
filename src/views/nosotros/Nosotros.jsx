import AboutUsBanner from "../../components/aboutusBanner/AboutUsBanner";
import AboutUsCards from "../../components/aboutusCards/AboutUsCards";

export const Nosotros = () => {
  return (
    <div className="w-full mx-auto h-[100dvh] xl:w-[1200px] bg-arena-green-50 rounded-xl overflow-hidden">
      <AboutUsBanner />
      <AboutUsCards />
    </div>
  );
};
