import { useState } from "react";

const Resume = () => {
  const [Loader, setLoader] = useState(true);
  setInterval(() => {
    setLoader(false);
  }, 3000);
  return (
    <>
      <div className="modal-dialog modal-lg modal-dialog-centered  ">
        <div className="modal-content " style={{ borderRadius: "20px" }}>
          {Loader ? (
            <div className="spinner-border mx-auto" role="status"></div>
          ) : (
            <>
              <div className="modal-header ">
                <h4>Select a resume
                    <p className="fs-6 fw-normal">
Get insights for formatting issues, keywords, and more.</p>
                </h4>
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
              <div className="modal-body px-0 mt-0" style={{ height: "400px" }}>
                <div className="w-100 p-3" style={{backgroundColor:"#DDE7F1"}}>
                Supported upload formats: 5MB max in .DOCX or .PDF
                </div>
                <div className="fs-6 d-flex justify-content-center align-items-center" style={{height:'200px'}}>
                    <div>
                    Resumes you build on LinkedIn will appear here.
                    </div>
                </div>
              </div>
          

                  <div className="modal-footer mt-2">
            
                <button
                  type="button"
                  className="btn btn-primary rounded-pill"
                  data-bs-dismiss="modal"
                >
                  Create from profile
                </button>
              </div>
              
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Resume;