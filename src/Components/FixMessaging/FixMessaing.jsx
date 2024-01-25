
import { useState } from "react";
import ProfileImg from "../../images/10808dc6cd9b78f0153e68aae9942abc.jpg";
import img from "../../images/53-533248_cartoon-person-without-face-person-cartoon-hd-png.png";
const FixMessaing = () => {
  const [arrow,setArrow]=useState(true)

  const [Style, setStyle] = useState({
    color: "#14A44D",
    borderBottom: "4px solid #14A44D",
    backgroundColor: "white",
    fontSize: "20px",
    fontWeight: "500",
    borderRadius: "none",
  });
  const [Style1, setStyle1] = useState({
    backgroundColor: "white",
    color: "black",
    fontSize: "20px",
    fontWeight: "500",
  });
  const active = () => {
    setStyle({
      color: "#14A44D",
      borderBottom: "4px solid #14A44D",
      backgroundColor: "white",
      fontSize: "20px",
      fontWeight: "500",
      borderRadius: "none",
    });
    setStyle1({
      backgroundColor: "white",
      color: "black",
      fontSize: "20px",
      fontWeight: "500",
      borderRadius: "none",
    });
    if(display=="inline"){
      setdisplay("none")
    }
  };
  const active1 = () => {
    setStyle1({
      color: "#14A44D",
      borderBottom: "4px solid #14A44D",
      backgroundColor: "white",
      fontSize: "20px",
      fontWeight: "500",
      borderRadius: "none",
    });
    setStyle({
      backgroundColor: "white",
      color: "black",
      fontSize: "20px",
      fontWeight: "500",
      borderRadius: "none",
    });
    if(display=="none"){
      setdisplay("inline")
    }
  };


  const [messageStyle1, setMessageStyle1] = useState({
    borderLeft: "7px solid #01754F",
    backgroundColor: "#EDF3F8",
  });
  const [messageStyle2, setMessageStyle2] = useState();
  const [messageStyle3, setMessageStyle3] = useState();
  const [messageStyle4, setMessageStyle4] = useState();

  const [display,setdisplay]=useState("none")


  return (
    <div className="accordion fixed-bottom d-lg-inline d-none ms-auto mx-2" id="accordionExample" style={{width:"330px",overflow:"hidden",zIndex:"2"}}>
  <div id="messaging" className="accordion-item "  style={{overflow:"hidden"}}>
    <h2 className="accordion-header" id="headingTwo">
      <div id="message-open" className="accordion collapsed px-2 py-1 d-flex justify-content-between"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" 
      onClick={()=>{
        setArrow(false)
        if(arrow==false){
            setArrow(true)
        }
      }}
      >
      <div className=" d-flex gap-2 justify-content-center align-items-center">
          <img
            src={ProfileImg}
            alt=""
            className=" rounded-circle"
            style={{ height: "45px", width: "45px" }}
          />
          <div className=" text-dark" style={{fontSize:"17px",fontWeight:"500"}}>
            Messaging
          </div>
        </div>
        <div className=" d-flex justify-content-center align-items-center px-2 gap-2">
               <div
                className=" cursor "
                style={{ fontSize: "20px", color: "#666666" }}
              >
                <i className="fa-solid fa-ellipsis px-2"></i>
              </div>
              <div
                className=" cursor"
                style={{ fontSize: "20px", color: "#666666" }}
              >
                <i className="fa-solid fa-pen-to-square px-2"></i>
              </div>
         {
            arrow ? <i className="bi bi-chevron-compact-up fs-4"></i>:<i className="bi bi-chevron-compact-down fs-4"></i>
         }
        </div>
      </div>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body p-1">
        <div>
        <form class="d-flex p-1 mt-1">
        <input class="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search"/>
       
       </form>
       <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <div
                className="w-50 text-center p-2 cursor "
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home1"
                type="button"
                role="tab"
                aria-controls="nav-home1"
                aria-selected="true"
                style={Style}
                onClick={active}
              >
                Focused
              </div>
              <div
                className=" w-50 text-center p-2 cursor"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile1"
                role="tab"
                aria-controls="nav-profile1"
                aria-selected="false"
                style={Style1}
                onClick={active1}
              >
                Other
              </div>


              <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home1"
              role="tabpanel"
              aria-labelledby="nav-home1-tab"
              style={{
                overflowY: "scroll",
                height: "400px",
                overflowX: "hidden",
              }}
            >
              <div
                className="nav flex-column nav-pills me-3 w-100 p-0"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <div
                  className="button p-0 cursor w-100 "
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-data1"
                  role="tab"
                  aria-controls="v-pills-data1"
                  aria-selected="true"
                  style={messageStyle1}
                  onClick={() => {
                    if (messageStyle1 == null) {
                      setMessageStyle1({
                        borderLeft: "7px solid #01754F",
                        backgroundColor: "#EDF3F8",
                      });
                      setMessageStyle2(null);
                      setMessageStyle3(null);
                      setMessageStyle4(null);
                    }
                  }}
                >
                  <div className="d-flex">
                    <div className="d-flex align-items-center p-1">
                      <img
                        src={img}
                        alt=""
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div>
                      <div className="" style={{fontSize:"20px",fontWeight:"500"}}>Linkedin Member</div>
                      <div className="" style={{fontSize:"15px"}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sapiente autem, nam, debitis</div>
                    </div>
                    <div>13jan</div>
                  </div>
                </div>
                <div
                  className="button p-0 cursor"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-data2"
                  role="tab"
                  aria-controls="v-pills-data2"
                  aria-selected="false"
                  style={messageStyle2}
                  onClick={() => {
                    setMessageStyle2({
                      borderLeft: "7px solid #01754F",
                      backgroundColor: "#EDF3F8",
                    });
                    setMessageStyle1(null);
                    setMessageStyle3(null);
                    setMessageStyle4(null);
                  }}
                >
                  <div className="d-flex">
                    <div className="d-flex align-items-center p-1">
                      <img
                        src={img}
                        alt=""
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div>
                      <div className="" style={{fontSize:"20px",fontWeight:"500"}}>Linkedin Member</div>
                      <div className="" style={{fontSize:"15px"}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sapiente autem, nam, debitis</div>
                    </div>
                    <div>13jan</div>
                  </div>
                </div>
                <div
                  className="button p-0 cursor"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-data3"
                  role="tab"
                  aria-controls="v-pills-data3"
                  aria-selected="false"
                  style={messageStyle3}
                  onClick={() => {
                    setMessageStyle3({
                      borderLeft: "7px solid #01754F",
                      backgroundColor: "#EDF3F8",
                    });
                    setMessageStyle1(null);
                    setMessageStyle2(null);
                    setMessageStyle4(null);
                  }}
                >
                  <div className="d-flex">
                    <div className="d-flex align-items-center p-1">
                      <img
                        src={img}
                        alt=""
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div>
                      <div className="" style={{fontSize:"20px",fontWeight:"500"}}>Linkedin Member</div>
                      <div className="" style={{fontSize:"15px"}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sapiente autem, nam, debitis</div>
                    </div>
                    <div>13jan</div>
                  </div>
                </div>
                <div
                  className="button p-0 cursor"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-data4"
                  role="tab"
                  aria-controls="v-pills-data4"
                  aria-selected="false"
                  style={messageStyle4}
                  onClick={() => {
                    setMessageStyle4({
                      borderLeft: "7px solid #01754F",
                      backgroundColor: "#EDF3F8",
                    });
                    setMessageStyle1(null);
                    setMessageStyle3(null);
                    setMessageStyle2(null);
                  }}
                >
                  <div className="d-flex">
                    <div className="d-flex align-items-center p-1">
                      <img
                        src={img}
                        alt=""
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div>
                      <div className="" style={{fontSize:"20px",fontWeight:"500"}}>Linkedin Member</div>
                      <div className="" style={{fontSize:"15px"}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sapiente autem, nam, debitis</div>
                    </div>
                    <div>13jan</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="fs-5 fw-bold text-center p-2">
                  Load more conversations
                </div>
              </div>
            </div>

            {/* other components */}
            <div
              className={`tab-pane d-${display}  fade mt-0 flex-column mb-5 d-flex justify-content-center align-items-center`}
              id="nav-profile1"
              role="tabpanel"
              aria-labelledby="nav-profile1-tab"
            >
              <div className="mt-4">
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/eeol4w9o9de2j4gq699mzx79d"
                  alt=""
                />
              </div>
              <div className="fs-3 fw-bold">No Message yet</div>
              <p className="fs-5 p-2 text-center" style={{ color: "gray" }}>
                Reach out and start a conversation to advance your career
              </p>
              <div
                className="px-3  p-1  fs-5 fw-bold  mt-md-0 mt-1 mx-md-0 mx-2  cursor  text-center  rounded-pill"
                style={{ border: "2px solid #3B3B3B" }}
              >
                Send a Message
              </div>
            </div>
           
          </div>
          
          
         </div>
           
       
        </div>
      </div>
    </div>
  </div>
 
</div>
  )
}

export default FixMessaing