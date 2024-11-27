import { Link, useLoaderData } from "react-router-dom";
import BannarBottom from "../components/BannarBottom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";
import Gallary from "../components/Gallary";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffeeDatas,setCoffeeData]=useState(loadedCoffees)

  return (
    <div>
      <BannarBottom></BannarBottom>
      <div className="text-center mt-10">
        <h3>--- Sip & Savor ---</h3>
        <h3>Our Popular Products</h3>
        <Link> Add Coffee</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 w-11/12 mx-auto">
        {coffeeDatas.map((coffee) => (
          <CoffeeCard key={coffee._d} coffee={coffee} coffeeDatas={coffeeDatas} setCoffeeData={setCoffeeData}></CoffeeCard>
        ))}
      </div>
      <Gallary></Gallary>
    </div>
  );
};

export default Home;
