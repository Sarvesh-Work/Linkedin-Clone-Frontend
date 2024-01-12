
import img from "../../images/attractive-man-smiling_388558-125.avif"
import img1 from "../../images/1631328654457.jpeg"
import { Link } from "react-router-dom"

const RightsideBottom = () => {
  return (
    <>
     <div id="Bottom" className="container sticky-top  mt-2 w-100  p-3 sections" style={{zIndex:"1",top:"70px"}}>
        <div className="row p-1  ">
            <div className=" col-1 fs-6  ms-auto text-center">
                Ad
            </div>
            <div className=" col-1 fs-6 text-center">
            <i className="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div className="row">
            <div className="col text-center fs-6 " style={{color:"gray"}}>
            Opportunities are knocking on your door
            </div>
        </div>
        <div className="row mt-3 d-flex justify-content-center gap-3">
            <div className="col-3   w-25 h-50" >
                 <img src={img} alt=""  className="w-100 h-100 col-3 rounded-circle" style={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}/>
            </div>
            <div className="col-3 w-25 h-25">
                <img src={img1} alt="" className="w-100 h-100" />
            </div> 
        </div>
        <div className="row mt-3">
            <div className="col text-center p-2 fs-6" style={{color:"gray"}}>
            Rock, <span style={{color:"black"}}>aramco</span> is hiring!
            </div>
        </div>

        <div className="row mt-1  d-flex justify-content-center mt-2 mb-3">
            <Link to="/news" className="col-4 text-center p-1 px-3  fs-6 fw-bold" style={{border:"1px solid #0096FF",color:"#0096FF",borderRadius:"30px",cursor:"pointer",textDecoration:"none"}}>
                Follow
            </Link>
        </div>
    </div> 
    <div className="text-center sticky-top " style={{zIndex:"1",top:"380px"}} >
                    <div className="d-flex flex-wrap justify-content-around m-3 p-2 text-center" style={{ cursor: "pointer" }}>
                      <p className="mx-2">About</p>
                      <p>Accessibility</p>
                      <p>Help Center</p>
                      <p>Privacy & Terms </p>
                      <p>Ad Choices</p>
                      <p>Advertising</p>
                      <p>Business Services</p>
                      <p>Get the LinkedIn app</p>
                      <p>More</p>
                    </div>
      </div>
     </>
  )
}

export default RightsideBottom