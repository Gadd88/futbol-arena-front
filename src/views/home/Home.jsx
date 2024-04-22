import { Banner, Servicios, SectionShop, InfoFutbol } from "../../components/"

export const Home = () => {
  return (
    <div className="w-full mx-auto h-full max-w-6xl bg-arena-green-50 rounded-xl overflow-hidden">
      <Banner/>
      <Servicios/>
      <SectionShop />
      <InfoFutbol />
    </div>
  )
}
