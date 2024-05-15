import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-evenly mt-2 pt-3 text-lg font-medium">
      <Link to="/">Home</Link>
      <Link to="basket">Basket</Link>
    </div>
  );
};

export default Navbar;
