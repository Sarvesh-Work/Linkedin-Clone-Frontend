import { Route, Routes } from "react-router-dom";
import SigninForm from "./-auth/forms/SigninForm";
import AuthLayout from "./-auth/AuthLayout";
import ForgotPassword from "./-auth/forms/ForgotPassword";
import SignupForm from "./-auth/forms/SignupForm";
import RootLayout from "./-root/RootLayout";
import Home from "./-root/pages/Home/Home";
import './global.css'
import Network from "./-root/pages/Network/Network";
import EditProfile from "./-root/pages/EditProfile/EditProfile";
import EventPage from "./Components/EventPage/EventPage";
import Groups from "./Components/Groups/Groups";
import Jobs from "./-root/pages/jobs/Jobs1";
import Connection from "./Components/Connection/Connection";
import Follow from "./Components/Follow&Followings/Follow";
import Notifications from "./-root/pages/Notifications/Notifications";
import MyNetworkEvent from "./Components/MyNetworkEventPage/MyNetworkEvent";




const App = () => {
  return (
    <main
    
    >
      <Routes>
        {/* public routes */}
        <Route   element={<AuthLayout />}>
          <Route  index element={<SigninForm />} />
          <Route path="/Sign-up" element={<SignupForm/>}/>
          <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        </Route>

        {/* private routes */}
        <Route   element={<RootLayout/>}>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Network" element={<Network/>}/>
          <Route path="/EditProfile"  element={<EditProfile/>}/>
          <Route path="/EventPage" element={<EventPage/>}/>
          <Route path="/Groups"  element={<Groups/>}/>
          <Route path="/Jobs"   element={<Jobs/>}/>
          <Route path="/Connections" element={<Connection/>}/>
          <Route path="/Follow"   element={<Follow/>}/>
          <Route path="/Notifications" element={<Notifications/>}/>
          <Route path="/MynetworkEvent" element={<MyNetworkEvent/>}/>
        </Route>


     
      </Routes>
    </main>
  );
};

export default App;
