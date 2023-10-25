import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../credentials";
function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validación del email
      if (!email.includes("@")) {
        alert("email invalido ");
      }

      // Validación de la contraseña
      if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
      }

      await signInWithEmailAndPassword(auth, email, password);
      alert("ha ingresado correctamente ");
      setLoggedIn(true);
    } catch (error) {
      alert("Error de credenciales ");
    }
  };

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          {/*   <label htmlFor="email">Correo Electrónico:</label> */}
          <input
            type="email"
            id="email"
            placeholder="ingresa email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
        </div>
        <div className="mb-3">
          {/*  <label htmlFor="password">Contraseña:</label> */}
          <input
            type="password"
            id="password"
            placeholder="ingresa password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
        </div>
        <Link to="/register" className="d-grid   my-2">
          <button type="submit" className="btn btn-warning">
            Registrarse
          </button>
        </Link>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default Loginform;
