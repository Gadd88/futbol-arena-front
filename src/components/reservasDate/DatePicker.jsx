import { Datepicker } from "flowbite-react";
export const DatePicker = ({handleDate}) => {

  return (
    <section className="w-full max-w-sm p-4 bg-bg-300 rounded-lg shadow sm:p-6">
      <h2 className="text-text-200 font-bold text-center">Selecciona una fecha</h2>
        <Datepicker 
          id='date'
          className="flex justify-center items-center"
          language="es-AR"
          labelTodayButton="Hoy"
          minDate={new Date(Date.now())}
          showClearButton={false}
          onSelectedDateChanged={handleDate}
          inline />
    </section>
  );
};
