import { useState } from 'react';
import {Form, Modal} from 'react-bootstrap/Form';

export const Login = () => {

  const [email, setEmail]= useState ("");
  const [password, setPassword]= useState ("");

  const handleSubmit = (e) => {
    e.preventdefault();
    console.log(email + ""+ password)
  }



  return (
   <>
   <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control 
         type="email"
         name="email"
         value={email}
         onChange={(e)=>setEmail (e.target.value)}
         placeholder="Email"
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control 
        
        type="password"
        name="password"
        value={password}
        onChange={(e)=>setPassword (e.target.value)}
        placeholder="Password"/>
        
        <Button>Iniciar Sesion</Button>
        
         
      </Form.Group>
    </Form>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
   </>
  )
}
