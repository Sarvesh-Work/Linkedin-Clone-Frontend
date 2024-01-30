import ProfileImg from "../../images/10808dc6cd9b78f0153e68aae9942abc.jpg";

const EditTopLeft = () => {
  return (
    <div className="container-md container-fluid sections pb-3 ">
      <div className="row p-3 rounded-3" style={{ height: "160px",border:"2px solid #E8E8E8"}}>
        <div
          className="col-7 p-1 rounded-circle"
          style={{
            height: "200px",
            position: "absolute",
            width: "200px",
            left: "100px",
            top: "130px",
          }}
        >
          <img
            src={ProfileImg}
            alt=""
            className="h-100 w-100  rounded-circle"
          />
        </div>
        <div type="file"
          className=" ms-auto h-25  rounded-circle d-flex justify-content-center align-items-center"
          style={{ width: "35px",backgroundColor:"#fff" }}
        >
          <i className="fa-solid fa-pen fs-4 rounded-circle"></i>
        </div>
      </div>
      <div className="row mt-5 pt-5">
        <div className="col p-2 fw-bold fs-4">
          Sarvesh Munde
          <p className="fs-6 fw-normal">Software developer with ethics, have passionately curious about programming languages</p>
        </div>
      </div>
      <div className="row mt-2 p-1 d-flex flex-wrap gap-md-3">
        <div className="col-md-2 col-12 fs-5 fw-bold p-1 text-center  cursor  text-white bg-primary rounded-pill">
          Open to
        </div>
        <div
          className="col-md-5 col-xxl-3 col-8 fs-5 fw-bold mt-md-0 mt-1 p-1 cursor   text-center text-primary  rounded-pill"
          style={{ border: "2px solid #0D6EFD" }}
        >
          Add profile section
        </div>
        <div
          className="col-md-2  col-3 fs-5 fw-bold  mt-md-0 mt-1 mx-md-0 mx-2 p-1  cursor  text-center  rounded-pill"
          style={{ border: "2px solid #3B3B3B", color: "#99985E" }}
        >
          More
        </div>
      </div>
      <div className="row mt-3 p-1  ">
        <div
          className="col-md-9 col-12 p-2 px-3"
          style={{ backgroundColor: "#DDE7F1",borderRadius:"10px" } }
        >
          <div className="d-flex justify-content-between">
            <div className="fw-bold fs-6">Open to Work</div>
            <div>
              <i className="fa-solid fa-pen fs-5 rounded-circle"></i>
            </div>
          </div>
           <div className="fs-6">
               Assistant, Associate, Administrative Assistant, Sales Specialist and Analyst roles
           </div>
           <div className="fs-6 fw-bold text-primary">
               
                    Show details
           </div>
        </div>
      </div>
    </div>
  );
};

export default EditTopLeft;
