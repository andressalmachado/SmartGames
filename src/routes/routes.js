import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes" element={<Detalhes />} />
      </Routes>
    </Router>
  );
};
export default Rotas;
