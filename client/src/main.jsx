import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./contexts/auth.jsx";
import { GlobalProvider } from "./contexts/context.global.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </AuthProvider>
);
