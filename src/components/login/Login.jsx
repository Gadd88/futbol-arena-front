import { useState } from 'react';

import Swal from "sweetalert2";

export const Login = () => {

  const [email, setEmail]= useState ("");
  const [password, setPassword]= useState ("");

  const handleSubmit = (e) => {
    e.preventdefault();
    try {
      const user = usuarios.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        Swal.fire({
          title: "Bienvenido",
          text: "Inicio de sesión exitoso",
          icon: "success",
          confirmButtonText: "Aceptar",
          timer: 1500,
        });
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
        handleClose();
      } else {
        Swal.fire({
          title: "Error",
          text: "Usuario o contraseña incorrectos",
          icon: "error",
          confirmButtonText: "Aceptar",
          timer: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }



  return (
   <>
   
   <div onSubmit={handleSubmit}>
      <div className="mb-3" controlId="exampleForm.ControlInput1">
        <h1>Email</h1>
        <div
         type="email"
         name="email"
         value={email}
         onChange={(e)=>setEmail (e.target.value)}
         placeholder="Email"
         />
      </div>
      <div className="mb-3" controlId="exampleForm.ControlTextarea1">
        <h1>Password</h1>
        <div 
        type="password"
        name="password"
        value={password}
        onChange={(e)=>setPassword (e.target.value)}
        placeholder="Password"/>
        
        <button type="Submit">Iniciar Sesion</button>
        
         
      </div>
    </div>

   
   </>
  )
}
