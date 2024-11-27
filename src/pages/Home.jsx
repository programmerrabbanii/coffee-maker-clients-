import { Link, useLoaderData } from "react-router-dom";
import BannarBottom from "../components/BannarBottom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";
import Gallary from "../components/Gallary";
import { FaCoffee } from "react-icons/fa";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffeeDatas, setCoffeeData] = useState(loadedCoffees);

  return (
    <div>
      <BannarBottom></BannarBottom>
      <div className="text-center mt-10">
        <h3 className="text-3xl font-semibold text-gray-800">
          --- Sip & Savor ---
        </h3>
        <p className="text-lg text-gray-600 mt-2">Our Popular Products</p>

        
  

  <Link
        to="/addcoffe"
        className="inline-flex items-center gap-2 px-6 py-3 mt-6 bg-[#c2a478] text-white font-semibold text-lg rounded-md hover:bg-[#a7865b] transition focus:outline-none focus:ring-2 focus:ring-[#c2a478] focus:ring-offset-2"
      >
        <span>Add Coffee</span>
        <FaCoffee className="text-xl" />
      </Link>

 
      </div> 

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 w-11/12 mx-auto">
        {coffeeDatas.map((coffee) => (
          <CoffeeCard
            key={coffee._d}
            coffee={coffee}
            coffeeDatas={coffeeDatas}
            setCoffeeData={setCoffeeData}
          ></CoffeeCard>
        ))}
      </div>
      <Gallary></Gallary>
    </div>
  );
};

export default Home;
