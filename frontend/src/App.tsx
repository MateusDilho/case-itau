import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </Router>
  );
}
