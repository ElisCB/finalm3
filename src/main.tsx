import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./providers/CartContext/CartContext";
import UserProvider from "./providers/UserContext";
import VaccinesProvider from "./providers/VaccinesContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <VaccinesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </VaccinesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
