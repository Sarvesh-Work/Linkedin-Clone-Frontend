

const RightTop = () => {
  return (
    <div className="container-md container-fluid sections">
       <div className="row p-1 pt-3 d-flex justify-content-between">
          <div className="col-9 fs-5 fw-bold ">
            Profile language
            <div className="fs-6 fw-normal" style={{color:"gray"}}>English</div>
          </div>
          <div className="col-2 p-1  pt-2 "  >
            <i className="fa-solid fa-pen fs-5 mx-2"></i>
          </div>
       </div>
       <div className="row mt-3" style={{height:"1px",backgroundColor:"#E8E8E8"}}>
    
       </div>
       <div className="row p-1 pt-2 d-flex justify-content-between mt-2">
          <div className="col-9 fs-5 fw-bold ">
             Public profile & URL
            <div className="fs-6 fw-normal" style={{color:"gray"}}>www.linkedin.com/in/sarvesh-munde</div>
          </div>
          <div className="col-2 p-1 pt-2 "  >
            <i className="fa-solid fa-pen fs-5 mx-2"></i>
          </div>
       </div>
    </div>
  )
}

export default RightTop