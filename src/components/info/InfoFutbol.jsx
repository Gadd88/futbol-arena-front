import React from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from '../map/Map';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'

const InfoFutbol = () => {
  return (
    <section className="w-full mx-auto h-full bg-arena-green-50 rounded-xl p-5 flex flex-wrap gap-5 lg:p-10 ">
        <h3 className="text-arena-green-700 font-bold text-center">Donde estamos:</h3>
        <article className='lg:grid lg:grid-cols-3 lg:place-content-center justify-center items-stretch'>
            <div><Map/></div>
            <div></div>
            <div></div>
        </article>


    </section>
  )
}

export default InfoFutbol