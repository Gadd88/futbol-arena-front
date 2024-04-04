import React from "react";
import { createPortal } from "react-dom";
import {Modal} from "react-bootstrap"

const modalElement = document.getElementById("modalLogin");

export const Portal = ({show}) => {
  return (
    <>
      {
      show && createPortal(
        <Modal>
          <Modal.Header closeButton>
            <Modal.Title> BIENVENIDO!!!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Login />
          </Modal.Body>
        </Modal>,

        modalElement
      )}
    </>
  );
};

