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
        </Route>
      </Routes>
    </main>
  );
};

export default App;
