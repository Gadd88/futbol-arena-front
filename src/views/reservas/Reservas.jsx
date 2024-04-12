import {DatePicker, FieldComps, TurnSelector} from '../../components/'

export const Reservas = () => {
  return (
    <section className="w-full mx-auto h-full bg-arena-green-50 rounded-xl p-5 flex flex-wrap gap-5 lg:p-10 lg:grid lg:grid-cols-3 lg:place-content-center justify-center items-stretch">
        <DatePicker/>
        <FieldComps/>
        <TurnSelector/>
    </section>
  )
}
