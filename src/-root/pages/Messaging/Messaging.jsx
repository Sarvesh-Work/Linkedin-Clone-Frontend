import RightBottom from "../../../Components/EditProfileRightSide/RightBottom"
import MessageData from "../../../Components/MessageComponent/MessageData"


const Messaging = () => {
  return (
    <div className="container-fluid mt-3 mx-lg-5 mx-1">
        <div className="row  d-flex p-0 ">
            <div className="col-lg-9 p-2 px-3" >
               <MessageData/>
            </div>
            <div className="col-lg-3  ">
               <RightBottom/>
            </div>
        </div>
    </div>
  )
}

export default Messaging