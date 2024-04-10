import React from 'react';
import { Button, Card } from "flowbite-react";

export const MisReservas = () => {
  return (
    <div className="px-4 mt-4 rounded-lg" >
      <Card className="max-w-sm border border-black">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          Tu reserva:
        </h5>
        <p className="font-normal text-gray-700">
          Aquí voy a agregar una lista con la información de la reserva
        </p>
        <Button>
          Read more
          <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Card>
    </div>
  );
};