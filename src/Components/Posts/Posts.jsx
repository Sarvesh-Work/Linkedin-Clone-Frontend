import ProfileImg from "../../images/10808dc6cd9b78f0153e68aae9942abc.jpg";
import Event from "../Event/Event";
import Media from "../Media/Media";

const Posts = () => {
  return (
    <div className="container  sections">
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-2 d-flex justify-content-center align-items-center mt-3">
          <img
            src={ProfileImg}
            alt=""
            className=" rounded-circle"
            style={{ height: "50px", width: "50px" }}
          />
        </div>
        <div className="col-10  mt-3">
          <div
            className="input-group flex-nowrap"
            style={{ borderRadius: "45px" }}
          >
            <input
              type="text"
              className="form-control p-3  fs-5 border-2"
              placeholder="Start a post"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              style={{ borderRadius: "45px", height: "50px" }}
            />
          </div>
        </div>
      </div>
      <div className="row p-2  d-flex justify-content-around ">
        <div
          type="button"
          className="col-md-3 col-5 p-2 d-flex button rounded-3  justify-content-center align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          style={{ cursor: "pointer" }}
        >
          <div className="d-flex align-items-center p-1">
            <i
              className="fa-solid fa-photo-film fs-md-4 fs-6"
              style={{ color: "#378FE9" }}
            ></i>
          </div>
          <div
            className="fs-md-5 fs-6 fs-6 h-75 w-50 text-center"
            style={{ color: "#00000099" }}
          >
            Media
          </div>
        </div>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
         
        >
          <Media />
        </div>
        <div className="col-md-3 col-5 p-2 d-flex button rounded-3  justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
        style={{ cursor: "pointer" }}>

          <div className="d-flex align-items-center p-1">
            <i
              className="fa-regular fa-calendar-days fs-4"
              style={{ color: "#C37D16" }}
            ></i>
          </div>
          <div
            className="fs-md-5 fs-6 h-75 w-50 text-center"
            style={{ color: "#00000099" }}
          >
            Event
          </div>
        
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
          <Event/>
        </div>
        <div className="col-md-3 col-5 p-2 d-flex button rounded-3  justify-content-center align-items-center">
          <div className="d-flex align-items-center p-1">
            <i
              className="fa-solid fa-newspaper fs-4"
              style={{ color: "#E06847" }}
            ></i>
          </div>
          <div
            className="fs-md-5 fs-6 h-75 w-75 text-center"
            style={{ color: "#00000099" }}
          >
            Write article
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
