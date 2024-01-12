

const Experience = () => {
  return (
    <div className="container sections mt-3 pb-3">
        <div className="row px-0 py-2 d-flex justify-content-between">
            <div className="col-4  fs-3" style={{fontWeight:"500"}}>
               Experience
            </div>
            <div className="col-md-3 col-5 px-3 px-md-0 d-flex gap-2 justify-content-end">
                <div className="h-100 w-25  d-flex justify-content-center align-items-center button" style={{borderRadius:"50%"}}>
                  <i className="fa-solid fa-pen fs-5 "></i>
                </div>
                <div className="h-100 w-25  d-flex justify-content-center align-items-center button" style={{borderRadius:"50%"}}>
                <i class="fa-solid fa-plus fs-5 "></i>
                </div> 
            </div>

        </div>
        <div className="row p-1 mt-2">
              <div className="fs-4 " style={{fontWeight:"500"}}>Software Developer</div>
              <div className="fs-5">Pink Star.Internship</div>
              <div className="fs-5">Oct 2020-Present.3yer</div>
              <div className="fs-5">Pune,Maharashtra,India</div>
              <div className="fs-5">Skill:</div>
        </div>
    </div>
  )
}

export default Experience