import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { StoreContext } from "../context-and-reducer/StoreContext";
import BasketProduct from "../components/BasketProduct";

const Basket = () => {
  const { products, total } = useContext(StoreContext);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Navbar />
      <div className="flex flex-row items-center justify-between mt-2 py-6 px-10 text-xl font-medium">
        <h3 className="">Your Basket</h3>
        <p className="">Total:${total} </p>
      </div>

      {products.map((product, idx) => (
        <BasketProduct key={idx} item={product} />
      ))}
    </div>
  );
};

export default Basket;
