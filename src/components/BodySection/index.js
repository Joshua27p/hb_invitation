// Card.tsx
import React from "react";
import styled from "styled-components";

// Definimos el componente de estilo utilizando styled-components
const BodySectionContainer = styled.div`
  background-image: url("./images/background_body.gif");
`;

// Definimos el componente funcional que acepta children
const BodySection = ({ children }) => {
  return <BodySectionContainer>{children}</BodySectionContainer>;
};

export default BodySection;
