import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Utilisation de createRoot pour React 18
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root"); // Sélectionnez l'élément root
const root = createRoot(container); // Initialisez React avec createRoot

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);

