import { Link } from "react-router-dom"


const LeftBottom = () => {
  return (
    <div className="container sections p-0 mt-2" >
     
      <Link
        className="row  mx-0 p-2 mt-1 d-flex justify-content-center"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            borderTopRightRadius:"9px",
            borderTopLeftRadius:"9px",
            
        }}
      >
        <div className="row p-2">
          <div className="col fw-bold " style={{color:"#0D68C3"}}>Groups</div>
        </div>
      </Link>
      <Link
        className="row  mx-0 p-2 d-flex justify-content-center"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            
        }}
      >
        <div className="row p-2">
          <div className="col fw-bold " style={{color:"#0D68C3"}}>Events</div>
        </div>
      </Link>
      <Link
        className="row  mx-0 p-2  d-flex justify-content-center"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            
        }}
      >
        <div className="row p-2">
          <div className="col fw-bold " style={{color:"#0D68C3"}}>Followed By</div>
        </div>
      </Link>
      <Link
        className="row button mx-0 p-2  d-flex justify-content-center"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            borderBottomRightRadius:"9px",
            borderBottomLeftRadius:"9px",
            
        }}
      >
        <div className="row p-2">
          <div className="col  text-center fs-5" style={{ color: "#5E5E5E" }} >Discover more</div>
        </div>
      </Link>
    </div>
  )
}

export default LeftBottom