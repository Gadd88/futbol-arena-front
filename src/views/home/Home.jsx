import { SectionShop } from "../../components/"
import InfoFutbol from "../../components/info/InfoFutbol"

export const Home = () => {
  return (
    <div className="w-full mx-auto h-full xl:w-[1200px] bg-arena-green-50 rounded-xl overflow-hidden">
      <InfoFutbol/>
      <SectionShop/>
    </div>
  )
}
