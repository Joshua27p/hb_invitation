import React from "react";
import styled, { keyframes } from "styled-components";

// Define el componente Header con estilos
const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;
const Header = styled.header`
  height: 90px;
  background-image: url("./images/BACKGROUNDHEADER.gif");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white; /* Ajusta el color del texto según sea necesario */
`;
const MarqueeContainer = styled.div`
  position: absolute;
  top: 38px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const MarqueeText = styled.div`
  display: inline-block;
  animation: ${marquee} 10s linear infinite;
  font-size: 1.5rem; /* Ajusta el tamaño de fuente según lo necesites */
  color: white; /* Ajusta el color del texto según sea necesario */
  font-family: "Nerko One", cursive;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Agrega sombra al texto para mejor visibilidad */
  margin-right: 1.8rem;
`;

const AppHeader = () => {
  return (
    <Header>
      <MarqueeContainer>
        <MarqueeText> ESTÁS INVITADO A MI CUMPLEAÑOS</MarqueeText>
        <MarqueeText> ESTÁS INVITADO A MI CUMPLEAÑOS</MarqueeText>
        <MarqueeText> ESTÁS INVITADO A MI CUMPLEAÑOS</MarqueeText>
        <MarqueeText> ESTÁS INVITADO A MI CUMPLEAÑOS</MarqueeText>
      </MarqueeContainer>
    </Header>
  );
};

export default AppHeader;
