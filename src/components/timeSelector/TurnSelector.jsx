import { useCancha } from "../../hooks";

export const TurnSelector = ({handleTime}) => {

  const {horarios, data} = useCancha()

  return (
    <section className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6">
      <h2 className="text-arena-green-700 font-bold mb-4">Horarios Disponibles</h2>
      <article className="flex md:flex-wrap items-center justify-start md:justify-center w-full gap-1 overflow-auto">
        {
          data?.cancha_id != '' && horarios.length > 0
          ?
            horarios.map(horario => (
              <div 
                key={horario.turnoId}
                id={horario.turnoId}
                onClick={() => handleTime(horario)}
                className="bg-white min-w-32 md:min-w-20 md:w-20 h-20 flex items-center justify-center border border-gray-200 rounded-sm shadow cursor-pointer relative overflow-hidden hover:bg-arena-green-200">
                <p className="mb-1 font-semibold text-gray-700">
                  {horario.hora}
                </p>
                {
                  !horario.disponible &&
                <div className="absolute -rotate-[30deg] bg-arena-green-300/80 backdrop-blur-sm p-2 bottom-5 w-40 md:w-28 flex justify-center items-center">Reservado</div>
                }
              </div>
          ))
          : <p className="font-bold text-arena-green-600">Debe seleccionar una cancha para ver la lista de turnos</p>
        }
      </article>
    </section>
  );
};
