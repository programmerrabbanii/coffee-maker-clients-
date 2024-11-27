import { Link } from "react-router-dom";
import bannarImg from "../assets/images/more/3.png";

const Bannar = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannarImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content flex items-center justify-end w-full h-full"> 
          <div className=" w-8/12 text-right mr-0 px-32"> 
            <h1 className="mb-5 text-5xl font-bold">
              Would you like a Cup of Delicious Coffee?   

            </h1> 
            <p className="mb-5">
              It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
            </p>
            <Link to='/addcoffe'><button className="btn btn-primary ">Add Coffee</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
