import React from "react";
import ReactDOM from "react-dom/client"; // Asegúrate de importar desde 'react-dom/client'
import App from "./app";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza la aplicación en el contenedor
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
