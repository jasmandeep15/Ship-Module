import React from "react";
import LoginForm from "../components/LoginForm";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <h1 className="slogan">
        “SAFETY SHOULD NEVER BE A PRIORITY. IT SHOULD BE A PRECONDITION.”
      </h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
