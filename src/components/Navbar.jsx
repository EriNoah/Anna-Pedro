import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/AnnaPedro.png"

function Navbar() {
  return (
    <div className="h-60 bg-[#dfd2c7] text-white flex flex-col gap-6 justify-center items-center">
      <a href="/">
        <img className="h-40" src={logo} alt="annaPedro" />
      </a>
      <div className="flex gap-14">
        <Link className="text-3xl" to="/a-nossa-historia">
          A Nossa Historia
        </Link>
        <Link className="text-3xl" to="/o-casamento">
          O Casamento
        </Link>
        <Link className="text-3xl" to="/lista-de-presentes">
          Lista de Presentes
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
