import { Banner, Servicios, SectionShop, InfoFutbol, Banner2, Banner3 } from "../../components/"

export const Home = () => {
  return (
    <div className="w-full mx-auto h-full max-w-6xl bg-arena-green-50 rounded-xl overflow-hidden p-5 space-y-5">
      <Banner/>
      <Banner2 />
      <Banner3 />
      <Servicios/>
      <SectionShop />
      <InfoFutbol />
    </div>
  )
}
