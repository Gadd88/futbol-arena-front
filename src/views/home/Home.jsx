import { Banner, Servicios, SectionShop, InfoFutbol } from "../../components/"

export const Home = () => {
  return (
    <div className="w-full mx-auto h-full lg:w-[1200px] bg-bg-200 rounded-xl overflow-hidden">
      <Banner/>
      <Servicios/>
      <SectionShop />
      <InfoFutbol />
    </div>
  )
}
