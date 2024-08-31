import React from "react";
import ReactDOM from "react-dom";
import "./styles.css"; // Asegúrate de que este archivo exista o comenta esta línea si no tienes un archivo CSS

const App = () => (
  <div>
    <h1>Hello, React!</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
