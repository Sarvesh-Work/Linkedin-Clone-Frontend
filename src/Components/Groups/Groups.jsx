// import { NavLink } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
// import NaveBar from '../NaveBar';

import { useState } from "react";
import Img from "../../images/images.jpg"

const Groups = () => {
    const [Style,setStyle]=useState({color:"#14A44D",borderBottom:"4px solid #14A44D",backgroundColor:"white",fontSize:"20px",fontWeight:"500",borderRadius:"none"})
    const [Style1,setStyle1]=useState({backgroundColor:"white",color:"black",fontSize:"20px",fontWeight:"500"})
    const active=()=>{
           setStyle({color:"#14A44D",borderBottom:"4px solid #14A44D",backgroundColor:"white",fontSize:"20px",fontWeight:"500",borderRadius:"none"})
           setStyle1({backgroundColor:"white",color:"black",fontSize:"20px",fontWeight:"500",borderRadius:"none"})
    }
    const active1=()=>{
        setStyle1({color:"#14A44D",borderBottom:"4px solid #14A44D",backgroundColor:"white",fontSize:"20px",fontWeight:"500",borderRadius:"none"})
        setStyle({backgroundColor:"white",color:"black",fontSize:"20px",fontWeight:"500",borderRadius:"none"})
 }
  return (
    <>
      {/* <NaveBar/> */}
      <div className="container-fluid   mt-3 px-md-4 " >
        <div className="row px-md-0 px-3  gap-3 d-flex justify-content-center">
          <div className="col-lg-8 sections p-3">
            {/* <div className="d-flex gap-4">
                   <NavLink to="/YourGroups" className='fs-5 active ' style={{fontWeight:"500"}}>Your groups</NavLink>
                   <NavLink to="/Requests" className='fs-5 ' style={{fontWeight:"500"}}>Requested</NavLink>
                </div>
                <section className='w-100 p-1 mt-4'>
                     
                     <Outlet/>
                </section> */}
            <ul className="nav nav-pills  gap-md-1 d-flex row" id="pills-tab" role="tablist">
              <li className="nav-item col-md-3 col-6 " role="presentation">
                <button
                  className="nav-link rounded-0  mx-auto"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  style={Style}
                  onClick={active}
                 
                  
                >
                 Your groups
                </button>
              </li>
              <li className="nav-item col-md-2 col-6" role="presentation">
                <button
                  className="nav-link rounded-0"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  style={Style1}
                  onClick={active1}
                >
                  Requested
                </button>
              </li>
               
             <div className="ms-auto mt-md-0  mt-2 col-md-3 ">
             <div href="#" className="cursor mt-1 text-center rounded-pill text-center p-1 fs-5" style={{ border: "2px solid #0A66C2", color: "#0A66C2" }}>
                     Create group
              </div>
             </div>
              
            </ul>
            <div className="row mt-md-0 mt-2" style={{backgroundColor:"#E8E8E8",height:"1px"}}>

            </div>
            <div className="tab-content p-2" id="pills-tabContent">
              <div
                className="tab-pane fade show active "
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                 <div className="fs-5 text-center">
                   <span className="text-primary">Search</span> other trusted communities that share and support your goals.
                 </div>
                  <div className="mt-3 d-flex justify-content-center align-items-center flex-column">
                     <div>
                        <img src={Img} alt="" />
                     </div>
                     <div className="mt-1 " style={{fontSize:"30px",fontWeight:"500"}}>
                        Discover groups
                     </div>
                     <div className="text-center mt-3 w-50" style={{fontSize:"20px"}}>
                         Find other trusted communities that share and support your goals.
                     </div>
                     <div href="#" className="w-50 text-center mt-3 rounded-pill text-center p-1 fs-5" style={{ border: "2px solid #0A66C2", color: "#0A66C2" }}>
                     Discover
                    </div>

                 </div>
              </div>
              <div
                className="tab-pane fade px-1 fs-5 " 
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                 <div className="sections p-1 text-center mt-3">
                 To help you focus on the best communities for you, we limit your total number of pending requests to join. <a href="https://www.linkedin.com/help/linkedin/answer/a544801" className="text-primary">Learn More</a>
                 </div>
                 <div className="mt-3 d-flex justify-content-center align-items-center flex-column">
                     <div>
                        <img src={Img} alt="" />
                     </div>
                     <div className="mt-1 " style={{fontSize:"30px",fontWeight:"500"}}>
                        Discover groups
                     </div>
                     <div className="text-center mt-3 w-50" style={{fontSize:"20px"}}>
                         Find other trusted communities that share and support your goals.
                     </div>
                     <div href="#" className=" w-50 text-center mt-3 rounded-pill text-center p-1 fs-5" style={{ border: "2px solid #0A66C2", color: "#0A66C2" }}>
                     Discover
                    </div>

                 </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                ...
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 text-center sections px-3 p-1 "
            style={{ fontSize: "18px", fontWeight: "500" ,height:"100px"}}
          >
            <div> Groups you might be interested in</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
