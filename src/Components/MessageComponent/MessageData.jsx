import { useState } from "react";
import img from "../../images/53-533248_cartoon-person-without-face-person-cartoon-hd-png.png";
const MessageData = () => {
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
  };

  const [messageStyle1, setMessageStyle1] = useState({
    borderLeft: "7px solid #01754F",
    backgroundColor: "#EDF3F8",
  });
  const [messageStyle2, setMessageStyle2] = useState();
  const [messageStyle3, setMessageStyle3] = useState();
  const [messageStyle4, setMessageStyle4] = useState();

  return (
    <div className="container-fluid p-0">
      <div className="row sections mx-0" style={{ overflow: "hidden" }}>
        <div
          className="col-lg-5 p-1 px-0"
          style={{
            borderRight: "1px solid #E8E8E8",
            height: "608px",
          }}
        >
          <div
            className="d-flex d-flex justify-content-between py-2 px-3"
            style={{ borderBottom: "1px solid #E8E8E8" }}
          >
            <div>
              <div style={{ fontSize: "20px", fontWeight: "500" }}>
                Messaging
              </div>
            </div>
            <div className="d-flex gap-3 p-0 m-0">
              <div
                className=" cursor"
                style={{ fontSize: "25px", color: "#666666" }}
              >
                <i className="fa-solid fa-ellipsis px-2"></i>
              </div>
              <div
                className=" cursor"
                style={{ fontSize: "25px", color: "#666666" }}
              >
                <i className="fa-solid fa-pen-to-square px-2"></i>
              </div>
            </div>
          </div>

          <nav>
          <form class="d-flex p-1 mt-2">
        <input class="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search"/>
       
       </form>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <div
                className="w-50 text-center p-2 cursor "
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
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
                data-bs-target="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
                style={Style1}
                onClick={active1}
              >
                Other
              </div>
            </div>
          </nav>

          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              style={{
                overflowY: "scroll",
                height: "500px",
                overflowX: "hidden",
              }}
            >
              <div
                className="nav flex-column nav-pills me-3 w-100"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <div
                  className="button p-3 cursor"
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
                          height: "60px",
                          width: "60px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div>
                      <div className="fs-5 fw-bold">Linkedin Member</div>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sapiente autem, nam, debitis
                    </div>
                    <div>13jan</div>
                  </div>
                </div>
                <div
                  className="button p-3 cursor"
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
                          height: "60px",
                          width: "60px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div>
                      <div className="fs-5 fw-bold">Linkedin Member</div>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sapiente autem, nam, debitis
                    </div>
                    <div>13jan</div>
                  </div>
                </div>
                <div
                  className="button p-3 cursor"
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
                          height: "60px",
                          width: "60px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div>
                      <div className="fs-5 fw-bold">Linkedin Member</div>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sapiente autem, nam, debitis
                    </div>
                    <div>13jan</div>
                  </div>
                </div>
                <div
                  className="button p-3 cursor"
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
                          height: "60px",
                          width: "60px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div>
                      <div className="fs-5 fw-bold">Linkedin Member</div>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sapiente autem, nam, debitis
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
              className="tab-pane fade flex-column mb-5 d-flex justify-content-center align-items-center"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
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
        <div className="col-lg-7 mx-0 p-0 mt-lg-0 mt-2">
          <div
            className="d-flex d-flex justify-content-between py-2 px-3"
            style={{ borderBottom: "1px solid #E8E8E8" }}
          >
            <div className="mt-1">
              <div style={{ fontSize: "20px", fontWeight: "500" }}>
                LinkedIn Member
              </div>
            </div>
            <div className="d-flex gap-3 p-0 m-0">
              <div
                className=" cursor "
                style={{ fontSize: "25px", color: "#666666" }}
              >
                <i className="fa-solid fa-ellipsis px-2"></i>
              </div>
              <div
                className=" cursor"
                style={{ fontSize: "25px", color: "#666666" }}
              >
                <i class="fa-regular fa-star px-2"></i>
              </div>
            </div>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active p-2"
              id="v-pills-data1"
              role="tabpanel"
              aria-labelledby="v-pills-data1-tab"
            >
              <div className="mt-2 d-flex gap-2">
                <div className="d-flex align-items-center p-1">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6hsv0ZBAHf752_NiIQBj6yzWtxP2lTJZNfA&usqp=CAU"
                    alt=""
                    style={{ height: "60px", width: "60px" }}
                  />
                </div>
                <div
                  className=""
                  style={{ fontSize: "20px", fontWeight: "500" }}
                >
                  Group Education
                  <div className="mt-2 fw-normal fs-6">Hi Sarvesh</div>
                </div>
              </div>
              <div className="p-3">
                <div className="mt-3">
                  Are you enthusiastic about the prospect of pursuing your
                  education in the UK/Ireland?
                </div>
                <div className="mt-3">
                  With our 18 years of experience, we provide expert guidance to
                  help you make the best choices! From selecting the appropriate
                  course at a prestigious university to effectively managing
                  your finances, we offer comprehensive advice on all aspects.
                </div>
                <div className="mt-3">
                  More than 35,000 students have successfully realized their
                  dreams with our assistance. Now, it's your turn to join the
                  ranks of the best! Don't settle for less when you can achieve
                  the finest with Fateh.
                </div>
                <div className="mt-3">Enroll now for the Jan 2024 intake!</div>
              </div>
            </div>
            <div
              className="tab-pane fade p-2"
              id="v-pills-data2"
              role="tabpanel"
              aria-labelledby="v-pills-data2-tab"
            >
              <div className="mt-2 d-flex gap-2">
                <div className="d-flex align-items-center p-1">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOq5MiB-tN9H6Pf3BFm9vDBsd0EcuezMOiQ&usqp=CAU"
                    alt=""
                    style={{ height: "60px", width: "60px" }}
                  />
                </div>
                <div
                  className=""
                  style={{ fontSize: "20px", fontWeight: "500" }}
                >
                  Group Education
                  <div className="mt-2 fw-normal fs-6">Hi Sarvesh</div>
                </div>
              </div>
              <div className="p-3">
                <div className="mt-3">
                  Are you enthusiastic about the prospect of pursuing your
                  education in the UK/Ireland?
                </div>
                <div className="mt-3">
                  With our 18 years of experience, we provide expert guidance to
                  help you make the best choices! From selecting the appropriate
                  course at a prestigious university to effectively managing
                  your finances, we offer comprehensive advice on all aspects.
                </div>
                <div className="mt-3">
                  More than 35,000 students have successfully realized their
                  dreams with our assistance. Now, it's your turn to join the
                  ranks of the best! Don't settle for less when you can achieve
                  the finest with Fateh.
                </div>
                <div className="mt-3">Enroll now for the Jan 2024 intake!</div>
              </div>
            </div>
            <div
              className="tab-pane fade p-2"
              id="v-pills-data3"
              role="tabpanel"
              aria-labelledby="v-pills-data3-tab"
            >
              <div className="mt-2 d-flex gap-2">
                <div className="d-flex align-items-center p-1">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj47WLQcZqHbaoHlnDbLEH2SEJg7eOHgzTjA&usqp=CAU"
                    alt=""
                    style={{ height: "60px", width: "60px" }}
                  />
                </div>
                <div
                  className=""
                  style={{ fontSize: "20px", fontWeight: "500" }}
                >
                  Group Education
                  <div className="mt-2 fw-normal fs-6">Hi Sarvesh</div>
                </div>
              </div>
              <div className="p-3">
                <div className="mt-3">
                  Are you enthusiastic about the prospect of pursuing your
                  education in the UK/Ireland?
                </div>
                <div className="mt-3">
                  With our 18 years of experience, we provide expert guidance to
                  help you make the best choices! From selecting the appropriate
                  course at a prestigious university to effectively managing
                  your finances, we offer comprehensive advice on all aspects.
                </div>
                <div className="mt-3">
                  More than 35,000 students have successfully realized their
                  dreams with our assistance. Now, it's your turn to join the
                  ranks of the best! Don't settle for less when you can achieve
                  the finest with Fateh.
                </div>
                <div className="mt-3">Enroll now for the Jan 2024 intake!</div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-data4"
              role="tabpanel"
              aria-labelledby="v-pills-data4-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageData;
