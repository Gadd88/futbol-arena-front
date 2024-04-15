

import { Card } from "flowbite-react";

export const ServiciosCards = ({title, description, image}) => { return (

  <>
  <Card className="max-w-sm mb-4" imgAlt="foto"> 
  <img src={image} alt="" className="object-cover w-full h-full mx-auto"/>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
  <p className="font-normal text-gray-700 dark:text-gray-400" >{description}</p>
  </Card>
  
  </>

)}
