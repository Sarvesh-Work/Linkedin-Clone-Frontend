import { Link } from "react-router-dom";
import ProfileImg from "../images/10808dc6cd9b78f0153e68aae9942abc.jpg";


const Profile = () => {
  return (
    <div className="container-fluid d-flex justify-content-center  " >
      <div className="row d-flex flex-column" style={{ width: "260px" }}>
        <div className="col-12 d-flex p-0 gap-2">
          <div className="w-25 p-1">
            <img
              src={ProfileImg}
              alt=""
              className="h-50 w-100 rounded-circle"
            />
          </div>
          <div className="w-75 text-start fs-6">
            <div className="fw-bold">Name</div>
            Software developer with ethics, have passionately curious about
            programming languages
          </div>
        </div>
        <Link to="/EditProfile"
          className="col-11 text-primary border border-primary mt-2 text-center fs-5 mx-3"
          style={{ borderRadius: "20px" }}
        >
          View Profile
        </Link>
        <hr className="dropdown-divider"></hr>
        <div className="col-12 ">
          <div className="fw-bold fs-6 ">Account</div>
          <div className="mt-1 fs-6" style={{cursor:"pointer"}}>Upgrade my plan</div>
          <div className="mt-1 fs-6" style={{cursor:"pointer"}}>Setting my Privacy</div>
          <div className="mt-1 fs-6" style={{cursor:"pointer"}}>Help</div>
          <div className="mt-1 fs-6" style={{cursor:"pointer"}}>Language</div>
        </div>
        <hr className="dropdown-divider"></hr>
        <div className="col-12">
          <div className="fw-bold fs-6">Manage</div>
          <div className=" fs-6"style={{cursor:"pointer"}}>Posts & Activity</div>
          <div className="mt-1 fs-6"style={{cursor:"pointer"}}>Job Posting Account</div>
        </div>
        <hr className="dropdown-divider"></hr>
        <Link to="/" className=" fs-6 text-dark"style={{cursor:"pointer"}}>Sign Out</Link>
      </div>
    </div>
  );
};

export default Profile;
