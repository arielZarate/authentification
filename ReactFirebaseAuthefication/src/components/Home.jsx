import { signOut } from "firebase/auth";
import React from "react";

import { Link } from "react-router-dom";
import { auth } from "../credentials";

function Home() {
  return (
    <div>
      <h1>estoy en el Home</h1>
      <button className="btn btn-secondary" onClick={() => signOut(auth)}>
        cerrar sesion
      </button>
      <br />
      <ul>
        <li>producto 1</li>
        <li>producto 2</li>
        <li>producto 3</li>
        <li>producto 4</li>
      </ul>

      <p>
        yo aca simulo que tengo una card llena de articulos y que voy al carrito
        , entonces si va al carrito a comprar debe estar logueado
      </p>

      <p>
        no hace falta que este logueado para estar en el home y poder ver los
        articulos
      </p>
      <Link to="/cart">
        <button type="button" class="btn btn-primary">
          Ir a carrito
        </button>
      </Link>
    </div>
  );
}

export default Home;
