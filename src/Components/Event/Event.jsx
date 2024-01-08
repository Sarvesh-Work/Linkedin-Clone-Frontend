import { useState } from "react";
import ProfileImg from "../../images/10808dc6cd9b78f0153e68aae9942abc.jpg";

const Event = () => {
  const [Loader, setLoader] = useState(true);
  setInterval(() => {
    setLoader(false);
  }, 3000);
  return (
    <>
      <div className="modal-dialog modal-lg modal-dialog-centered  ">
        <div className="modal-content p-2" style={{ borderRadius: "20px" }}>
          {Loader ? (
            <div className="spinner-border mx-auto" role="status"></div>
          ) : (
            <>
              <div className="modal-header ">
                <h3>Create an event</h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{ boxShadow: "none" }}
                  onClick={() => {
                    if (Loader == false) {
                      setLoader(true);
                    }
                  }}
                ></button>
              </div>
              <div className="modal-body p-2" style={{overflowY:"scroll",height:"500px"}}>
                <form>
                  <div className="mb-3 p-2">
                    <label for="exampleInputEmail1" className="form-label fs-4">
                      Event type
                    </label>
                  <div className="d-flex gap-2">
                  <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htlFor="flexRadioDefault1"
                      >
                        Online
                      </label>
                     
                    </div>
                    <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <label
                          class="form-check-label"
                          htmFor="flexRadioDefault2"
                        >
                          In person
                        </label>
                      </div>
                  </div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                    Event name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      style={{outline:"none"}}
                    />
                  </div>
                  <div className="d-flex gap-3">
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                     Start Date
                    </label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="exampleInputPassword1"
                      style={{outline:"none"}}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                     Start Time
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="exampleInputPassword1"
                      style={{outline:"none"}}
                    />
                  </div>
               </div>

  
               <div className="d-flex gap-3">
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                     End Date
                    </label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="exampleInputPassword1"
                      style={{outline:"none"}}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                     End Time
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="exampleInputPassword1"
                      style={{outline:"none"}}
                    />
                  </div>
                  </div>

                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                    Description
                    </label>
                    <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{
                      height: " 80px",
                      outline: "none",
                      boxShadow: "none",
                    }}
                  ></textarea>
                  </div>
                
        
                </form>
                <div className="mt-1">
                  By continuing, you agree with <span className="text-primary">LinkedIn’s event policy.</span>
                  </div>

                  <div className="modal-footer mt-2">
            
                <button
                  type="button"
                  className="btn btn-primary rounded-pill"
                  data-bs-dismiss="modal"
                >
                  Next
                </button>
              </div>

                  
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Event;
