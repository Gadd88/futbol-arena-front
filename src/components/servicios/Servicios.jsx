import React from 'react'
import { ServiciosCards } from '../serviciosCards/ServiciosCards.jsx'
import fotoPelota  from '../../assets/fotoPelota.png'
import fotoCarrito from '../../assets/carrito.png'
import fotoReserva from '../../assets/fotoReserva.png'
import fotoBar from '../../assets/fotoBar.png'

export const Servicios = () => {
  return (

    <>   

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 p-2 bg-black text-sm overflow-hidden mx-auto max-w-screen-xl mb-8 ">
      <ServiciosCards title="LA TIENDA" description="Encontra lo que estas buscando!" image={fotoCarrito}/>
      <ServiciosCards title="TORNEOS Y COMPETENCIAS" description="Participa en emocionantes torneos y competencias en nuestras canchas de fútbol. Demostra tu talento y competi por grandes premios. ¡No te lo pierdas!" image={fotoPelota} />
      <ServiciosCards title="RESERVA AHORA!" description="¿Cuando y Donde? Ingresa el tipo de cancha, la fecha, la hora y descubri todas las opciones que tenemos para vos." image={fotoReserva} />
      <ServiciosCards title="BAR" description="Visita nuestro bar y disfruta de un espacio animado para relajarte y disfrutar de nuestras ofertas gastronomicas. ¡El lugar perfecto para compartir momentos inolvidables con amigos!" image={fotoBar} />
    
    </div>
    
    </>
  )
}

     
  