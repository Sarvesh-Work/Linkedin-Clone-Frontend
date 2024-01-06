import { Navigate, Outlet } from "react-router-dom";


const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section
          className=""
          style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Outlet />
        </section>
      )}
    </>
  );
};

export default AuthLayout;
