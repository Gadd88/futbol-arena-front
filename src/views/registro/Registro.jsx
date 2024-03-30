import React from 'react';
import useRegisterForm from '../../hooks/useRegisterForm';
export const Registro = () => {
  const register = () => {
    //lógica para enviar los datos al backend
    console.log('User registered:', inputs);
  };

  const { inputs, handleInputChange, handleSubmit } = useRegisterForm(register);

  return (
    <div className="w-full mx-auto h-[100dvh] lg:w-[1200px] bg-arena-green-50 rounded-xl overflow-hidden">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <input
          type="text"
          name="fullName"
          onChange={handleInputChange}
          value={inputs.fullName}
          placeholder="Nombre completo"
          className="p-2 border border-gray-300 text-gray-700"
        />
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={inputs.email}
          placeholder="Email"
          className="p-2 border border-gray-300 text-gray-700"
        />
        <input
          type="tel"
          name="phone"
          onChange={handleInputChange}
          value={inputs.phone}
          placeholder="Teléfono"
          className="p-2 border border-gray-300 text-gray-700"
        />
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          value={inputs.password}
          placeholder="Password"
          className="p-2 border border-gray-300 text-gray-700"
        />
        <input
          type="password"
          name="confirmPassword"
          onChange={handleInputChange}
          value={inputs.confirmPassword}
          placeholder="Re ingreso Password"
          className="p-2 border border-gray-300 text-gray-700"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Registro
        </button>
      </form>
    </div>
  );
};

export default Registro;