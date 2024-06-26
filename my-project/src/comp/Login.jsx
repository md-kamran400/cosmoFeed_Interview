import React, { useState } from "react";
import{useNavigate} from "react-router-dom"
const Login = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate()

  const handlechangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    navigate("/")
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handlechangeEmail}
        />
        <input
          type="number"
          placeholder="PhoneNo."
          value={phone}
          onChange={handleChangePhone}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
