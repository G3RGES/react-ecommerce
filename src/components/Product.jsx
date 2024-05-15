import React from "react";

const Product = ({ item }) => {
  return (
    <div className="mx-auto px-8 border border-gray-200 rounded-lg">
      <img className="" src={item.image} alt={item.name} />
      <div className="flex flex-row items-center justify-between">
        <div>
          <p className="text-xl ">{item.name}</p>
          <p className="text-lg">${item.price}</p>
        </div>
        <button className="bg-indigo-500 text-white text-lg font-medium py-2 px-2 rounded-md">
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
