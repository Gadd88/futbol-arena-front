import { useState } from 'react';

const useRegisterForm = (callback) => {
  const [inputs, setInputs] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (inputs.password === inputs.confirmPassword) {
      console.log(inputs);
    } else {
      alert('Las contraseñas no coinciden');
    }
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useRegisterForm;