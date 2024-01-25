import React from "react";
import img1 from "../../images/images.jpeg"
import img2 from "../../images/images (1).jpeg"
import img3 from "../../images/download.jpeg"
import img4  from "../../images/advertise-us-260nw-585720740.webp"
import img5 from "../../images/depositphotos_103919214-stock-photo-hand-writing-the-text.jpg"
import img6  from "../../images/reference-groups.webp"

const Business = () => {
    const data=[
        {
            name:"Learning ",
            img:img1
        },
        {
            name:"Talent Insights",
            img:img2
        },
        {
            name:"Post a job",
            img:img3
        },
        {
            name:"Advertise",
            img:img4
        },
        {
            name:"Find New Clients  ",
            img:img5
        },
        {
            name:"Groups            ",
            img:img6
        },
    ]

    const  ExploreData=[
        {
            tag:"Hire on LinkedIn  "
        },
        {
            tag:"Sell with LinkedIn            "
        },
        {
            tag:"Post a job for free"
        },
        {
            tag:"Advertise on LinkedIn"
        },
        {
            tag:"Learn with LinkedIn"
        },
        {
            tag:"Admin Center "
        },
    ]
  return (
    <div>
      <div class="offcanvas-header ">
        <h2 id="offcanvasRightLabel">For Business</h2>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body" style={{overflowY:"scroll",height:"570px"}}>
         <div className="container  mx-0">
            <div className="row sections">
                <h4 className="col-12 py-3 px-2" style={{borderBottom:"1px solid #E8E8E8"}}>
                    Visit More LinkedIn Products
                </h4>
                <div className="col-12 d-flex flex-wrap justify-content-around">
                      {
                        data.map((e)=>(
                            <div key={e.name}  className="mt-2 mx-2" style={{height:"150px",width:"80px"}}>
                                <div style={{border:"1px solid "}} >
                                    <img src={e.img} alt="" className="h-100 w-100"/>
                                </div>
                                <div className="fs-6 text-center">
                                    {e.name}
                                </div>
                            </div>
                        ))
                      }
                </div>
            </div>
            <div className="row sections">
                <h4 className="col-12 py-3 px-2" style={{borderBottom:"1px solid #E8E8E8"}}>
                     Explore more for business
                </h4>
                <div className="col-12  ">
                      {
                        ExploreData.map((e)=>(
                            <div className="fs-5 mt-2 fw-bold text-dark">
                            {e.tag}
                        </div>
                        ))
                      }
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Business;
