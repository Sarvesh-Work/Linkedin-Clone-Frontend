import { useState } from "react";

const Prefer = () => {
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
                <h3>Preferences</h3>
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
              <div className="modal-body p-2" style={{ height: "500px" }}>
                <div
                  className="px-3 py-2 button cursor d-flex justify-content-between"
                  style={{ borderBottom: "1px solid #E8E8E8" }}
                >
                  <div style={{ fontSize: "20px", fontWeight: "500" }}>
                    Open to work
                    <p className="fs-6 fw-normal">
                      Job preferences visible to all LinkedIn members
                    </p>
                  </div>
                  <div className="d-flex justify-content-end align-items-center w-25">
                    <i className="bi bi-arrow-right fs-3"></i>
                  </div>
                </div>

                <div
                  className="px-3 py-2 button cursor d-flex justify-content-between"
                  style={{ borderBottom: "1px solid #E8E8E8" }}
                >
                  <div style={{ fontSize: "20px", fontWeight: "500" }}>
                    Job alerts
                    <p className="fs-6 fw-normal">analyst and others</p>
                  </div>
                  <div className="d-flex justify-content-end align-items-center w-25">
                    <i className="bi bi-arrow-right fs-3"></i>
                  </div>
                </div>
                <div
                  className="px-3 py-2 button cursor d-flex justify-content-between"
                  style={{ borderBottom: "1px solid #E8E8E8" }}
                >
                  <div style={{ fontSize: "20px", fontWeight: "500" }}>
                    Pay
                    <p className="fs-6 fw-normal">
                      Privately indicate desired pay
                    </p>
                  </div>
                  <div className="d-flex justify-content-end align-items-center w-25">
                    <i className="bi bi-arrow-right fs-3"></i>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Prefer;
