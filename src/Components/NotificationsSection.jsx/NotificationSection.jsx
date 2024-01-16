const NotificationSection = () => {
   
    const img=[
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuW_CDBv_FOc8kKB4f6yHNxwbJjUx39F4Ww&usqp=CAU"
        },
        {
            img:"data:image/png;base64,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"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4DFcvwC6rQqrW7XOg27lQEygfFHEUllsoQ&usqp=CAU"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-yH6n4aUt0SuB9ZVZKjlxDb8sHTofwiHnA&usqp=CAU"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssLMdARpt2YIucPpVtsGcroSMB7EkB58w5g&usqp=CAU"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSr8J-Acn2bHnepKLOCiiYSfQkby0Ar6kGYvVRg8VfbrLjfVZuQI89REh41RT9AAEIrmk&usqp=CAU"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Xpdbcg-mrnPVkinPF1K9gDlS4HVyzClDr0Aj5HVXHvsZRL0LWZkRQgwj873_vE-_rwU&usqp=CAU"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpoR2Qgo_R-GsQMBqWsfFkbhbteiQAa3BrS3jdepLey39Pia2kku9EyR9SOGovYsIQfnA&usqp=CAU"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfTSEgAJMQfItAPgWrbJQNQLL1Ad2i65PJg&usqp=CAU"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNp0Nv1kGgeyKZCHKvg8V7Q9_3RwZUkxz8bw&usqp=CAU"
        },
        {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27Cy1crzt2n6no0aeyDxWhTowKULycgHtvw&usqp=CAU"
        },
    ]
 

  return (
    <div className="container-fluid mt-1 mb-1">
      <div className="row sections p-3 gap-3">
        <div
          className="col-md-1 col-lg-2 fs-5 fw-bold p-1 text-center  cursor  text-white  rounded-pill"
          style={{ backgroundColor: "#004C33", border: "1px solid #858585" }}
        >
          ALL
        </div>
        <div
          className="col-md-2 col-lg-4  fs-5 fw-bold mt-md-0 mt-1 p-1 cursor   text-center  rounded-pill"
          style={{ border: "1px solid #858585" }}
        >
          My posts
        </div>
        <div
          className="col-md-2  col-lg-4 fs-5 fw-bold  mt-md-0 mt-1 mx-md-0 mx-2 p-1  cursor  text-center  rounded-pill"
          style={{ border: "1px solid #858585" }}
        >
          Mentions
        </div>
      </div>

      <div className="row sections  mt-3 d-flex justify-content-center overflow-hidden">
        {img.map((i)=>(
            <div className="row p-3   button pt-3 d-flex justify-content-between">
            <div className="col-2 d-flex align-items-center">
              <div className=" " style={{ width: "100%", height: "60px" }}>
                <img
                  src={i.img}
                  alt=""
                  className=""
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
            <div className="col-md-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
              ea. 
             
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center flex-column">
               <div style={{color:"#A6A6A6"}}>7m</div>
               <i className="fa-solid fa-ellipsis fs-3"></i>
            </div>
          </div>
        ))

        }
      </div>
    </div>
  );
};

export default NotificationSection;
