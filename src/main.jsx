import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contextapi/Authcontext.jsx";
import { CartProvider } from "./contextapi/Cartcontext.jsx";
import { FilterProvider } from "./contextapi/FilterContext.jsx";
import { ProductsProvider } from "./contextapi/ProductsContext.jsx";

createRoot(document.getElementById("root")).render(
  <FilterProvider>
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>
          <BrowserRouter>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </ProductsProvider>
      </CartProvider>
    </AuthProvider>
  </FilterProvider>
);
