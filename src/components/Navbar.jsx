import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context-and-reducer/StoreContext";

const Navbar = () => {
  const { products } = useContext(StoreContext);

  return (
    <>
      <div className="flex flex-row items-center justify-evenly mt-2 pt-3 text-lg font-medium">
        <Link to="/">Home</Link>
        <Link to="basket">
          Basket
          <span className="text-xs align-top rounded-full px-2 py-1 mx-1 bg-red-500 text-white">
            {" "}
            {products.length}
          </span>
        </Link>
      </div>
      <h1 className="text-3xl text-center font-semibold mt-2 py-4">
        useContext + useReducer store
      </h1>
    </>
  );
};

export default Navbar;
