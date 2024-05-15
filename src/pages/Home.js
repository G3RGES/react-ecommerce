import React from "react";

// components
import Navbar from "../components/Navbar";
import Product from "../components/Product";

// data
import { storeData } from "./../Data";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-center font-semibold mt-2 py-4">
        useContext + useReducer store
      </h1>
      <h2 className="text-4xl tracking-wide py-4 pl-8">New in</h2>
      <div className="flex flex-col items-center lg:grid lg:grid-cols-3 gap-4">
        {storeData.map((item, idx) => (
          <Product key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
