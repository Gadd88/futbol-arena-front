import { Datepicker } from "flowbite-react";


const DatePicker = () => {
  
  return (
    <section className="items-center">
    <h1 className="text-green-600">Selecciona la fecha</h1>
    <div><Datepicker inline /></div>
   
    </section>
  );
};

export default DatePicker;
