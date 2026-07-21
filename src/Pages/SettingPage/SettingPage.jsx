import { useNavigate } from "react-router-dom";
import "./SettingPage.css";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export const SettingPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [tabData, setTabData] = useState("profile");
  // const [profileImage, setProfileImage] = useState("/images/hoddiemen.jpg");
  const dataStore = JSON.parse(localStorage.getItem("currentUser")) || {};
  const registerData = JSON.parse(localStorage.getItem("registerForm")) || [];
  const [profileImage, setProfileImage] = useState(dataStore.profileImage);

  const [firstname, setFirstname] = useState(dataStore.firstname || "");
  const [lastname, setLastname] = useState(dataStore.lastname || "");
  const [email, setEmail] = useState(dataStore.email || "");
  const [mobile, setMobile] = useState(dataStore.mobile || "");
  const [city, setCity] = useState(dataStore.city || "");
  const [state, setState] = useState(dataStore.state || "");
  const [countryCode, setCountryCode] = useState(dataStore.countryCode || "");
  const [address1, setaddress1] = useState(dataStore.address1 || "");
  const [address2, setaddress2] = useState(dataStore.address2 || "");
  const [country, setCountry] = useState(dataStore.country || "");
  const [gender, setGender] = useState(dataStore.gender || "");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const image = reader.result;

      setProfileImage(image);

      const settingData = {
        ...dataStore,
        profileImage: image,
      };

      const updatedRegisterData = registerData.map((curr) =>
        curr.email === settingData.email ? settingData : curr,
      );

      localStorage.setItem("registerForm", JSON.stringify(updatedRegisterData));

      localStorage.setItem("currentUser", JSON.stringify(settingData));
      location.reload();
    };

    reader.readAsDataURL(file);
  };

  const handleDelete = () => {
    const settingData = { ...dataStore };

    delete settingData.profileImage;

    setProfileImage(null);

    localStorage.setItem("currentUser", JSON.stringify(settingData));

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    location.reload();
  };

  const handleFormSubmit = (e) => {
    // e.preventDefault();

    const settingData = {
      ...dataStore,
      firstname,
      lastname,
      email,
      mobile,
      city,
      state,
      countryCode,
      country,
      gender,
      address1,
      address2,
    };

    const updatedRegisterData = [];
    for (let curr of registerData) {
      if (curr.email === settingData.email) {
        updatedRegisterData.push(settingData);
      } else {
        updatedRegisterData.push(curr);
      }
    }
    localStorage.setItem("registerForm", JSON.stringify(updatedRegisterData));

    localStorage.setItem("currentUser", JSON.stringify(settingData));
  };

  return (
    <>
      <div className="main-tab">
        <span
          className={tabData === "profile" ? "active-link" : "no-active"}
          onClick={() => setTabData("profile")}
        >
          Profile Setting
        </span>

        <span
          className={tabData === "password" ? "active-link" : "no-active"}
          onClick={() => setTabData("password")}
        >
          Password
        </span>
      </div>

      {tabData === "profile" && (
        <div className="setting-panel">
          <div className="child-panel">
            <div className="icon-logo">
              <img
                className="icon-img"
                src={profileImage || "/images/blank.jpg"}
                alt="blank"
              />

              <div className="btns">
                <button
                  className="btn-style btn"
                  onClick={() => fileInputRef.current.click()}
                >
                  Upload New
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <button className="btn-style" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="setting-form">
              <div className="form-grid">
                <div>
                  <label htmlFor="firstname"> FirstName:</label>
                  <input
                    id="firstname"
                    type="text"
                    value={firstname}
                    required
                    placeholder="Firstname"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="lastname"> Lastname:</label>
                  <input
                    id="lastname"
                    type="text"
                    value={lastname}
                    required
                    placeholder="Lastname"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="email"> Email:</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    disabled
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="mobile"> Mobile Number:</label>

                  <input
                    id="mobile"
                    value={mobile}
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="city">City:</label>
                  <input
                    id="city"
                    type="text"
                    value={city}
                    required
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="state">State:</label>
                  <input
                    id="state"
                    type="text"
                    required
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="code">Country Code</label>
                  <input
                    id="code"
                    type="number"
                    required
                    placeholder="Country Code"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="country">Country:</label>
                  <select
                    className="select-option"
                    id="country"
                    value={country}
                    required
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option disabled value="">
                      Country
                    </option>
                    <option value="india">India</option>
                    <option value="nepal">Nepal</option>
                    <option value="bangladesh">Bangladesh</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="gender">Gender</label>

                  <span className="radiobtn">
                    <label htmlFor="male" className="radiobtn-child">
                      <input
                        id="male"
                        type="radio"
                        name="gender"
                        value="male"
                        required
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      Male
                    </label>

                    <label htmlFor="female" className="radiobtn-child">
                      <input
                        id="female"
                        type="radio"
                        name="gender"
                        value="female"
                        required
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      Female
                    </label>
                  </span>
                </div>

                <div>
                  <label htmlFor="address1">Address line1:</label>
                  <textarea
                    value={address1}
                    name="address1"
                    id="address1"
                    placeholder="address Line 1"
                    onChange={(e) => setaddress1(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="address2">Address line2:</label>
                  <textarea
                    value={address2}
                    name="address2"
                    id="address2"
                    placeholder="address Line 2"
                    onChange={(e) => setaddress2(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-buttons">
                <button type="submit" className="btn-style btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {tabData === "password" && <PasswordPage />}
    </>
  );
};

//password page ka componet banaya hain//

export const PasswordPage = () => {
  const dataStore = JSON.parse(localStorage.getItem("currentUser")) || {};
  console.log(dataStore)
  const registerData = JSON.parse(localStorage.getItem("registerForm")) || [];
  // console.log(registerData)
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const navigate = useNavigate();
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (dataStore.password !== currentPassword) {
      toast.error(" current password is invalid");
      return;
    }
    if (currentPassword === newPassword) {
      toast.error("New password should be different from current password.");
      return;
    }

    if (newPassword !== confirmpassword) {
      toast.error("newPassword and confirm password shoule be same");
      return;
    }

    const settingData = {
      ...dataStore,

     password:newPassword,
     confirmpassword
    };

    const updatedRegisterData = registerData.map((curr) =>
      curr.email === settingData.email ? settingData : curr,
    );

    localStorage.setItem("registerForm", JSON.stringify(updatedRegisterData));
    console.log(updatedRegisterData)

    localStorage.setItem("currentUser", JSON.stringify(settingData));
    

    toast.success("password update Successfully");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("currentUser");
    navigate("/login")
  };

  return (
    <div className="password-panel">
      <h1>Change Password</h1>

      <form className="passwordform-container" onSubmit={handlePasswordSubmit}>
        <div className="passwordform-grid">
          <div>
            <label htmlFor="currentPassword">Current Password</label>
            <input
              id="currentPassword"
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              required
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

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

          <div className="password-btn-wrap">
            <button type="button">Cancel</button>
            <button type="submit" className="btn">
              Update Password
            </button>
          </div>
        </div>
      </form>

      
    </div>
  );
};
