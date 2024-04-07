import { useState } from 'react';

const useRegisterForm = (callback) => {

  const initialState = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  const [inputs, setInputs] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Validación de la longitud de fullName
    if (inputs.fullName.length < 5) {
      alert('El nombre completo debe tener al menos 5 caracteres.');
      return; // Detiene la ejecución de la función si no se cumple la validación
    }
  
    // Validación de la longitud mínima de password
    if (inputs.password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return; // Detiene la ejecución de la función si no se cumple la validación
    }
  
    // Validación de coincidencia de contraseñas
    if (inputs.password !== inputs.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    // Si todas las validaciones son exitosas, procede con el callback
    callback(inputs);
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };

  const resetForm = () => {
    setInputs(initialState);
  };

  return {
    handleSubmit,
    handleInputChange,
    resetForm,
    inputs,
  };
};

export default useRegisterForm;