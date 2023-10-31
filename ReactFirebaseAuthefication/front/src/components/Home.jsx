import { signOut, getAuth } from "firebase/auth";
import React from "react";

import { Link } from "react-router-dom";

import Firebase from "../credentials";

function Home() {
  const auth = getAuth(Firebase);

  const enviarPeticion = async () => {
    // En algún lugar donde tengas acceso al usuario autenticado
    const user = auth.currentUser;

    //console.log("token", await user.getIdToken());

    if (user) {
      //user.getIdToken().then((idToken) => {
      // Enviar 'idToken' al backend

      //el true fuerza aa refrescarlo
      const idToken = await user.getIdToken();

      console.log("token front\n", idToken);

      fetch("http://localhost:5000/rutaProtegida/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.error("Error:", error));
      //} );*/
    }
  };

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
        <button type="button" className="btn btn-primary">
          Ir a carrito
        </button>
      </Link>

      <button
        type="button"
        className="btn btn-info"
        onClick={() => {
          enviarPeticion();
        }}
      >
        HACER GET AL BACK 🚀
      </button>

      <button
        type="button"
        className="btn btn-info"
        onClick={() => {
          localStorage.setItem("TokenFirebase", null);
        }}
      >
        setear token 🚀
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => {
          fetch("http://localhost:5000/saludo", {
            method: "GET",
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => console.error("Error:", error));
        }}
      >
        SALUDAR 🚀
      </button>
    </div>
  );
}

export default Home;
