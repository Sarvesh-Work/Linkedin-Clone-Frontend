import HomeRightSide from "../../../Components/HomeRightSide/HomeRightSide"
import Left from "../../../Components/LeftSideTopHome/LeftTop"
import Posts from "../../../Components/Posts/Posts"
import PostsData from "../../../Components/PostsData/PostsData"

const Home = () => {
  return (
    <div className="container-fluid"  >
      <div className="row mb-2 px-lg-2 mx-md-5 mx-1 mt-3 d-flex justify-content-around">
         <div className="col-xl-3 col-12 px-4 py-2 ">
           <Left/>
         </div>
         <div className="col-xl-6 col-12 px-3 py-2">
          <Posts/>
          <PostsData/>
         </div>
         <div className="col-xl-3 px-1 py-2 d-flex justify-content-center align-content-center">
           <HomeRightSide/>
         </div>
      </div>
    </div>
  )
}

export default Home