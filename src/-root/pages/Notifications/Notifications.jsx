import NotificationSection from "../../../Components/NotificationsSection.jsx/NotificationSection"
import RightsideBottom from "../../../Components/RightsideBottom/RightsideBottom"


const Notifications = () => {
  return (
    <div className=" container-fluid mt-4  px-md-5 px-lg-3 px-xxl-5 ">
      <div className="row p-1 d-flex d-flex justify-content-between">
         <div className="col-lg-3 p-1">
             <div className="sections p-3 d-md-block d-flex justify-content-between sticky-top" style={{top:"80px"}}>
                <div className="fs-5 fw-bold text-dark ">
                   Manage your <br className="d-md-block d-none" /> Notifications
                </div>
                <div className="text-primary fs-5 mt-2 cursor" style={{fontWeight:"500"}}>
                    View Settings

                </div>
             </div>
         </div>
         <div className="col-lg-6  p-0">
             <NotificationSection/>
         </div>
         <div className="col-lg-3 ">
             <RightsideBottom/>
         </div>
      </div>
    </div>
  )
}

export default Notifications