import { useState } from "react";
import "./Registration.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const storeData = JSON.parse(localStorage.getItem("registerForm")) || [];

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [inputSelect, setInputSelect] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    const existingUser = storeData.find((user) => user.email === email);
    if (existingUser) {
      return toast.error("Email already exists");
    }

    if (password !== confirmpassword) return toast.error("Password not match");

    const data = {
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
      role: inputSelect,
    };

    localStorage.setItem("registerForm", JSON.stringify([...storeData, data]));
    toast.success("Form submitted sucessfully!");
    navigate("/");
  }

  return (
    <>
      <div className="register-container">
        <div className="register-div">
          <h1 className="register-header">Signup Form</h1>
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Firstname"
              value={firstname}
              required
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Lastname"
              value={lastname}
              required
              onChange={(e) => setLastname(e.target.value)}
            />
            <select
              className="main-select"
              required
              value={inputSelect}
              onChange={(e) => setInputSelect(e.target.value)}
            >
              <option
                style={{ backgroundColor: "grey", color: "white" }}
                disabled
                value=""
              >
                Select Role
              </option>

              <option value="admin">Admin</option>
              <option value="client">Client</option>
              <option value="user">User</option>
            </select>

            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmpassword}
              required
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
            <button className="signup-btn">Signup</button>

            <p className="para-class">
              Already have an account?
              <Link
                to="/login"
                style={{ color: "blue", textDecoration: "none" }}
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
