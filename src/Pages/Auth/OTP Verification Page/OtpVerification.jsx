import { useState } from "react";
import "./OtpVerification.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const otpGenerate = Math.floor(Math.random(6) * 1000000);

export const OtpVerification = () => {
  const [otpInput, setOtpInput] = useState("");
    const navigate = useNavigate();

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    if (otpInput === "") {
      toast.error("Please enter OTP");
      return;
    }
    if (Number(otpInput) === otpGenerate) {
      toast.success("OTP is varified");
    } else {
      toast.error("OTP is invalid");
      return;
    }
     navigate("/reset")
  };

  return (
    <>
      <div className="otp-panelwrap">
        <div className="otp-panel">
          <h1>OTP Verification</h1>
          <div className="otpcard-wrap">
            <p>
              Please enter the OTP [One-Time Password] send to your registered
              email/phone number to complete your verification
            </p>
            <div className="otp-inputs">
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={otpInput}
                required
                placeholder="One Time Passsword"
                onChange={(e) => setOtpInput(e.target.value)}
              />

              <div className="btn-wraps">
                <button className="verify-btn" onClick={handleOtpSubmit}>
                  {" "}
                  Verify
                </button>
                <p className="otp-para"> OTP :- {otpGenerate || "XXXXXX"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
