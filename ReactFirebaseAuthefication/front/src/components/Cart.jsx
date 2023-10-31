import React from "react";
import { signOut, getAuth } from "firebase/auth";

import { useSelector } from "react-redux";
import Firebase from "../credentials";

export default function Cart({ correoUsuario }) {
  const auth = getAuth(Firebase);
  const data = correoUsuario;

  const selector = useSelector((state) => state.auth);

  // console.log("cart selector", selector);
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

      <p>Logueado: {selector.isLogged === true ? "yes" : "NOT"}</p>

      <button className="btn btn-secondary" onClick={() => signOut(auth)}>
        cerrar sesion
      </button>
    </div>
  );
}
