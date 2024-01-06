import { Link } from "react-router-dom";
import "./SignupForm.css"
const SignupForm = () => {
  return (
    <div className="container-fluid h-100 " style={{backgroundColor:"#F3F2F0"}}>
      <div className="px-4">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png"
          alt=""
          style={{ height: "80px", width: "130px" }}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center mb-1 ">
        <h2 className="scale-up-top"> Make the most of your professional life</h2>
      </div>
      <div className=" d-flex justify-content-center align-items-center mt-2">
        <div id="form-main" className="scale-up-top">
          <form >
            <div className="mb-3 ">
              <label className="form-label">Email or phone number</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3">
              <label className="form-label">Password (6+ Character)</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 ">
              {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label">Check me out</label> */}
              By Clicking Agree & Join ,you agree to the Linkdin
              <a href="">User Agreement,</a> <a href="">Privacy Policy,</a>and
              <a href="">Cookies Policy</a>
            </div>
            {/* <button type="submit" className="btn btn-primary" style={{height:"60px",width:"400px"}}>   Agree & Join   </button> */}
            <div className="mb-3">
              <div className="d-grid gap-2">
                <button className="btn btn-primary mt-3" type="button">
                  Agree & Join
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-4 form-label">
              <p>
                Already on LinkedIn? <Link to="/">Sign in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
