import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
   
        <div className="container">
          <div className="d-flex justify-content-between">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png "
              alt=""
              style={{ height: "80px", width: "130px" }}
            />
            <div>
              <Link to="/"
                className="btn btn-primary mt-3 ms-2 btn-2"
                id="btn-121"
                type="button"
              >
                Sign in
              </Link>
              {/* <button className="btn btn-primary mt-3 ms-2 btn-2" id="btn-121"  type="button" ><Link to="#">Sign in</Link></button> */}
              <Link to="/Sign-up"
                className="btn btn-primary mt-3 ms-2 btn-2"
                id="btn-122"
                type="button"
              >
                Join now
              </Link>
              {/* <button className="btn btn-primary mt-3 ms-2 btn-2" id="btn-121"  type="button" ><Link to="#">Join now</Link></button> */}
            </div>
          </div>

          <div className=" d-flex justify-content-center align-items-center mt-2 scale-up-top">
            <div id="form-main121">
              <form>
                <div className="d-flex justify-content-center align-items-center mb-3 ">
                  <h1> Forgot Password</h1>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email or phone number</label>
                  <input
                    type="email"
                    placeholder="Email or Phone"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3 ">
                  <p>
                    We’ll send a verification code to this email or phone number
                    if it matches an existing LinkedIn account.
                  </p>
                </div>
                <div className="mb-3">
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-primary mt-3 btn-2"
                      id="btn-111"
                      type="button"
                    >
                      Next
                    </button>
                    {/* <button className="btn btn-primary mt-3 ms-2 btn-2" id="btn-121"  type="button" ><Link to="#">Sign in</Link></button> */}
                    <button
                      className="btn btn-outline-light mt-1 btn-2"
                      id="btn-11"
                      type="button"
                    >
                      Back
                    </button>
                    {/* <button className="btn btn-primary mt-3 ms-2 btn-2" id="btn-121"  type="button" ><Link to="#">Back</Link></button> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
     
  );
};

export default ForgotPassword;
