import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../Pages/Cadastro";
export function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    );
  }