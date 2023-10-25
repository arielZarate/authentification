import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../credentials";
export default function Cart({ correoUsuario }) {
  const data = correoUsuario;

  // console.log(data);
  return (
    <div>
      <h1>Carrito de Checkout de compras </h1>

      <p>su usuario es {data.email}</p>

      <h4>Datos del localStorage</h4>

      {localStorage.setItem("TokenFirebase", data.accessToken)}

      <p>su token recuperado: {localStorage.getItem("TokenFirebase")}</p>
      <p>
        su email esta verificado:{" "}
        {data.emailVerified === false ? "False" : "True"}
      </p>

      <p>Uid: {data.uid}</p>

      <button className="btn btn-secondary" onClick={() => signOut(auth)}>
        cerrar sesion
      </button>
    </div>
  );
}
