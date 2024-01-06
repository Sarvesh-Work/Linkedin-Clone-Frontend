import { Outlet } from "react-router-dom";
import NaveBar from "../Components/NaveBar";
import Loading from "../Components/Loader";
import { useEffect, useState } from "react";



const RootLayout = () => {
  const [Loader,setLoader] =useState(true)
  useEffect(()=>{
     setInterval(() => {
       setLoader(false)
     }, 3000);
  })
  return (
    <>
      {Loader ? (
        <section
          className=""
          style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Loading/>
        </section>
      ) : (
        <div className="w-100 h-100">
          <NaveBar />

          <section className="d-flex w-100" style={{backgroundColor:"#F4F2EE"}}>
            <Outlet />
          </section>
        </div>
      )}
    </>
  );
};

export default RootLayout;
