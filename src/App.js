import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Historia from "./components/Pages/Historia";
import Home from "./components/Pages/Home";
import ListaDePresentes from "./components/Pages/ListaDePresentes";
import OCasamento from "./components/Pages/OCasamiento";
// import Footer from "./components/Footer";

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
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
