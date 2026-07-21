import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Forgot.css";
import { useState } from "react";
export const Forgot = () => {
  const [emailNumber, setEmailNumber] = useState("");
  const navigate = useNavigate();
  const storeData = JSON.parse(localStorage.getItem("registerForm")) || [];


  const handleForgotSubmit = (e) => {
    e.preventDefault();
    const user = storeData.some(
      (curr) => curr.email === emailNumber || curr.mobile === emailNumber,
    );
    if (!user) {
      toast.error("Your filled is invalid");
      return;
    }
    localStorage.setItem("forgotData", JSON.stringify(emailNumber));
    navigate("/OtpVerification");
    toast.success("data Submit");
  };


  return (
    <>
      <div className="forgot-panelwrap">
        <div className="forgot-panel">
          <h1>Forgot Password</h1>
          <div className="forgot-wraper">
            <form onSubmit={handleForgotSubmit} className="forgotform">
              <input
                type="text"
                placeholder="Email or Mobile Number"
                value={emailNumber}
                onChange={(e) => setEmailNumber(e.target.value)}
                required
              />
              <div className="btn-wrap">
                <button className="submit-btn">Submit</button>
                <button className="back-btn" onClick={() => navigate("/")}>
                  Back to Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
