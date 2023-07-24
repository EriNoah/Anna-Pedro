import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/AnnaPedro.png";
import flores from "../assets/flores.webp";

function Navbar() {
  return (
    <div className="h-65 bg-[#dfd2c7] text-white flex flex-col justify-center items-center">
      <img className="h-50" src={flores} alt="flores" />
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
