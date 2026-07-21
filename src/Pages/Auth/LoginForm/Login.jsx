import "./Login.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, Navigate, useNavigate } from "react-router-dom";

  export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [isRequired, setIsRequired] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storeData = JSON.parse(localStorage.getItem("registerForm")) || [];

    const loginDataStore = storeData.find((user) => user.email === email);

    // console.log(loginDataStore, "checkProfileInfo");
    // console.log(loginDataStore);

    if (!checkbox) {
      setIsRequired(true);
      return;
    }

    if (!loginDataStore) {
      return toast.error("User Not found signup first");
    } else if (password !== loginDataStore.password) {
      return toast.error("password did not match");
    } else {
      toast.success("Login successfully");
      localStorage.setItem("isLogin", true);

      //  const selectedUser = {
      //   firstname: loginDataStore.firstname,
      //   lastname: loginDataStore.lastname,
      //   role: loginDataStore.role,
      // };

      localStorage.setItem("currentUser", JSON.stringify(loginDataStore));
      navigate("/"); //dashboard main jayega//
    }
  };

  return (
    <div className="container">
      <div className="child-container">
        <h1 className="login_header">Login form</h1>
        <form className="loginform-container" onSubmit={handleSubmit}>
          <input
            className="input-form"
            type="Email"
            placeholder="Email Address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input-form"
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="checkbox-wrap">
            <div className="checkbox-btn">
              <input
                type="checkbox"
                checked={checkbox}
                onChange={(e) => setCheckbox(e.target.checked)}
              />
              <label
                htmlFor="checkbox"
                style={{ color: !checkbox && isRequired && "red" }}
              >
                Remember me
              </label>
            </div>

            <p style={{ color: "blue" }} className="forgot-para">
              <Link
                to="/forgot"
                style={{ color: "blue", textDecoration: "none" }}
              >
                forgot password?
              </Link>
            </p>
            
          </div>
          {!checkbox && isRequired && (
            <p style={{ color: "red", fontSize: "10px" }}>
              Please Checked on Remember me!
            </p>
          )}

          <button className="login-btn">Login</button>

          <p className="para-class">
            Not a member?
            <Link
              to="/register"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Signup now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
