import { useState } from "react";
import Event from "../Event/Event";
import CardImg1 from "../../images/1698259411756.jpg"
import CardImg2 from "../../images/1698120878938.png"
import CardImg3 from "../../images/1699320707683.png"

const EventPage = () => {
  const [Loading, setLoading] = useState(true);
  setInterval(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      {Loading ? (
        <div className="spinner-border mt-4 mx-auto" role="status"></div>
      ) : (
        <div className="container mt-3 px-4">
          <div className="row  sections py-3 px-3 d-flex justify-content-between">
            <div className="col-4   fs-1" style={{ fontWeight: "500" }}>
              Events
            </div>
            <div className="col-sm-4  col-8  d-flex justify-content-center align-items-center">
              <div
                className="fs-4 text-center rounded-pill px-2 cursor ms-auto"
                style={{ border: "2px solid #0A66C2", color: "#0A66C2" }}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop1"
              >
                Create an event
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
              <Event></Event>
            </div>
          </div>
          <div className="row mt-3 sections py-3 px-3 d-flex justify-content-between">
            <div className="col-4   fs-4 py-2" style={{ fontWeight: "500" }}>
              Your events
            </div>
          </div>
          <div className="row mt-3 sections py-3 px-3 d-flex justify-content-between">
            <div className="col-md-4   fs-4 py-2" style={{ fontWeight: "500" }}>
              Top Audio Events
            </div>
            <div className="row p-1">
              <div className="col-md-4 mt-md-0 mt-2">
                <div className="card section" style={{ width: " 18rem;" }}>
                  <img src={CardImg1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Jayson E Street - Author & World Famous Hacker Reveals All - Unfiltered</h5>
                    <p className="card-text">
                    Fri, Jan 26, 2024, 2:30 AM  Live Audio
                    </p>
                    <div href="#" className=" w-100 rounded-pill text-center p-1 fs-5" style={{ border: "2px solid #0A66C2", color: "#0A66C2" }}>
                      View
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-md-0 mt-2">
                <div className="card section" style={{ width: " 18rem;" }}>
                  <img src={CardImg2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">In this The DAVID & GOLIATH framework for growing a Service-based </h5>
                    <p className="card-text">
                    Sat, Jan 20, 2024, 7:30 PM  Live Audio
                    </p>
                    <div href="#" className=" w-100 rounded-pill text-center p-1 fs-5" style={{ border: "2px solid #0A66C2", color: "#0A66C2" }}>
                      View
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-md-0 mt-2">
                <div className="card section" style={{ width: " 18rem;" }}>
                  <img src={CardImg3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">FEMALE FORWARD 7. Breaking through the Boys' Club. Thrive as the Only </h5>
                    <p className="card-text">
                    Fri, Jan 19, 2024, 9:30 PM  Live Audio
                    </p>
                    <div href="#" className=" w-100 rounded-pill text-center p-1 fs-5" style={{ border: "2px solid #0A66C2", color: "#0A66C2" }}>
                      View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventPage;
