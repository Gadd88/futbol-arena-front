import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const registerUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:3001/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Error en el registro');
      }

      const data = await response.json();
      setUser(data.user);

      localStorage.setItem('user', JSON.stringify(data.user));

      console.log('Registro exitoso', data);
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;