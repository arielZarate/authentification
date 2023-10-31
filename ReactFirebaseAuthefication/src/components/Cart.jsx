import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../credentials";
import { useSelector } from "react-redux";

export default function Cart({ correoUsuario }) {
  const data = correoUsuario;

  const selector = useSelector((state) => state.auth);

  console.log("cart selector", selector);
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
