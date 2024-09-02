// Modal.js
import React from "react";
import styled from "styled-components";

// Estilos para el fondo del modal (overlay)
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Asegura que el modal esté en el frente */
`;

// Estilos para el contenido del modal
const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  max-width: 80%;
  position: relative;
`;

// Estilos para el botón de cerrar
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // No renderiza nada si el modal no está abierto

  return (
    <Overlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
