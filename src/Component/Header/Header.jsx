import "./Header.css";

export const Header = () => {
  const dataStore = JSON.parse(localStorage.getItem("currentUser")) || {};

  const paraStyle1 = {
    fontSize: "18px",
    fontWeight: 500,
  };

  const paraStyle2 = {
    fontSize: "14px",
  };

  return (
    <>
      <div className="header">
        <div className="img-logo">
          <img src={dataStore?.profileImage || "/images/blank.jpg"} width={1080} className="header-img" />
        </div>

        <div className="child-header">
          <p
            style={paraStyle1}
          >{`${dataStore?.firstname} ${dataStore?.lastname}`}</p>
          <p style={paraStyle2}>{dataStore?.role}</p>
        </div>
      </div>
    </>
  );
};
