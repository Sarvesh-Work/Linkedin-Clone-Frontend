import { Link, NavLink } from "react-router-dom";
import Logo from "../icons/174857.png";
import ProfileImg from "../images/10808dc6cd9b78f0153e68aae9942abc.jpg";
import Profile from "./Profile";
import Business from "./Business/Business";

const NaveBar = () => {
  return (
    <div
      className="container-fluid sticky-top pt-1 w-100 "
      style={{
        borderBottom: "1px solid #D3D3D3",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        className="row px-3 mx-xl-5 d-flex justify-content-around"
        style={{ gap: "10px" }}
      >
        <img
          src={Logo}
          alt=""
          className="col-1 border  p-0 my-2 img-fluid"
          style={{ height: "30px", width: "30px" }}
        />

        <div
          className="col-1 p-0  d-flex justify-content-center align-item-center mx-1"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
        >
          <i className="fa-solid fa-magnifying-glass fs-4 p-1 my-2"></i>
        </div>
        <div
          className="offcanvas offcanvas-top"
          tabIndex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
          style={{ width: "100%", height: "100px" }}
        >
          <div className="offcanvas-header d-flex justify-content-center align-item-center gap-4">
            <input
              type="text"
              name=""
              id=""
              className="p-2 w-75 fs-3"
              style={{ borderRadius: "5px", backgroundColor: "#F0F8FF" }}
            />
            <button
              type="button"
              className="fa-solid fa-x  p-3 border my-1 "
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style={{
                borderRadius: "50px",
                color: "white",
                backgroundColor: "#007FFF",
              }}
            ></button>
          </div>
        </div>

        {/* mobile and tablet screen */}
        <div className="col-1 dropdown d-lg-none  d-flex justify-content-center align-items-center">
          <i
            className="fa-solid fa-ellipsis toggle fs-2"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ cursor: "pointer" }}
          ></i>

          <div
            className=" dropdown-menu  container "
            aria-labelledby="dropdownMenuButton"
            style={{ borderRadius: "5px", width: "250px" }}
          >
            <div className="row" style={{ width: "240px" }}>
              <div className="col-4 mx-1 d-flex  justify-content-center align-items-center">
                <img
                  src={ProfileImg}
                  alt=""
                  className=" img-fluid"
                  style={{
                    borderRadius: "50px",
                    height: "40px",
                    width: "40px",
                  }}
                />
              </div>
              <div className="col-3 p-2 text-center">
                <i className="fa-solid fa-list-check fs-2 my-2"></i>
              </div>
              <Link
                className="col-3 p-2 text-center "
                style={{ color: "#EAB458", fontSize: "10px" }}
              >
                Upgrade my plan
              </Link>
            </div>
          </div>
        </div>
        {/* mobile and tablet screen */}

        <NavLink
          to="/Home"
          className="col-1 Links  p-0 d-flex flex-column text-center"
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "4px solid black" : "none",
            };
          }}
        >
          <i className="fa-solid fa-house fs-6 p-1 my-xl-0 my-2"></i>
          <span className="d-xl-inline d-none" style={{ color: "#00000099" }}>
            Home
          </span>
        </NavLink>
        <NavLink
          to="/Network"
          className="col-1 Links p-0 d-flex flex-column text-center "
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "4px solid black" : "none",
            };
          }}
        >
          <i className="fa-solid fa-people-line  fs-6 p-1 my-xl-0 my-2"></i>
          <span className="d-xl-inline d-none" style={{ color: "#00000099" }}>
            My Network
          </span>
        </NavLink>
        <NavLink
          to="/Jobs"
          className="col-1 Links p-0 d-flex flex-column text-center "
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "4px solid black" : "none",
            };
          }}
        >
          <i className="fa-solid fa-briefcase  fs-6 p-1 my-xl-0 my-2"></i>
          <span className="d-xl-inline d-none" style={{ color: "#00000099" }}>
            Jobs
          </span>
        </NavLink>
        <NavLink
          to="/Messaging"
          className="col-1 Links p-0 d-flex flex-column text-center "
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "4px solid black" : "none",
            };
          }}
        >
          <i className="fa-solid fa-message fs-6 p-1 my-xl-0 my-2"></i>
          <span className="d-xl-inline d-none" style={{ color: "#00000099" }}>
            Messaging
          </span>
        </NavLink>

        <NavLink
          to="/Notifications"
          className="col-1 Links p-0 d-flex flex-column text-center "
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "4px solid black" : "none",
            };
          }}
        >
          <i className="fa-solid fa-bell fs-6 p-1 my-xl-0 my-2"></i>
          <span className="d-xl-inline d-none" style={{ color: "#00000099" }}>
            Notifications
          </span>
        </NavLink>
        <div className=" col-1 p-0 dropdown mx-1 text-center d-lg-inline d-none">
          <img
            src={ProfileImg}
            alt=""
            className="toggle my-xl-0 my-2"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ height: "30px", width: "30px", borderRadius: "50%" }}
          />
          <div
            className="d-xl-block d-none "
            style={{ cursor: "pointer", color: "#00000099" }}
          >
            Me <i className="bi bi-caret-down-fill"></i>
          </div>
          <div
            className="dropdown-menu mt-4"
            aria-labelledby="dropdownMenuButton1"
            style={{
              width: "270px",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            {/* component */}
            <Profile />
            {/* component */}
          </div>
        </div>
        <div
          className="col-1 d-lg-inline d-none"
          style={{ borderLeft: "1px solid gray", width: "1px" }}
        ></div>
        <div
          className="col-1  text-center d-lg-inline d-none p-0 cursor"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i className="fa-solid fa-list-check fs-5 mt-xl-0 "></i>
          <div className="d-xl-block d-none " style={{ color: "#00000099" }}>
            For Business
          </div>
        </div>
        <div
          class="offcanvas offcanvas-end p-0"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
         <Business/>
        </div>
        <Link className="col-1 Links  p-0   d-xl-inline d-none">
          <div style={{ color: "#EAB458" }} className=" fs-6">
            Upgrade My Plain
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NaveBar;
