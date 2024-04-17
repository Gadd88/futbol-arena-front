

import { Card } from "flowbite-react";

export const ServiciosCards = ({title, description, image}) => { return (

  <>
  <Card className="max-w-sm h-[300px]  mx-auto relative hover:border-green-950 overflow-hidden" imgAlt="foto"> 
  <img src={image} alt="foto" className="absolute top-0 left-0 z-0 object-cover w-full h-full mx-auto rounded"/>
  <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white z-10">{title}</h5>
  <p className="font-normal text-white dark:text-gray-400 z-10 hover:text-black hover:font-bold hover:text-lg" >{description}</p>
  </Card>
  
  </>

)}
