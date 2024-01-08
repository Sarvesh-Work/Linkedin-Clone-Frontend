
import "./Network.css"
const Network = () => {
  return (
      <>
      <div className="container-md-fluid p-2" >
        <div className="row px-5"> 
          <div className="col-lg-3" >
            <div className="card">
              <ul className="list-group list-group-light" >
                <li className="list-group-item px-3">
                  <h4>Manage My Network</h4>
                  <div className="mt-3">
                    <a href="#" className="d-flex fw-bold py-1 ps-md-2 text-dark">
                      <i className="bi bi-person-vcard-fill me-2  icon12"></i><p className="mt-1">Connection</p>
                    </a>
                  </div>
                  <div>
                    <a href="#" className="d-flex fw-bold py-1 ps-md-2 text-dark">
                      <i className="bi bi-person-fill-add me-2 icon12"></i> <p className="mt-1">Following & followers</p>
                    </a>
                  </div>
                  <div>
                    <a href="#" className="d-flex fw-bold py-1 ps-md-2 text-dark">
                      <i className="fa-solid fa-people-group me-2 mt-1 icon12"></i><p className="mt-1">Group</p>
                    </a>
                  </div>
                  <div>
                    <a href="#" className="d-flex fw-bold py-1 ps-md-2 text-dark">
                      <i className="bi bi-calendar-event me-2 icon12"></i><p className="mt-1">Event</p>
                    </a>
                  </div>
                  <div>
                    <a href="#" className="d-flex fw-bold py-1 ps-md-2 text-dark">
                      <i className="bi bi-file-earmark me-2 icon12 "></i><p className="mt-1">Page</p>
                    </a>
                  </div>
                  <div>
                    <a href="#" className="d-flex fw-bold py-1 ps-md-2 text-dark">
                      <i className="bi bi-newspaper me-2 icon12"></i><p className="mt-1">NewsLetter</p>
                    </a>
                  </div>
                  <div>
                    <a href="#" className="d-flex fw-bold py-1 ps-md-2 text-dark">
                      <i className="fa-sharp fa-solid fa-hashtag me-2 mt-1 icon12"></i> <p className="mt-1">Hashtag</p>
                    </a>
                  </div>
                </li>
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

          <div className="col-lg-9 pt-lg-0 pt-5 ">
            <div className="card invitations">
              <div className="d-flex justify-content-between mx-3 mt-3 align-items-center">
                <p id="text1">No pending invitations</p>
                <p id="text1">Manage</p>
              </div>
            </div>

            <div className="card card-follower p-3 mt-2">
              <div className="d-flex justify-content-between">
                <p id="text1">People in the IT Services and IT Consulting industry you may know</p>
                <p className="button px-2 rounded-2">
                  <a href="#" id="text1">See all</a>
                </p>
              </div>



<div className="row row-cols-1 row-cols-md-3 g-4">
 
 {/* ........Network card....... */}

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="data:image/jpeg;base64,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" className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Rohit Roy</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="https://img.freepik.com/free-photo/happy-bearded-man-business-clothes-looking-camera_171337-11392.jpg " className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Saige Fuentes</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg" className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Aaron Abbey</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfdhAHr1Xc89NSDPn68wxpa9g5ag00IxTeA&usqp=CAU " className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Amira Trevino</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="data:image/jpeg;base64,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" className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Brooklyn Roach</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="https://www.shutterstock.com/image-photo/beautiful-indian-teenage-girl-dark-260nw-1966291108.jpg" className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Lacey Franklin</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEMnEO3p9-epbBfZ0BpRz6QNDM-Uau5ugPw&usqp=CAU " className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Lila Pacheco</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="https://static.toiimg.com/photo/102340481.cms " className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Silas Rollins</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="data:image/jpeg;base64,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" className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Kamari Choi</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg " className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Makenna Moody</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png" className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Dior Holt</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlg-YPZIb0jdbWvGAYemmPEW71UoQLA6cAcQ&usqp=CAU" className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Elsie Leon</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SieSDnaZtBEq5mYqs-QZEOMuiED6aC6X0Q&usqp=CAU" className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Malik Levy</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYetfo0Z9tnauj3LQ-Cj7xCvaN_L8svM3Yw6SK-btVLTEQvY7Ih5hob5P1lUgLWtqvPlg&usqp=CAU" className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Liam Good</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0tnsg2zHELpATjp1mAr9QZAh5A0nh2u5YQ&usqp=CAU" className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Gwen Green</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWisJDMg5wjucIs-Ktnv-rJJJh-lsOSDh26Q&usqp=CAU" className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Ricky Riley</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFx1mhHEeFPl7rD05gd-t1H3KeUXwB_r2h8VKMy4Tfr_kWADDZ-X6Fr20OJoXRKQWtO_Y&usqp=CAU" className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Maddison Barron</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <div className="d-flex justify-content-end me-2 mt-2 cross">
      <i className="fa-regular fa-circle-xmark"></i>
      </div>
      <div className="d-flex justify-content-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kprXSmAqpSeDBVP9vmHZpvCbB_WNcxn8Eg&usqp=CAU" className="rounded-circle network-img" style={{ height: "100px", width: "100px" }} alt="" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-center">
        <h5 className="card-title">Onyx Archer</h5>
        </div>
        <p className="card-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam nostrum quisquam unde veniam error totam atque maiores impedit ex?</p>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary px-5" id="btn-122">Connect</button>
        </div>
      </div>
    </div>
  </div>
   <div className="d-flex justify-content-center">
    <button className="btn btn btn-outline-primary fw-bold px-5  m-4" id="btn-122">Show More</button>
   </div>
</div>


            </div>
          </div>
        </div>

      </div>
      </>
  )
}

export default Network
