import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OCasamento from "./Pages/OCasamiento";
import Historia from "./Pages/Historia";
import Home from "./Pages/Home";
import ListaDePresentes from "./Pages/ListaDePresentes";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-casamento" element={<OCasamento />} />
        <Route path="/a-nossa-historia" element={<Historia />} />
        <Route path="/lista-de-presentes" element={<ListaDePresentes />} />
      </Routes>
    </Router>
  );
}

export default App;
