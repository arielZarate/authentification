import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login (no esta logueado para ir al Cart )</h1>

      <Link to="/">
        <button className="btn btn-primary" type="button">
          ir a home
        </button>
      </Link>
      <Link to="/loginForm">
        <button className="btn btn-warning" type="button">
          ir a login de Google
        </button>
      </Link>
    </div>
  );
}

export default Login;
