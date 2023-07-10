import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-60 bg-[#dfd2c7] text-white flex flex-col gap-6 justify-center items-center">
      <img className="h-40" src="/images/AnnaPedro.png" alt="annaPedro" />
      <div className="flex gap-14">
        <Link className="text-3xl" to="/a-nossa-historia">
          A Nossa Historia
        </Link>
        <Link className="text-3xl" to="/">
          O Casamiento
        </Link>
        <Link className="text-3xl" to="/lista-de-presentes">
          Lista de Presentes
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
