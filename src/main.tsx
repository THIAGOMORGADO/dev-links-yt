import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeContextProvider } from "./context/ThemeContext.tsx";
import Details from "./page/Details/index.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    {/* <App /> */}
    <Details />
  </ThemeContextProvider>
);
