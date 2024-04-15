import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const useRegisterForm = () => {
  const navigate = useNavigate()
  const initialState = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };
  const {registrarUsuario} = useContext(UserContext)

  const [inputs, setInputs] = useState(initialState);

  const handleSubmit = async(event) => {
    event.preventDefault();

    const { fullName, email, phone, password, confirmPassword } = inputs;

    if (!fullName || !email || !password || !confirmPassword ||!phone) {
      alert('Por favor, complete todos los campos');
      return;
    }
    if (inputs.fullName.length < 4) {
      alert('El nombre completo debe tener al menos 5 caracteres.');
      return;
    }
    if (inputs.password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }
    if (inputs.password !== inputs.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const newUser = {
      nombre: fullName,
      email: email,
      password: password,
      telefono: phone
    }
    try{
      toast.promise(registrarUsuario(newUser),
      {
        loading: 'Ingresando 🕐...',
        success: 'A Jugar!! ⚽',
        error: 'Falta Juez!! ❌ - Ocurrió un error, intenta de nuevo.'
      })
        navigate('/')
    }catch(error){
      toast.error('Falta Juez! Ocurrió un error, intenta de nuevo')
    }

  };

  const handleInputChange = (event) => {
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setInputs(initialState);
  };

  return { handleSubmit, handleInputChange, resetForm, inputs };
};
