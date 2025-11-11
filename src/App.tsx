import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";
import ResetSenha from "./pages/ResetSenha";
import NovaSenha from "./pages/NovaSenha";

type PrivateRouteProps = {
  children: React.ReactElement;
};

function PrivateRoute({ children }: PrivateRouteProps) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-senha" element={<ResetSenha />} />
        <Route path="/nova-senha" element={<NovaSenha />} />
        <Route
          path="/produtos"
          element={
            <PrivateRoute>
              <Produtos />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
