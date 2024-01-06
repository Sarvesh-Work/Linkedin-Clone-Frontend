const Loader = () => {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center ">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-3">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png"
              className=" img-fluid"
              alt=""
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center mt-1">
          <div className="spinner-border col-3" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
