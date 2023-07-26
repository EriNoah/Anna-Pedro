import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/AnnaPedro.png";
import flores from "../assets/flores.webp";

function Navbar() {
  return (
    <div className="h-65 bg-[#dfd2c7] text-white flex flex-col justify-center items-center">
      <img className="h-80" src={flores} alt="flores" />
      <a href="/">
        <img className="h-44" src={logo} alt="annaPedro" />
      </a>
      <h1 className="py-5 text-4xl font-bold text-[#52040E]">
        Outubro 21, 2023 | Esporte fino
      </h1>
      <div className="flex gap-14">
        <Link className="text-2xl text-[#52040E]" to="/a-nossa-historia">
          A Nossa Historia
        </Link>
        <Link className="text-2xl text-[#52040E]" to="/o-casamento">
          O Casamento
        </Link>
        <Link className="text-2xl text-[#52040E]" to="/lista-de-presentes">
          Lista de Presentes
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
