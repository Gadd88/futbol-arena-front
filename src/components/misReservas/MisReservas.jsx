import React, { useState, useEffect } from 'react';
import { Card, Button } from "flowbite-react";
import axios from 'axios';

export const MisReservas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const usuarioId = 7;
    axios.get(`https://futbol-arena-back.onrender.com/users/${usuarioId}`)
      .then(response => {
        setReservas(response.data.reservas);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (reservas.length === 0) {
    return (
      <div className="text-center mt-4">
        <p className="text-gray-700">Aún no tienes reservas realizadas.</p>
      </div>
    );
  }

  return (
    <div className="px-4 mt-4 rounded-lg">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {reservas.map((reserva, index) => (
          <div key={index} className="mb-4">
            <Card className="max-w-sm border border-black">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Reserva #{reserva.cancha}
              </h5>
              <p className="font-normal text-gray-700">Fecha: {reserva.fecha}</p>
              <p className="font-normal text-gray-700">Horario: {reserva.horario}</p>
              <Button>Editar Reserva</Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};