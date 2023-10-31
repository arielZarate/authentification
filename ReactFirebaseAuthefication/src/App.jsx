import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { setUser, logoutUser } from "./Redux/actions/action"; // Importa las acciones de Redux
function App() {
  ///const [usuario, setUsuario] = useState(null); lo paso al reducers

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.auth.user);

  console.log("selector", selector);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(logoutUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  /*  

no lo uso mas lo usare con redux en el reducer
onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else setUsuario(null);
  });
 */

  /*   const PrivateRoute = ({ element }) => {
    return usuario ? element : <Navigate to="/login" />;
  }; */

  const estaAutenticado = selector !== null;
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
              <Cart correoUsuario={selector} />
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
