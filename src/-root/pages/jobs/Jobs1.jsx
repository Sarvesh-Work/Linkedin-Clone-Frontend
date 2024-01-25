import { Link } from "react-router-dom";
import "./Jobs1.css";
import Prefer from "../../../Components/Prefer/Prefer";
import Resume from "../../../Components/ResumeBuilder/Resume";


// import Slider from "./Slider"






const Jobs = () => {
  return (
    <div className="container mt-3 mb-2">
      <div className="row " >
        {/* left sideBar */}
        <div className="col-lg-3 " >
          <div className="sections " >
            <ul className="list-group list-group-light">
              <li className="list-group-item px-3" >
                <Link to="/MyJob" className="mt-3 button" >
                  <a href="#" className="d-flex fw-bold py-1 ps-md-2">
                    <i className="bi bi-bookmark-fill me-2  icon12"></i>
                    <p className="mt-1">My Jobs</p>
                  </a>
                </Link>
                <div>
                  <div href="#" className="d-flex fw-bold py-1 ps-md-2" data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
        style={{ cursor: "pointer" }}>
                    <i className="bi bi-list-ul me-2 icon12"></i>
                    <p className="mt-1">Preferences</p>
                  </div>
                  <div
          className="modal fade"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          
        >
         <Prefer/>
        </div>
                </div>
                <div>
                  <a href="#" className="d-flex fw-bold py-1 ps-md-2">
                    <i className="bi bi-clipboard-check me-2 mt-1 icon12"></i>
                    <p className="mt-1">Skill Assessments</p>
                  </a>
                </div>
                <div>
                  <a href="#" className="d-flex fw-bold py-1 ps-md-2">
                    <i className="bi bi-floppy-fill me-2 icon12"></i>
                    <p className="mt-1">Interview prep</p>
                  </a>
                </div>
                <div>
                  <div href="#" className="d-flex fw-bold py-1 ps-md-2" data-bs-toggle="modal"
        data-bs-target="#staticBackdrop2"
        style={{ cursor: "pointer" }}>
                    <i className="bi bi-file-earmark-fill me-2 icon12 "></i>
                    <p className="mt-1">Resume Builder</p>
                  </div>
                  <div
          className="modal fade"
          id="staticBackdrop2"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          
        >
         <Resume/>
        </div>
                </div>
                <div>
                  <a href="#" className="d-flex fw-bold py-1 ps-md-2">
                    <i className="bi bi-youtube me-2 icon12"></i>
                    <p className="mt-1">Job Seeker Guidances</p>
                  </a>
                </div>
                <div>
                  <a href="#" className="d-flex fw-bold py-1 ps-md-2">
                    <i className="bi bi-gear-fill me-2 mt-1 icon12"></i>{" "}
                    <p className="mt-1">Application Setting</p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center " >
            <button className="btn btn-primary px-5 mt-2 mb-3" id="btn-122">
              Post a free job
            </button>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="col-lg-9">

          {/* First part */}
          <div className="sections mt-lg-0 mt-md-5 ">
            <ul className="list-group list-group-light">
              <li className=" list-group-item ">
                <div className="d-flex d-flex justify-content-between">
                  <strong id="React-job-head">Recent job searches</strong>
                  <p>clear</p>
                </div>
                <a href="#" className="Search-jobs">
                  <span id="React-job-name">
                    React js -
                    <span>
                      <strong>256 news</strong>
                    </span>
                  </span>
                  <span className="d-flex" id="job-location">
                    India . Entry level
                  </span>
                  <hr />
                </a>

                <a href="#" className="Search-jobs">
                  <span id="React-job-name">
                    React js -
                    <span>
                      <strong>10 news</strong>
                    </span>
                  </span>
                  <span className="d-flex" id="job-location">
                    India . Apply on Linkedin . Entry level
                  </span>
                  <hr />
                </a>

                <a href="#" className="Search-jobs">
                  <span id="React-job-name">
                    Node js -
                    <span>
                      <strong>154 news</strong>
                    </span>
                  </span>
                  <span className="d-flex" id="job-location">
                    India . Entry level
                  </span>
                  <hr />
                </a>
              </li>
            </ul>
          </div>

          {/* Second part */}
          <div className="sections mt-3 p-2">
            <div className="p-2">
              <strong id="React-job-head">Recommended for you</strong>
              <p>Based on your profile and search history</p>
            </div>

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/C4D0BAQF-RIoeeMTMKQ/company-logo_100_100/0/1664197008220/hcltech_logo?e=1712793600&v=beta&t=Gi1XYWhSh4JrlU1V5aVTn5BpqAqwZzyLotLurfrE8Y8"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span>Java Developer || Pune || Immediate Joiners</span>
                  <span id="React-job-name">HCL Tech</span>
                  <span id="job-location">
                    pune, Maharashtra, India (on site)
                  </span>
                  <> 53 min ago</>
                </div>
              </div>
            </a>
            <hr />

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/C4E0BAQEU0iVPv-Y7ww/company-logo_100_100/0/1644917987135/optbyte_software_solutions_logo?e=1712793600&v=beta&t=z1requmgCt3K351afRHC24mKIwBctd0B9tpwfkX9ZuI"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span>Frontend Developer</span>
                  <span id="React-job-name">OptByte Software Solutions</span>
                  <span id="job-location">
                    pune, Maharashtra, India (on site)
                  </span>
                  <>14 hours ago </>
                </div>
              </div>
            </a>
            <hr />

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/C4D0BAQEEnrXQFYLfoQ/company-logo_100_100/0/1630534411890?e=1712793600&v=beta&t=TNBeUd2MGyxB58DWeJwTP49LHC2n5z61EDy0vrYlkWw"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span>Full stack Developer (MERN)</span>
                  <span id="React-job-name">Creative Galileo</span>
                  <span id="job-location">
                    pune, Maharashtra, India (on site)
                  </span>
                  <>11 hours ago </>
                </div>
              </div>
            </a>
            <hr />

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/C4E0BAQHJUDZhWnP4MA/company-logo_100_100/0/1654088524024/epam_anywhere_logo?e=1712793600&v=beta&t=VKYDjWtADxJAYzcyQ_J9LoajTP1sefC5FuxmMBlWGJs"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span>Lead Java Developer</span>
                  <span id="React-job-name">EPAM Anywhere</span>
                  <span id="job-location">India (Remote)</span>
                  <>1 hours ago </>
                </div>
              </div>
            </a>
            <hr />
            <div className="d-flex justify-content-center">
              <a href="#" id="show-all">
                {" "}
                show all <i
                  className="bi bi-arrow-right"
                  id="show-all"
                ></i>{" "}
              </a>
            </div>
          </div>

          {/* Third Part */}
          <div className="sections mt-2">
            <div className="p-2">
              <strong id="React-job-head">Explore with job collections</strong>
              <p>Broaden your job search with curated collections</p>
            </div>
            <div className="row mb-4 px-4">
              <div className="col-md-3 mb-2 ">
                <div className="card" id="Explore-card">
                  <div className="d-flex justify-content-center align-items-center  flex-column ">
                    <img
                      src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAG5PMdvEpiMCQbygqHT1d_kyWg.png"
                      className="img-fluid"
                      style={{ height: "100px", width: "100px" }}
                      alt=""
                    />
                    <span>Hybrid</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-2 ">
                <div className="card" id="Explore-card">
                  <div className="d-flex justify-content-center align-items-center  flex-column">
                    <img
                      src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAFI3DLx-bKIiTb2LJQmVkewj6g.png"
                      className="img-fluid"
                      style={{ height: "100px", width: "100px" }}
                      alt=""
                    />
                    <span>Small Biz</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-2">
                <div className="card" id="Explore-card">
                  <div className="d-flex justify-content-center align-items-center  flex-column ">
                    <img
                      src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAFQFSe40UvvqS5-rE4rHdvhBXg.png"
                      className="img-fluid"
                      style={{ height: "100px", width: "100px" }}
                      alt=""
                    />
                    <span>Remote</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-2">
                <div className="card" id="Explore-card">
                  <div className="d-flex justify-content-center align-items-center  flex-column ">
                    <img
                      src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAEaU3LH3A_d4Q46KJccm9UU3aA.png"
                      className="img-fluid"
                      style={{ height: "100px", width: "100px" }}
                      alt=""
                    />
                    <span>Food & Bev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth part */}
          <div className="sections mt-3 p-2">
            <div className="p-2">
              <strong id="React-job-head">Java software engineer</strong>
              <p>Pune, Maharashtra, India (within 25 miles)</p>
            </div>

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/C560BAQGhxILS4TGCtw/company-logo_100_100/0/1678960149706/live_connections_logo?e=1712793600&v=beta&t=QewLr5u3qk6ZYiO9wN_129AYie9xF0zM8mN2k9FIqXE"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span>Java Software Engineer</span>
                  <span id="React-job-name">Live Connections</span>
                  <span id="job-location">
                    pune, Maharashtra, India (on site)
                  </span>
                  <> 1 Day ago</>
                </div>
              </div>
            </a>
            <hr />

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/C560BAQEGsbroYsa3yg/company-logo_100_100/0/1631380873647?e=1712793600&v=beta&t=FHQ8VN70lHACsGboepBNB0LA5rTll5RwB-OJoCxbosM"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span>Java Principal Software Engineer</span>
                  <span id="React-job-name">Zemoso Technologies</span>
                  <span id="job-location">
                  India (Remote)
                  </span>
                  <>1 Day ago </>
                </div>
              </div>
            </a>
            <hr />

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/C560BAQFIQESyoQK-zQ/company-logo_100_100/0/1630656331309/optimum_data_analytics_logo?e=1712793600&v=beta&t=z74PTOgeMbEqnAbg1DNWGFdj-0VZ46OHIkUW773phTk"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span>Senior Java Software Engineer</span>
                  <span id="React-job-name">Optimum Data Analytics</span>
                  <span id="job-location">
                    pune, Maharashtra, India (on site)
                  </span>
                  <>12 hours ago </>
                </div>
              </div>
            </a>
            <hr />

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/C560BAQGEEw9HXvgGzA/company-logo_100_100/0/1639383759204/luxoft_logo?e=1712793600&v=beta&t=gg1pv7c_lZW2ImPt29N1VHqtuSZVi5o6T1Zib1JDJzo"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span>
Java Software Engineer - 1.5 months NP max</span>
                  <span id="React-job-name">Luxoft</span>
                  <span id="job-location">India (Remote)</span>
                  <>1 Day ago </>
                </div>
              </div>
            </a>
            <hr />

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/C560BAQEGsbroYsa3yg/company-logo_100_100/0/1631380873647?e=1712793600&v=beta&t=FHQ8VN70lHACsGboepBNB0LA5rTll5RwB-OJoCxbosM"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span>
                  Java Senior Software Engineer</span>
                  <span id="React-job-name">Zemoso Technologies</span>
                  <span id="job-location">India (Remote)</span>
                  <>1 Day ago </>
                </div>
              </div>
            </a>
            <hr />
            
            <div className="d-flex justify-content-center">
              <a href="#" id="show-all">
                {" "}
                show all <i
                  className="bi bi-arrow-right"
                  id="show-all"
                ></i>{" "}
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Jobs;
