import React from 'react';
import useRegisterForm from '../../hooks/useRegisterForm';

export const Register = () => {
  const register = () => {
    // logica para el banckend
    console.log('User registered:', inputs);
  };

  const { inputs, handleInputChange, handleSubmit } = useRegisterForm(register);

  return (
    <div className="w-full mx-auto h-[100vh] bg-green-200 lg:w-[1200px] bg-arena-green-50 rounded-xl overflow-hidden">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <input
          type="text"
          name="fullName"
          onChange={handleInputChange}
          value={inputs.fullName}
          placeholder="Full Name"
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
          placeholder="Phone"
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
          placeholder="Confirm Password"
          className="p-2 border border-gray-300 text-gray-700"
        />
        <button type="submit" className="bg-green-700 text-white p-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;