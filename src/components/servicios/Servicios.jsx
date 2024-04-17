import React from 'react'
import { ServiciosCards } from '../serviciosCards/ServiciosCards.jsx'
import fotoPelota  from '../../assets/fotoPelota.png'
import fotoTienda from '../../assets/fotoTienda.png'
import fotoReserva from '../../assets/fotoReserva.png'
import fotoBar from '../../assets/fotoBar.png'

export const Servicios = () => {
  return (

    <>   

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-2 p-2 justify-center text-sm h-full w-full">
      <ServiciosCards title="LA TIENDA" description="Encontra lo que estas buscando!" image={fotoReserva}/>
      <ServiciosCards title="TORNEOS Y COMPETENCIAS" description="Participa en emocionantes torneos y competencias en nuestras canchas de fútbol. Demostra tu talento y competi por grandes premios. ¡No te lo pierdas!" image={fotoPelota} />
      <ServiciosCards title="RESERVA AHORA!" description="Ingresa el tipo de cancha, la fecha, la hora y descubri todas las opciones que tenemos para vos." image={fotoTienda} />
      <ServiciosCards title="BAR" description="Visita nuestro bar y disfruta de nuestras ofertas gastronomicas. ¡El lugar perfecto para compartir momentos inolvidables con amigos!" image={fotoBar} />
    
    </div>
   

    </>
  )
}

     
  