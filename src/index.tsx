import React from "react";
import ReactDOM from "react-dom/client";

// Define App component correctly
const App: React.FC = () => {
  return <h1>Meteorological Conditions Today App! ⛅</h1>;
};

// Ensure the root element exists
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
