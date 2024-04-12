import React from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./map.css"
import L from 'leaflet';
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-icon.png"

const iconUbication = new L.icon({
    iconUrl : icon,
    iconShadow: iconShadow,
    iconSize:[20,40],
    iconAnchor: [22,94],
    shadowAnchor: [22,94],
    popupAnchor:[-3,-76]
})


const Map = () => {
  return (
    <div >
        <MapContainer center={[-26.8355457, -65.2098187]} zoom={15} scrollWheelZoom={false} className='mapa'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[-26.8355457, -65.2098187]} icon={iconUbication}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer></div>
  )
}

export default Map