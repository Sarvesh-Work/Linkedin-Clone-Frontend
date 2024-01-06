import {  useState } from "react";
import ProfileImg from "../../images/10808dc6cd9b78f0153e68aae9942abc.jpg";

const Media = () => {
  const [Loader, setLoader] = useState(true);
  setInterval(() => {
    setLoader(false)
  }, 3000);
  return (
    <>
      <div className="modal-dialog modal-lg modal-dialog-centered  ">
        <div className="modal-content p-2" >
          {Loader ? (
            <div className="spinner-border mx-auto" role="status" >
            </div>
          ) : (
            <>
              <div className="modal-header ">
                <div
                  className="button d-flex p-2 cursor"
                  style={{ borderRadius: "20px" }}
                >
                  <img
                    src={ProfileImg}
                    alt=""
                    className=" rounded-circle"
                    style={{ height: "50px", width: "50px" }}
                  />

                  <div>
                    <div
                      className="fs-5 fw-bold mx-1 text-dark"
                      id="staticBackdropLabel"
                    >
                      Sarveh Munde
                    </div>
                    <div className="fs-6 mx-1">Post Any thing</div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{ boxShadow: "none" }}
                  onClick={()=>{
                    if ( Loader==false){
                        setLoader(true)
                    }

                  }}
                ></button>
              </div>
              <div className="modal-body p-2">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{
                      height: " 100px",
                      border: "none",
                      outline: "none",
                      boxShadow: "none",
                    }}
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Comments</label>
                </div>
                <div className="p-2 mt-3 d-flex gap-4">
                   <div >
                     <i className="fa-solid fa-photo-film fs-md-4 fs-4 cursor" ></i>
                   </div>
                   <div>
                   <i
              className="fa-regular fa-calendar-days fs-4 cursor"
        
            ></i>
                   </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="button rounded-circle cursor" >
                <i className="bi bi-clock fs-3 mx-2"></i>
                </div>
                <button
                  type="button"
                  className="btn btn-primary rounded-pill"
                  data-bs-dismiss="modal"
                >
                  Post
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Media;
