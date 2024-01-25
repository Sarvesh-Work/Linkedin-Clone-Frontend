
import "./NewJobs.css"
const NewJobs = () => {
  return (
    <div className="container-xl mt-3">
        <div className="row d-flex justify-content-center">
           

        <div className="col-md-2" >
            <div className="sections">
              <ul className="list-group list-group-light" >
                <li className="list-group-item px-3">
                <i className="bi bi-bookmark-fill me-2"></i>My items
                </li>
                <li className="list-group-item px-3">
                 <div className="d-flex justify-content-between">
                    <span>My jobs</span>
                    <span>31</span>
                 </div>
                </li>
                <li className="list-group-item">
                <div className="d-flex justify-content-between">
                    <span>Saved post and articles</span>
                    <span>1</span>
                 </div>
                </li>
              </ul>
            </div>
          </div>

            <div className="col-md-6 mt-md-0 mt-4">
                <div className="sections">
                <h6 className="sarvesh-name pt-2 ps-3" id="my-jon-name" >My Jobs</h6>
                <div>
                    <button className="btn btn-danger mt-2 ms-2" id="upper-btn">Applied Jobs</button>
                </div>
                <hr />

                <div className="tab-content" id="pills-tabContent">
 {/* Job contain 1 */}
  <div className="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" >
                <div className="p-2">

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/D4D0BAQH26vEc2KRwsQ/company-logo_100_100/0/1704351215489?e=1713398400&v=beta&t=FZdY7jLFCJ3EBE5VlpcCuI_5U8pW8Tt5cwr58uolTmI"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span id="job-role">Java Fullstack Developer</span>
                  <span id="company-name">LTIMindtree</span>
                  <span id="job-location">
                  Pune (Hybrid)
                  </span>
                  <span id="time">Applied 2mo ago</span>
                </div>
              </div>
            </a>
            <hr />

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/C4D0BAQExG-3FXzGhQw/company-logo_100_100/0/1640083208132/unique_schools_logo?e=1713398400&v=beta&t=riK7l8Egk44LFtd7LYSlwL53AZUU52UQ_arFIGJO4y4"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span id="job-role">Web Developer</span>
                  <span id="company-name">Unique Schools </span>
                  <span id="job-location">
                  Pune (On-site)
                  </span>
                  <span id="time">Applied 2mo ago</span>
                </div>
              </div>
            </a>
            <hr />

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/D560BAQGy1pCPkZv5mw/company-logo_100_100/0/1696230541908/vupico_logo?e=1713398400&v=beta&t=cxG4LX5GC8R22NQxiQwlReZhFAQL5bKWzndTm4y0PcA"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span id="job-role">Senior Java Fullstack with Springboot & React.js</span>
                  <span id="company-name">VUPICO</span>
                  <span id="job-location">
                  Pune (Hybrid)
                  </span>
                  <span id="time">Applied 3mo ago</span>
                </div>
              </div>
            </a>
            <hr />

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/D560BAQGmi_lgs7Y6Gw/company-logo_100_100/0/1698734427824/jade_global_logo?e=1713398400&v=beta&t=ZJTaghHwdAdLkfPbzvvsKw1H2NSSPITztcj4Zp3Q9ag"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span id="job-role">Sr. Oracle Cloud SCM – Sr. Solution Architect </span>
                  <span id="company-name">Jade Global</span>
                  <span id="job-location">
                  Pune (Hybrid)
                  </span>
                  <span id="time">Applied 3mo ago</span>
                </div>
              </div>
            </a>
            <hr />

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/D4D0BAQE7Zf1-vvfbUA/company-logo_100_100/0/1692876768583/infosys_logo?e=1713398400&v=beta&t=PV8VidymRMsUQX2Bd6pMPhJiadFHRWlzud8N6hINAyc"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span id="job-role">Information Security Engineer</span>
                  <span id="company-name">Infosys</span>
                  <span id="job-location">
                  Pune (On-site)
                  </span>
                  <span id="time">Applied 2mo ago</span>
                </div>
              </div>
            </a>
            <hr />

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/C4D0BAQFWFObKyhc4-Q/company-logo_100_100/0/1648273823347/bnetworks_logo?e=1713398400&v=beta&t=3gnOxjdj242AlcDcQIPPMoK0RRIOu4v1Q31UBWpdNUU"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span id="job-role">Frontend Developer - JavaScript/React.js</span>
                  <span id="company-name">B.Networks</span>
                  <span id="job-location">
                  Pune (On-site)
                  </span>
                  <span id="time">Applied 3mo ago</span>
                </div>
              </div>
            </a>
            <hr />

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/D4E0BAQEkfMUEE4caDQ/company-logo_100_100/0/1698887191930?e=1713398400&v=beta&t=UpIAdFd7lc6QWjIzKnHlLWZFPY-2gZJLpVoi-6GmMz8"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span id="job-role">WebMethods developer</span>
                  <span id="company-name">Wipro</span>
                  <span id="job-location">
                  Bengaluru (Hybrid)    
                  </span>
                  <span id="time">Applied 3mo ago</span>
                </div>
              </div>
            </a>
            <hr />

            <a href="#">
              <div className="d-flex">
                <img
                  src="https://media.licdn.com/dms/image/D4D0BAQH26vEc2KRwsQ/company-logo_100_100/0/1704351215489?e=1713398400&v=beta&t=FZdY7jLFCJ3EBE5VlpcCuI_5U8pW8Tt5cwr58uolTmI"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                  className="p-1"
                />
                <div className="d-flex flex-column ms-2">
                  <span id="job-role">EBS Apps Technical</span>
                  <span id="company-name">LTIMindtree</span>
                  <span id="job-location">
                  Bengaluru (Hybrid)
                  </span>
                  <span id="time">Applied 3mo ago</span>
                </div>
              </div>
            </a>  
                </div>
           <hr />
  </div>

  {/* Job Contain 2 */}
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" >
  <div className="p-2">

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/C4D0BAQEVlCxeSSDfQA/company-logo_100_100/0/1636583622576/connectwise_logo?e=1713398400&v=beta&t=xcB4gEqQGZQrsqltBcXAvWpfEAnwafrwalWyXhp0kYs"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Front-End Engineer II</span>
      <span id="company-name">ConnectWise</span>
      <span id="job-location">
      Pune
      </span>
      <span id="time">Applied 1w ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/C4D0BAQF_VWfJoG8Kdw/company-logo_100_100/0/1669913160520/tekdi_technologies_logo?e=1713398400&v=beta&t=YZy8gDmtIRHqnmbCl-TyIXAuFbRteu2t4A0V5dA_PMo"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Node Js Developer</span>
      <span id="company-name">Tekdi Technologies</span>
      <span id="job-location">
      Pune (On-site)
      </span>
      <span id="time">Applied 1w ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/D4D0BAQG8t9m3U5cjbg/company-logo_100_100/0/1683360668169/uji_coconut_water_logo?e=1713398400&v=beta&t=kFv71UdcvE63Zt5Sjpp48cTVHrQZioVhgqH7IrVZU98"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Web Developer</span>
      <span id="company-name">UJI Foods</span>
      <span id="job-location">
      Pune (Hybrid)
      </span>
      <span id="time">Applied 1w ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/D560BAQH6935pZfzWfA/company-logo_100_100/0/1696659397818/uniabroad_indi_logo?e=1713398400&v=beta&t=1ZeTS14-ILsBdcsIX0gr90OfGmUSnSl1QVJtbZtZ3ww"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Python Developer</span>
      <span id="company-name">UNIABROAD</span>
      <span id="job-location">
      India (Remote)
      </span>
      <span id="time">Application viewed 1mo ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/C4D0BAQElGW05Flhbjw/company-logo_100_100/0/1630526610542?e=1713398400&v=beta&t=15W8nifTiPfXUpMDrXQ39gtmf3RAwI-jpQDHtF09KGU"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Claris FileMaker Pro developer</span>
      <span id="company-name">Loggix BV</span>
      <span id="job-location">
      Pune (On-site)
      </span>
      <span id="time">Application viewed 1mo ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/C4E0BAQGv6qB-clcL4g/company-logo_100_100-alternative/0/1630645401463/zorba_consulting_india_logo?e=1713398400&v=beta&t=3mzdQz_R1xf5x6yAshYa22p83a2yqZcouFz3iQZqJ5c"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Qlik Sense Developer_3+yrs</span>
      <span id="company-name">Zorba Consulting India</span>
      <span id="job-location">
      Pune (On-site)
      </span>
      <span id="time">Applied 2mo ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/C4E0BAQFdiS2Yz4Ap_g/company-logo_100_100/0/1635481851008/innovalabs_technologies_logo?e=1713398400&v=beta&t=eXDqL7aKV2DE83cEhRpmWP83-jBPz8LyMfAovopAp44"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Ruby on Rails Developer</span>
      <span id="company-name">Innovalabs Technologies</span>
      <span id="job-location">
      Pune (On-site)    
      </span>
      <span id="time">Applied 2mo ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/C4E0BAQG01ZpxmCgKTg/company-logo_100_100/0/1630620373633?e=1713398400&v=beta&t=TkbRZq5SqMT2I7qmQRHiIO6BZ5HQE_WOB7z_hZghvoo"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Senior PHP Developer</span>
      <span id="company-name">iCloudEMS</span>
      <span id="job-location">
      India (Remote
      </span>
      <span id="time">Applied 2mo ago</span>
    </div>
  </div>
</a>  
    </div>
<hr />
  </div>
  
  {/* Job Contain 3 */}
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" >
  <div className="p-2">

  <a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/D4D0BAQH26vEc2KRwsQ/company-logo_100_100/0/1704351215489?e=1713398400&v=beta&t=FZdY7jLFCJ3EBE5VlpcCuI_5U8pW8Tt5cwr58uolTmI"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">EBS Apps Technical</span>
      <span id="company-name">LTIMindtree</span>
      <span id="job-location">
      Bengaluru (Hybrid)
      </span>
      <span id="time">Applied 3mo ago</span>
    </div>
  </div>
</a>  
<hr />



<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/C4D0BAQExG-3FXzGhQw/company-logo_100_100/0/1640083208132/unique_schools_logo?e=1713398400&v=beta&t=riK7l8Egk44LFtd7LYSlwL53AZUU52UQ_arFIGJO4y4"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Web Developer</span>
      <span id="company-name">Unique Schools </span>
      <span id="job-location">
      Pune (On-site)
      </span>
      <span id="time">Applied 2mo ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/D560BAQGy1pCPkZv5mw/company-logo_100_100/0/1696230541908/vupico_logo?e=1713398400&v=beta&t=cxG4LX5GC8R22NQxiQwlReZhFAQL5bKWzndTm4y0PcA"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Senior Java Fullstack with Springboot & React.js</span>
      <span id="company-name">VUPICO</span>
      <span id="job-location">
      Pune (Hybrid)
      </span>
      <span id="time">Applied 3mo ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/D4D0BAQH26vEc2KRwsQ/company-logo_100_100/0/1704351215489?e=1713398400&v=beta&t=FZdY7jLFCJ3EBE5VlpcCuI_5U8pW8Tt5cwr58uolTmI"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Java Fullstack Developer</span>
      <span id="company-name">LTIMindtree</span>
      <span id="job-location">
      Pune (Hybrid)
      </span>
      <span id="time">Applied 2mo ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/D560BAQGmi_lgs7Y6Gw/company-logo_100_100/0/1698734427824/jade_global_logo?e=1713398400&v=beta&t=ZJTaghHwdAdLkfPbzvvsKw1H2NSSPITztcj4Zp3Q9ag"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Sr. Oracle Cloud SCM – Sr. Solution Architect </span>
      <span id="company-name">Jade Global</span>
      <span id="job-location">
      Pune (Hybrid)
      </span>
      <span id="time">Applied 3mo ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/D4D0BAQE7Zf1-vvfbUA/company-logo_100_100/0/1692876768583/infosys_logo?e=1713398400&v=beta&t=PV8VidymRMsUQX2Bd6pMPhJiadFHRWlzud8N6hINAyc"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Information Security Engineer</span>
      <span id="company-name">Infosys</span>
      <span id="job-location">
      Pune (On-site)
      </span>
      <span id="time">Applied 2mo ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/C4D0BAQFWFObKyhc4-Q/company-logo_100_100/0/1648273823347/bnetworks_logo?e=1713398400&v=beta&t=3gnOxjdj242AlcDcQIPPMoK0RRIOu4v1Q31UBWpdNUU"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Frontend Developer - JavaScript/React.js</span>
      <span id="company-name">B.Networks</span>
      <span id="job-location">
      Pune (On-site)
      </span>
      <span id="time">Applied 3mo ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/D4E0BAQEkfMUEE4caDQ/company-logo_100_100/0/1698887191930?e=1713398400&v=beta&t=UpIAdFd7lc6QWjIzKnHlLWZFPY-2gZJLpVoi-6GmMz8"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">WebMethods developer</span>
      <span id="company-name">Wipro</span>
      <span id="job-location">
      Bengaluru (Hybrid)    
      </span>
      <span id="time">Applied 3mo ago</span>
    </div>
  </div>
</a>



    </div>
<hr />

   
  </div>

  {/* Job Contain 4 */}
  <div className="tab-pane fade" id="pills-about" role="tabpanel" aria-labelledby="pills-contact-about" >
  <div className="p-2">

  <a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/C4E0BAQFdiS2Yz4Ap_g/company-logo_100_100/0/1635481851008/innovalabs_technologies_logo?e=1713398400&v=beta&t=eXDqL7aKV2DE83cEhRpmWP83-jBPz8LyMfAovopAp44"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Ruby on Rails Developer</span>
      <span id="company-name">Innovalabs Technologies</span>
      <span id="job-location">
      Pune (On-site)    
      </span>
      <span id="time">Applied 2mo ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/C4E0BAQGv6qB-clcL4g/company-logo_100_100-alternative/0/1630645401463/zorba_consulting_india_logo?e=1713398400&v=beta&t=3mzdQz_R1xf5x6yAshYa22p83a2yqZcouFz3iQZqJ5c"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Qlik Sense Developer_3+yrs</span>
      <span id="company-name">Zorba Consulting India</span>
      <span id="job-location">
      Pune (On-site)
      </span>
      <span id="time">Applied 2mo ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/C4D0BAQF_VWfJoG8Kdw/company-logo_100_100/0/1669913160520/tekdi_technologies_logo?e=1713398400&v=beta&t=YZy8gDmtIRHqnmbCl-TyIXAuFbRteu2t4A0V5dA_PMo"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Node Js Developer</span>
      <span id="company-name">Tekdi Technologies</span>
      <span id="job-location">
      Pune (On-site)
      </span>
      <span id="time">Applied 1w ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/D4D0BAQG8t9m3U5cjbg/company-logo_100_100/0/1683360668169/uji_coconut_water_logo?e=1713398400&v=beta&t=kFv71UdcvE63Zt5Sjpp48cTVHrQZioVhgqH7IrVZU98"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Web Developer</span>
      <span id="company-name">UJI Foods</span>
      <span id="job-location">
      Pune (Hybrid)
      </span>
      <span id="time">Applied 1w ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/D560BAQH6935pZfzWfA/company-logo_100_100/0/1696659397818/uniabroad_indi_logo?e=1713398400&v=beta&t=1ZeTS14-ILsBdcsIX0gr90OfGmUSnSl1QVJtbZtZ3ww"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Python Developer</span>
      <span id="company-name">UNIABROAD</span>
      <span id="job-location">
      India (Remote)
      </span>
      <span id="time">Application viewed 1mo ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/C4D0BAQElGW05Flhbjw/company-logo_100_100/0/1630526610542?e=1713398400&v=beta&t=15W8nifTiPfXUpMDrXQ39gtmf3RAwI-jpQDHtF09KGU"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Claris FileMaker Pro developer</span>
      <span id="company-name">Loggix BV</span>
      <span id="job-location">
      Pune (On-site)
      </span>
      <span id="time">Application viewed 1mo ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/C4D0BAQEVlCxeSSDfQA/company-logo_100_100/0/1636583622576/connectwise_logo?e=1713398400&v=beta&t=xcB4gEqQGZQrsqltBcXAvWpfEAnwafrwalWyXhp0kYs"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Front-End Engineer II</span>
      <span id="company-name">ConnectWise</span>
      <span id="job-location">
      Pune
      </span>
      <span id="time">Applied 1w ago</span>
    </div>
  </div>
</a>
<hr />

<a href="#">
  <div className="d-flex">
    <img
      src="https://media.licdn.com/dms/image/C4E0BAQG01ZpxmCgKTg/company-logo_100_100/0/1630620373633?e=1713398400&v=beta&t=TkbRZq5SqMT2I7qmQRHiIO6BZ5HQE_WOB7z_hZghvoo"
      alt=""
      style={{ height: "60px", width: "60px" }}
      className="p-1"
    />
    <div className="d-flex flex-column ms-2">
      <span id="job-role">Senior PHP Developer</span>
      <span id="company-name">iCloudEMS</span>
      <span id="job-location">
      India (Remote
      </span>
      <span id="time">Applied 2mo ago</span>
    </div>
  </div>
</a>  
<hr />

    </div>
  </div>

              </div>

{/* Downcase Number List  */}
<div className="d-flex justify-content-center">
  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item px-2" role="presentation">
    <button  className="nav-link active  downcase-button  " id="pills-home-tab"  data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">1</button>
  </li>
  <li className="nav-item px-2" role="presentation">
    <button className="nav-link downcase-button" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">2</button>
  </li>
  <li className="nav-item px-2" role="presentation">
    <button className="nav-link downcase-button" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">3</button>
  </li>
  <li className="nav-item px-2" role="presentation">
  <button className="nav-link downcase-button" id="pills-about-tab" data-bs-toggle="pill" data-bs-target="#pills-about" type="button" role="tab" aria-controls="pills-about" aria-selected="false">4</button>
  </li>
</ul>
</div>


                </div>
            </div>

            <div className="col-md-3  ">
                <div className="sections">
                    <p className="p-2">learn what hiring managers look for in answers to top interview questions</p>
                    <div className="p-1 d-flex">
                    <img src="https://media.licdn.com/media/AAUQAgROAAgAAQAAAAAAAAWgAAAAJGI3NDk4MzVlLTg3YTAtNDU2Yi1iYWI4LTFiODZjZTMxMTJjOQ.png"  style={{height:'60px',width:"60px"}} alt="" />
                    <h6 className="p-2">What Would Your Co-worker says about you ??</h6>
                    </div>
                    <hr />
                    <div className="p-1 d-flex">
                    <img src="https://media.licdn.com/media/AAUQAgROAAgAAQAAAAAAAA29AAAAJDM1ZmUwMTlkLTFjODAtNDllNy1iZDQ0LWNhNGRiN2Q3MTk0YQ.png"  style={{height:'60px',width:"60px"}} alt="" />
                    <h6 className="p-2">What do you see Yourself in 5 Year ??</h6>
                    </div>
                    <hr />
                    <div className="p-1 d-flex">
                    <img src="https://media.licdn.com/media/AAUQAgROAAgAAQAAAAAAAAquAAAAJDkzNThjZmEwLTkwOTktNDFiZC05MjUwLWYzZWZlYzE0YjY4ZA.png"  style={{height:'60px',width:"60px"}} alt="" />
                    <h6 className="p-2">Do You have any question for me??</h6>
                    </div>
                    
                    <div className="d-flex justify-content-center mt-2 mb-2">
                        <a href="">See All Question</a>
                    </div>
                    
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default NewJobs
