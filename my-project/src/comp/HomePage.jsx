import React, { useEffect, useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const storeEmail = localStorage.getItem("email");
    const storePhone = localStorage.getItem("PhoneNo");

    if (storeEmail && storePhone) {
      setIsLoggedin(true);
      setEmail(storeEmail);
      setPhone(storePhone);
    } else if (!storeEmail && !storePhone) {
      setIsLoggedin(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    setIsLoggedin(false);
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Link to={"/login"}>
          <button onClick={handleLogout}>Logout</button>
        </Link>
      ) : (
        <Link to={"/login"}>Login first Please</Link>
      )}
    </div>
  );
};

export default HomePage;
