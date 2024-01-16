import Event from "../Event/Event"
import "./MyNetworkEvent.css"

const MyNetworkEvent = () => {
  return (
    <div className="container-xl mt-4">
      <div className="row">
        <div className="col-md-8">
          <div className="sections">
            <ul className="list-group list-group-light">
              <li className="list-group-item px-3">
                <div className="d-flex justify-content-between">
                  <p className="mt-2 Event-head-name">Event</p>
                  <div href="" className="mt-2 Event-head-link cursor"  data-bs-toggle="modal"
                data-bs-target="#staticBackdrop1">
                    Create
                  </div>
                </div>
                <div
              className="modal fade"
              id="staticBackdrop1"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <Event></Event>
            </div>
              </li>
              <li className="list-group-item px-3">
                <div className="d-flex justify-content-center mt-3">
                  <img
                    src="https://static.licdn.com/aero-v1/sc/h/60v3z2w447yzbb0noj907w634"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h3 className="mt-2">No event</h3>
                  <p className="mb-5">
                    Looks like you are not attending any events.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4  mt-md-0 mt-4  ">
          <div className="sections">
            <div className="d-flex justify-content-end pt-2">
              <p>Ad</p>
              <i className="fa-solid fa-ellipsis mt-1 mx-2 "></i>
            </div>
            <div className="d-flex justify-content-center ">
              <h6>Opportunities are knocking on your door</h6>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <img
                src="https://resonant-salmiakki-e89635.netlify.app/assets/attractive-man-smiling_388558-125-cbup7FY8.avif"
                className="rounded me-3"
                style={{ height: "60px", width: "60px" }}
                alt=""
              />
              <img
                src="https://resonant-salmiakki-e89635.netlify.app/assets/1631328654457-yYxG-k-d.jpeg"
                className="img-rounded ms-4"
                style={{ height: "60px", width: "60px" }}
                alt=""
              />
            </div>
            <div className=" d-flex justify-content-center mt-4">
              <h6>Rock, aramco is hiring!</h6>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary px-5 my-3" id="btn-122">
                follow
              </button>
            </div>
          </div>
          <li className="list-group-item mt-2" style={{backgroundColor:"#F4F2EE",border:"none"}}>
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
        </div>
      </div>
    </div>
  )
}

export default MyNetworkEvent