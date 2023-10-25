import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../credentials";

import { Navigate } from "react-router-dom";

function Register() {
  const [input, setInput] = useState({
    /*   name: "",
    lastName: "", */
    email: "",
    password: "",
  });

  const [registered, setRegistered] = useState(false);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    try {
      await createUserWithEmailAndPassword(auth, input.email, input.password);
      alert("Usuario registrado exitosamente");
      setRegistered(true); // Cambiar el estado a "registrado"
    } catch (error) {
      alert("Error al registrar el usuario", error);
      console.error(error);
    }
  }

  if (registered) {
    return <Navigate to="/loginForm" />;
  }

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        {/*  <div className="mb-3">
        <label>First name</label> 
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="First name"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
           <label>Last name</label> 
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Last name"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div> */}
        <div className="mb-3">
          {/* <label>Email address</label> */}
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          {/*  <label>Password</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Regitrar
          </button>
        </div>
        {/*  <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p> */}
      </form>
    </div>
  );
}
export default Register;
