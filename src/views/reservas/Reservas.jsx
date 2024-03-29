import React from 'react'
import DatePicker from '../../components/reservasDate/DatePicker'
import FieldComps from '../../components/fieldComps/FieldComps'
import TurnSelector from '../../components/timeSelector/TurnSelector'

export const Reservas = () => {
  return (
    <section className="  w-full mx-auto h-[100dvh] lg:w-[1200px] bg-arena-green-50 rounded-xl overflow-hidden items-center grid grid-cols-3 flex justify-center">
      <div className=' flex justify-center w-90'><DatePicker/></div>
      <div className='flex w-50 justify-center '><FieldComps/></div>
      <div className=' flex justify-center w-90'><TurnSelector/></div>


    </section>
  )
}
