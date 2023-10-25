import { useState } from "react";

import "./App.css";

//react-router-dom
import { Routes, Route, Navigate } from "react-router-dom";

//LOGIN FIREBASE
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./credentials";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import Cart from "./components/Cart";
import LoginForm from "./components/Login/Loginform";
import Register from "./components/Register";
//=================================

function App() {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else setUsuario(null);
  });

  /*   const PrivateRoute = ({ element }) => {
    return usuario ? element : <Navigate to="/login" />;
  }; */

  const estaAutenticado = usuario !== null;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* estaAutenticado ? <Home /> : */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route
          path="/cart"
          element={
            estaAutenticado ? (
              <Cart correoUsuario={usuario} />
            ) : (
              /*  <Navigate to="/login" /> */
              <Login />
            )
          }
        />
        {/*  <Route path="/cart" element={<PrivateRoute element={<Cart />} />} /> */}
      </Routes>
    </>
  );
}

export default App;
