import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-28 bg-[#dfd2c7] text-white flex gap-6 justify-center items-center">
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
  );
}

export default Navbar;
