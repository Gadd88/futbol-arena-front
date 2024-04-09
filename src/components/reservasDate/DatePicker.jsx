import { Datepicker } from "flowbite-react";
import { useCancha } from "../../hooks/useCancha";

const DatePicker = () => {

  const { handleDate } = useCancha()
  return (
    <section className="items-center">
      <h1 className="text-green-600">Selecciona la fecha</h1>
      <div>
        <Datepicker 
          id='date'
          showClearButton={false}
          onSelectedDateChanged={handleDate}
          inline />
      </div>
    </section>
  );
};

export default DatePicker;
