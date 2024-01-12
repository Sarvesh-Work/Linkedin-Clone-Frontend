 import "./Follow.css"

const Follow = () => {
  return (
    <div className="container-xl mt-3">
        <div className="row">
            {/* Right side */}
            <div className="col-md-9">
                <div className="sections">
                <h6 className="sarvesh-name pt-2 ps-2">Sarvesh Munde Network</h6>
                    <hr />
                    <div>
                        <div className="d-flex flex-wrap border-bottom">
                           <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                             <li className="nav-item" role="presentation">
                               <button className="btn btn-link button " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Followers</button>
                             </li>
                             <li className="nav-item" role="presentation">
                               <button className="btn btn-link button" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Following</button>
                             </li>
                           </ul>
                        </div>
                        <div>
                            <div className="mt-3 ms-3">
                                <p>You are following below people out of your network</p>
                            </div>

                            {/* Follower */}
                            <div className="tab-content" id="pills-tabContent">
                             <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" >
    
                            <div className="d-flex  justify-content-between my-4">
                                <div className="d-sm-flex  followingCrad ">
                                 <img src="data:image/jpeg;base64,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"  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Rohit Roy</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>
                                <div >
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-between my-4">
                                <div className="d-sm-flex followingCrad ">
                                 <img src="https://img.freepik.com/free-photo/happy-bearded-man-business-clothes-looking-camera_171337-11392.jpg "  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Saige Fuentes</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>
                                <div>
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-between my-4">
                                <div className="d-sm-flex followingCrad ">
                                 <img src="https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg"  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Aaron Abbey</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>
                                <div>
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-between my-4">
                                <div className="d-sm-flex followingCrad ">
                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfdhAHr1Xc89NSDPn68wxpa9g5ag00IxTeA&usqp=CAU "  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Amira Trevino</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>
                                <div>
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-between my-4">
                                <div className="d-sm-flex followingCrad ">
                                 <img src="data:image/jpeg;base64,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"  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Brooklyn Roach</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>
                                <div>
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-between my-4">
                                <div className="d-sm-flex followingCrad ">
                                 <img src="https://www.shutterstock.com/image-photo/beautiful-indian-teenage-girl-dark-260nw-1966291108.jpg"  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Lacey Franklin</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>
                                <div>
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-between my-4">
                                <div className="d-sm-flex followingCrad ">
                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEMnEO3p9-epbBfZ0BpRz6QNDM-Uau5ugPw&usqp=CAU"  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Lila Pacheco</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>
                                <div>
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-between my-4 p-1">
                                <div className="d-sm-flex followingCrad ">
                                 <img src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg"  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Makenna Moody</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>

                                <div>
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>
                             </div>

                            {/* Following */}

                             <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                             <div className="d-flex  justify-content-between my-4">
                                <div className="d-sm-flex followingCrad ">
                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEMnEO3p9-epbBfZ0BpRz6QNDM-Uau5ugPw&usqp=CAU"  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Lila Pacheco</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>
                                <div>
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-between my-4">
                                <div className="d-sm-flex followingCrad ">
                                 <img src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg"  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Makenna Moody</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>
                                <div>
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-between my-4">
                                <div className="d-sm-flex  followingCrad ">
                                 <img src="data:image/jpeg;base64,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"  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Rohit Roy</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>
                                <div >
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-between my-4">
                                <div className="d-sm-flex followingCrad ">
                                 <img src="data:image/jpeg;base64,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"  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Brooklyn Roach</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>
                                <div>
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-between my-4">
                                <div className="d-sm-flex followingCrad ">
                                 <img src="https://img.freepik.com/free-photo/happy-bearded-man-business-clothes-looking-camera_171337-11392.jpg "  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Saige Fuentes</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>
                                <div>
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-between my-4">
                                <div className="d-sm-flex followingCrad ">
                                 <img src="https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg"  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Aaron Abbey</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>
                                <div>
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-between my-4">
                                <div className="d-sm-flex followingCrad ">
                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfdhAHr1Xc89NSDPn68wxpa9g5ag00IxTeA&usqp=CAU "  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Amira Trevino</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>
                                <div>
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-between my-4 mb-2">
                                <div className="d-sm-flex followingCrad ">
                                 <img src="https://www.shutterstock.com/image-photo/beautiful-indian-teenage-girl-dark-260nw-1966291108.jpg"  className="rounded-circle mx-3" alt="" style={{width:"60px"}} />
                                 <div>
                                    <h6 id="following-name" className="ms-sm-0 ms-2">Lacey Franklin</h6>
                                    <h6 id="following-bio" className="ms-sm-0 ms-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, hic!</h6>
                                 </div>
                                </div>
                                <div>
                                    <button className="btn btn-outline-secondary rounded-pill me-1">Following</button>
                                </div>
                            </div>

                             </div>
                           </div>

                        </div>
                    </div>
                </div>
            </div>
           
           {/* left side */}
            <div className="col-md-3 mt-md-0 mt-3" >
            <div className="sections">
              <ul className="list-group list-group-light" >
                 <li className="list-group-item px-3">
                  <div className="p-2 text-center my-2">
                    <p id="text1">Get the latest jobs and industry news</p>
                  </div>
                  <div className="d-flex  justify-content-center">
                    <img src="https://i.pinimg.com/736x/a9/62/ef/a962ef5ea8dfa25418c0a2b0057a64d4.jpg" alt="" className="rounded-circle" style={{ height: "80px", widows: "80px" }} />
                  </div>
                  <div className="p-2 text-center my-2">
                    <p id="text1" >16-oct-forntend, explore relevant opportunities </p>
                    <button className="btn btn-primary ">Follow</button>
                  </div>
                </li>
  {/* ***** Import part****** */}
                <li className="list-group-item">
                  <div className="text-center">
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
                </li>
              </ul>
            </div>
          </div>

        </div>
      
    </div>
  )
}

export default Follow
