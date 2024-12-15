import gordologo from "../assets/Gordobg.png";

const Gordo = () => {
  return (
    <>
    
      <div>
        <p className="text-red-600 text-3xl md:text-5xl lg:mb-6 lg:mt-6  lg:text-8xl flex items-center justify-center">Gordo Mikes BBQ</p>
      </div>
      
      <div className="h-screen flex justify-center items-center md:mt-28">
        <div>
          <img src={gordologo} alt="" className=" " />
        </div>
      </div>
  
    </>
  );
};

export default Gordo;
