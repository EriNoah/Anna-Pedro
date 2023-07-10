import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-60 bg-[#dfd2c7] text-white flex flex-col gap-6 justify-center items-center">
      <img className="h-32" src="/images/AnnaPedro.png" alt="annaPedro" />
      <div className="flex gap-6">
        <Link className="text-2xl" to="/a-nossa-historia">
          A Nossa Historia
        </Link>
        <Link className="text-2xl" to="/">
          O Casamiento
        </Link>
        <Link className="text-2xl" to="/lista-de-presentes">
          Lista de Presentes
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
