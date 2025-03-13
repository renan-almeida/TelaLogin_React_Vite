import "./App.css";
import Login from "./Components/Login/Login";
import Registrar from "./Components/Login/Registrar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//BrowserRouter (ou Router) fornece o contexto de roteamento para toda a aplicação.
//Routes organiza e controla as rotas.
//Route define rotas individuais e associa componentes a URLs.

//instalar npm install react-router-dom

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registrar" element={<Registrar />} />
    </Routes>
  </Router>

  );
}

export default App;
