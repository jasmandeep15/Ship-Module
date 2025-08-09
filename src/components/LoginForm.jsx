import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Welcome</h2>
      <p>Login with your credentials to continue</p>
      <input type="email" placeholder="E-MAIL ID" required />
      <input type="password" placeholder="PASSWORD" required />
      <button type="submit">LOG-iN</button>
    </form>
  );
}

export default LoginForm;
