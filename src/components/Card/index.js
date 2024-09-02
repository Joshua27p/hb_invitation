// Card.tsx
import React from "react";
import styled from "styled-components";

// Definimos el componente de estilo utilizando styled-components
const StyledCard = styled.div`
  padding: 20px;
  margin: 10px;
  width: 45%;
  max-width: 33%;
  transition: box-shadow 0.3s ease;
  border: 6px solid #9fff36;

  @media (max-width: 768px) {
    width: 85%;
    max-width: 100%;
  }
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

// Definimos el componente funcional que acepta children
const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
