import React from 'react';
import useRegisterForm from '../../hooks/useRegisterForm';
import banner from "../../assets/imagenBanner.jpg";

export const Registro = () => {
  const register = async (inputs) => {
    try {
      const response = await fetch('URL_DE_LA_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      if (!response.ok) {
        throw new Error('Error en el registro');
      }
      const data = await response.json();
      console.log('Registro exitoso', data);
      // Redirigir al usuario o mostrar mensaje de éxito
    } catch (error) {
      console.error('Error en el registro:', error);
      // Manejar el error mostrando un mensaje al usuario
    }
  };

  const { inputs, handleInputChange, handleSubmit, resetForm } = useRegisterForm(register);

  return (
    <div className="container mx-auto h-screen bg-green-200 p-6 flex justify-center items-center rounded-xl">
    <div className="flex flex-row gap-4 w-full max-w-4xl">
        {/* Columna del Formulario */}
        <div className="flex flex-col w-full md:w-1/2">
            <h1 className="text-xl font-bold mb-4 text-gray-900">Registro</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Inputs del formulario*/}
                <input
                    type="text"
                    name="fullName"
                    onChange={handleInputChange}
                    value={inputs.fullName}
                    placeholder="Full Name"
                    className="p-3 border border-gray-300 text-gray-700 rounded-xl"
                />
                <input
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    value={inputs.email}
                    placeholder="Email"
                    className="p-3 border border-gray-300 text-gray-700 rounded-xl"
                />
                <input
                    type="tel"
                    name="phone"
                    onChange={handleInputChange}
                    value={inputs.phone}
                    placeholder="Phone"
                    className="p-3 border border-gray-300 text-gray-700 rounded-xl"
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    value={inputs.password}
                    placeholder="Password"
                    className="p-3 border border-gray-300 text-gray-700 rounded-xl"
                />
                <input
                    type="password"
                    name="confirmPassword"
                    onChange={handleInputChange}
                    value={inputs.confirmPassword}
                    placeholder="Confirm Password"
                    className="p-3 border border-gray-300 text-gray-700 rounded-xl"
                />
                {/* Botones */}
                <div className="flex gap-4">
                    <button type="submit" className="bg-green-700 text-white p-3 flex-1">
                        Registrarse
                    </button>
                    <button type="button" onClick={resetForm} className="bg-green-900 text-white p-3 flex-1">
                        Borrar Formulario
                    </button>
                </div>
            </form>
        </div>
        {/* Columna del Banner */}
        <div className="hidden md:flex w-1/2 bg-cover bg-center rounded-xl overflow-hidden">
            <img 
              src={banner} 
              alt="banner futbol"
              className="w-full h-full object-cover" 
            />
        </div>
    </div>
</div>
  );
};

export default Registro;