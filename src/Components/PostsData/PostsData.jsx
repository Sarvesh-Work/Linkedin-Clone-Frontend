import ProfileImg from "../../images/10808dc6cd9b78f0153e68aae9942abc.jpg";
import PostImg from "../../images/pexels-paras-katwal-4218883.jpg";
import PostImg2 from "../../images/10808dc6cd9b78f0153e68aae9942abc.jpg"
const PostsData = () => {
  return (
    <>
      <div
        className="container mt-3"
        style={{ height: "2px", backgroundColor: "#BEBDBA" }}
      ></div>

      <div className="container sections ">
        <div
          className="row mt-3 pt-1 p-1 d-flex justify-content-between"
          style={{ borderBottom: "1px solid #BEBDBA" }}
        >
          <div className="col-2 p-0 d-flex justify-content-center align-items-center">
            <div className="h-75">Suggested</div>
          </div>
          <div className="col-md-2 col-3 d-flex gap-2 mx-3">
            <div className="px-2  button" style={{ borderRadius: "50px" }}>
              <i className="bi bi-three-dots fs-3"></i>
            </div>
            <div
              className=" px-2 rounded-circle button "
              style={{ borderRadius: "50px" }}
            >
              <i className="bi bi-x fs-3  " style={{ cursor: "pointer" }}></i>
            </div>
          </div>
        </div>
        <div className="row mt-3  d-flex justify-content-between">
          <div className="col-md-6 col-8 d-flex p-0 align-items-center">
            <img
              src={ProfileImg}
              alt=""
              className=" rounded-circle"
              style={{ height: "60px", width: "60px" }}
            />
            <div className="mx-2">
              <div className="fw-bold fs-6 ">Sarvesh Munde</div>
              <div className="fs-6">Frontend Developer</div>
              <div className="fs-6">
                2d<i className="fa-solid fa-earth-americas mx-1"></i>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-end p-1">
            <div
              className="text-center p-2 fs-5 fw-bold Blue rounded"
              style={{ color: "#0A66C2",cursor:"pointer" }}
            >
               Follow
            </div>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-12 p-0">
            <img src={PostImg} alt="" className="img-fluid rounded-3" />
          </div>
        </div>
        <div className="row mt-2" style={{height:"2px",backgroundColor:"#BEBDBA"}}>

        </div>
        <div className="row p-2  ">
          <div className="col-3 button p-1  text-center rounded-3 cursor" >
            <i className="bi bi-hand-thumbs-up mx-1 fs-5 "></i>Like
          </div>
          <div className="col-3 button p-1 text-center rounded-3 cursor">
          <i className="bi bi-chat mx-1 fs-5"></i>Comment</div>
          <div className="col-3 button p-1 text-center rounded-3 cursor">
          <i className="bi bi-arrow-repeat mx-1 fs-5"></i> Repost</div>
          <div className="col-3 p-1 button text-center rounded-3 cursor">
          <i className="bi bi-send mx-1 fs-5"></i>Send</div>
        </div>
      </div>
      <div className="container sections ">
        <div
          className="row mt-3 pt-1 p-1 d-flex justify-content-between"
          style={{ borderBottom: "1px solid #BEBDBA" }}
        >
          <div className="col-2 p-0 d-flex justify-content-center align-items-center">
            <div className="h-75">Suggested</div>
          </div>
          <div className="col-md-2 col-3 d-flex gap-2 mx-3">
            <div className="px-2  button" style={{ borderRadius: "50px" }}>
              <i className="bi bi-three-dots fs-3"></i>
            </div>
            <div
              className=" px-2 rounded-circle button "
              style={{ borderRadius: "50px" }}
            >
              <i className="bi bi-x fs-3  " style={{ cursor: "pointer" }}></i>
            </div>
          </div>
        </div>
        <div className="row mt-3  d-flex justify-content-between">
          <div className="col-md-6 col-8 d-flex p-0 align-items-center">
            <img
              src={ProfileImg}
              alt=""
              className=" rounded-circle"
              style={{ height: "60px", width: "60px" }}
            />
            <div className="mx-2">
              <div className="fw-bold fs-6 ">Max Rock</div>
              <div className="fs-6">Frontend Developer</div>
              <div className="fs-6">
                2d<i className="fa-solid fa-earth-americas mx-1"></i>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-end p-1">
            <div
              className="text-center p-2 fs-5 fw-bold Blue rounded"
              style={{ color: "#0A66C2",cursor:"pointer" }}
            >
               Follow
            </div>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-12 p-0">
            <img src={PostImg2} alt="" className="img-fluid rounded-3" />
          </div>
        </div>
        <div className="row mt-2" style={{height:"2px",backgroundColor:"#BEBDBA"}}>

        </div>
        <div className="row p-2  ">
          <div className="col-3 button p-1  text-center rounded-3 cursor" >
            <i className="bi bi-hand-thumbs-up mx-1 fs-md-3 fs-5 "></i>Like
          </div>
          <div className="col-3 button p-1 text-center rounded-3 cursor">
          <i className="bi bi-chat mx-1 fs-md-3 fs-5"></i>Comment</div>
          <div className="col-3 button p-1 text-center rounded-3 cursor">
          <i className="bi bi-arrow-repeat mx-1 fs-md-3 fs-5"></i> Repost</div>
          <div className="col-3 p-1 button text-center rounded-3 cursor">
          <i className="bi bi-send mx-1 fs-md-3 fs-5"></i>Send</div>
        </div>
      </div>
    </>
  );
};

export default PostsData;
