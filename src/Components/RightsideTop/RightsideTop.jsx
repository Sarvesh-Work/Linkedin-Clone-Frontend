import { Link } from "react-router-dom";
import "./RightsideTop.css";
import { Tooltip } from "react-tooltip";
import { useState } from "react";



const RightsideTop = () => {
    const [More,setMore]=useState("more")
    const ChangeLess=()=>{
        if(More==="more"){
            setMore("less")
        }
        else{
            setMore("more")
        }

    }
  return (
    <div className="w-100 ">
    <div className="container w-100 sections">
      <div className="row p-1 ">
        <div className="col-11 fs-5 fw-bold text-dark">Linkedin News</div>
        <div className="col-1 p-1">
          <i
            className="bi bi-info-square-fill fs-6 fw-bold"
            data-tooltip-id="my-tooltip-click"
          ></i>
          <Tooltip
            id="my-tooltip-click"
            content={`These are the day’s top professional news stories and conversations. Learn more about how they’re selected.`}
            events={["click"]}
            style={{
              width: "600px",
              backgroundColor: "#fff",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              color: "black",
              fontSize: "20px",
              fontWeight: "600",
            }}
          />
        </div>
      </div>
      <Link to="/news"
        id="News"
        className="row p-1 mt-2"
        style={{ textDecoration: "none" }}
      >
        <span className="col d-flex gap-3 ">
          <div className="p-1 text-dark">
            <i
              className="fa-solid fa-circle-dot "
              style={{ fontSize: "9px" }}
            ></i>
          </div>
          <div className="text-dark fs-6 fw-bold">
            15 Big Ideas that shape 2024
            <div className="fs-6 fw-normal" style={{ color: "gray" }}>
              Top news <i className="bi bi-dot"></i>1,270 readers
            </div>
          </div>
        </span>
      </Link>
      <Link to="/news" id="News" className="row p-1" style={{ textDecoration: "none" }}>
        <span className="col d-flex gap-3 ">
          <div className="p-1 text-dark">
            <i
              className="fa-solid fa-circle-dot "
              style={{ fontSize: "9px" }}
            ></i>
          </div>
          <div className="text-dark fs-6 fw-bold">
            Fintechs Lead in AI adoption
            <div className="fs-6 fw-normal" style={{ color: "gray" }}>
              2d ago <i className="bi bi-dot"></i>270 readers
            </div>
          </div>
        </span>
      </Link>
      <Link to="/news" id="News" className="row p-1" style={{ textDecoration: "none" }}>
        <span className="col d-flex gap-3 ">
          <div className="p-1 text-dark">
            <i
              className="fa-solid fa-circle-dot "
              style={{ fontSize: "9px" }}
            ></i>
          </div>
          <div className="text-dark fs-6 fw-bold">
            IT hiring more talent
            <div className="fs-6 fw-normal" style={{ color: "gray" }}>
              3d ago <i className="bi bi-dot"></i>1,200 readers
            </div>
          </div>
        </span>
      </Link>
      <Link to="/news" id="News" className="row p-1" style={{ textDecoration: "none" }}>
        <span className="col d-flex gap-3 ">
          <div className="p-1 text-dark">
            <i
              className="fa-solid fa-circle-dot "
              style={{ fontSize: "9px" }}
            ></i>
          </div>
          <div className="text-dark fs-6 fw-bold">
            Home on the horizon
            <div className="fs-6 fw-normal" style={{ color: "gray" }}>
              13hr ago <i className="bi bi-dot"></i>1,000 readers
            </div>
          </div>
        </span>
      </Link>
      <Link to="/news" id="News" className="row p-1" style={{ textDecoration: "none" }}>
        <span className="col d-flex gap-3 ">
          <div className="p-1 text-dark">
            <i
              className="fa-solid fa-circle-dot "
              style={{ fontSize: "9px" }}
            ></i>
          </div>
          <div className="text-dark fs-6 fw-bold">
            Macro Challenges?
            <div className="fs-6 fw-normal" style={{ color: "gray" }}>
              17hr ago <i className="bi bi-dot"></i>1,270 readers
            </div>
          </div>
        </span>
      </Link>
      
      <div className="collapse" id="collapseExample">
      <Link to="/news" id="News" className="row p-1" style={{ textDecoration: "none" }}>
        <span className="col d-flex gap-3 ">
          <div className="p-1 text-dark">
            <i
              className="fa-solid fa-circle-dot "
              style={{ fontSize: "9px" }}
            ></i>
          </div>
          <div className="text-dark fs-6 fw-bold">
            Fintechs Lead in AI adoption
            <div className="fs-6 fw-normal" style={{ color: "gray" }}>
              2d ago <i className="bi bi-dot"></i>270 readers
            </div>
          </div>
        </span>
      </Link>
      <Link to="/news" id="News" className="row p-1" style={{ textDecoration: "none" }}>
        <span className="col d-flex gap-3 ">
          <div className="p-1 text-dark">
            <i
              className="fa-solid fa-circle-dot "
              style={{ fontSize: "9px" }}
            ></i>
          </div>
          <div className="text-dark fs-6 fw-bold">
            IT hiring more talent
            <div className="fs-6 fw-normal" style={{ color: "gray" }}>
              3d ago <i className="bi bi-dot"></i>1,200 readers
            </div>
          </div>
        </span>
      </Link>
      <Link to="/news" id="News" className="row p-1" style={{ textDecoration: "none" }}>
        <span className="col d-flex gap-3 ">
          <div className="p-1 text-dark">
            <i
              className="fa-solid fa-circle-dot "
              style={{ fontSize: "9px" }}
            ></i>
          </div>
          <div className="text-dark fs-6 ">
            Home on the horizon
            <div className="fs-6 fw-normal" style={{ color: "gray" }}>
              13hr ago <i className="bi bi-dot"></i>1,000 readers
            </div>
          </div>
        </span>
      </Link>
      </div>
      <div className="row  p-3 ">
        <div
          
          className="col-xl-7 col-5 fs-6 fw-bold button rounded-2"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={ChangeLess}
          style={{cursor:"pointer"}}
        >
          Show {More} {More=="more"?<i className="fa-solid fa-chevron-down"></i>:<i className="fa-solid fa-chevron-up"></i>}
        </div>
      </div>



    </div  >
    </div>
  );
};

export default RightsideTop;
