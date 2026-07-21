import "./Reset.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useState } from "react";
export const Reset = () => {
  // const registerData = JSON.parse(localStorage.getItem("registerForm")) || [];
  const storeData = JSON.parse(localStorage.getItem("registerForm")) || [];
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  // const navigate = useNavigate();
  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (storeData.password === newPassword) {
      toast.error(" this is your old password");
      return;
    }
    if (newPassword !== confirmpassword) {
      toast.error("password did not match");
      return;
    }

    const registerData = JSON.parse(localStorage.getItem("registerForm")) || [];
    const forgotData = JSON.parse(localStorage.getItem("forgotData")) || [];

    const user = registerData.find(
      (val) => val.email == forgotData || val.mobile == forgotData,
    );

    const storedata = {
      ...user,
      password: newPassword,
      confirmpassword,
    };

    const updatedRegisterData = registerData.map((curr) =>
      curr.email === storedata.email ? storedata : curr,
    );

    localStorage.setItem("registerForm", JSON.stringify(updatedRegisterData));
    localStorage.removeItem("forgotData")
    navigate("/");
  };

  return (
    <>
      <div className="reset-panelwrap">
        <div className="reset-panel">
          <h1>Reset Password</h1>

          <div className="reset-wrapper">
            <form className="reset-container" onSubmit={handlePasswordSubmit}>
              <div className="reset-grid">
                <div>
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    id="newPassword"
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    required
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="confirmpassword">Confirm Password</label>
                  <input
                    id="confirmpassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmpassword}
                    required
                    onChange={(e) => setConfirmpassword(e.target.value)}
                  />
                </div>

                <button className="reset-btn">Update Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
