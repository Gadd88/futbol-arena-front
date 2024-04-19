import { useCancha } from "../../hooks";

export const ReservationResume = ({reservation}) => {
  const {sendReservation, cancelReservation, listaCanchas} = useCancha()
  
  const cancha = listaCanchas.find(cancha => cancha.cancha_id === reservation.reservation_field_id) 
  
  return (
    <article className="bg-arena-green-50 rounded-md shadow-md flex flex-col items-start justify-center text-arena-green-900 overflow-hidden absolute p-5">
      <h3 className="font-bold text-arena-green-950 mx-auto text-center ">
        Tu reserva
      </h3>
      <p>
        Fecha:{" "}
        <span className="font-semibold">{reservation.reservation_date}</span>
      </p>
      <p>
        Hora:{" "}
        <span className="font-semibold">
          {reservation.reservation_time?.hora}
        </span>
      </p>
      <p>
        Cancha:{" "}
        <span className="font-semibold">
          {cancha.cancha_nombre}
        </span>
      </p>
      <div className="w-full h-full mt-5">
        <button className="rounded-none w-1/2 px-5 py-3 inline-flex items-center justify-center font-semibold  bg-arena-green-300 hover:bg-arena-green-200" onClick={()=>sendReservation(reservation)}>
          Confirmar
        </button>
        <button
          className="rounded-none w-1/2 px-5 py-3 inline-flex items-center justify-center font-semibold text-white bg-black hover:bg-red-300 hover:text-black"
          onClick={cancelReservation}
        >
          Cancelar
        </button>
      </div>
    </article>
  );
};
