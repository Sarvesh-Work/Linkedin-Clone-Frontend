import { Link } from "react-router-dom";

// import LinkedinLogo from "../../../public/icons/Linkedin-Logo.png";
const SigninForm = () => {

  return (
    <div className="container  d-flex align-items-center flex-column">
      <div className="row">
        <div className="col-md-4 " >
          <img  src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png" alt="" className="h-100 w-50" />
        </div>
      </div>
      <div className="row w-100  d-flex flex-column align-items-center p-1 scale-up-top">
        <div className="col-md-6  text-danger fs-1 text-center mt-3">
          Discover what your network can do for you
        </div>
        <form className="row w-75 d-flex flex-column align-items-center mt-2">
  
          <input
            type="email"
            className="bg-white p-2 text-dark col-md-8 mt-3 fw-bold fs-3"
            placeholder="Email"
            style={{ border: "1px solid black", borderRadius: "5px" , }}
          />
        
          <input
            type="password"
            className="bg-white p-2 col-md-8 text-dark mt-3 fw-bold fs-3"
            style={{ border: "1px solid black", borderRadius: "5px" }}
            placeholder="Password"
          />
          <Link
            className="col-md-8 p-0 text-primary   fs-5 fw-bold mt-3 "
            to="/ForgotPassword"
          >
            Forgot Password?
          </Link>
        </form>
        <Link to="/Home" className="col-md-6  col-9 border text-center p-2 bg-primary text-white fs-5 mt-3" style={{borderRadius:"25px",cursor:"pointer"}}>
            Sign in
        </Link>
        <Link to="/Sign-up" id="Sign-up" className="col-md-6  col-9 border text-center p-2  fs-5 mt-3" style={{borderRadius:"25px",cursor:"pointer"}}>
            Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SigninForm;
