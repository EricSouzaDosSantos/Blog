import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginUsuario from "../Pages/Login";
import CadastrarUsuario from "../Pages/Cadastro";
export function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginUsuario />} />
          <Route path="/Cadastro" element={<CadastrarUsuario />} />
          <Route path="../../public" Component={<blog />} />

        </Routes>
      </BrowserRouter>
    );
  }