import React, { useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContext";

const BasketProduct = ({ item }) => {
  const { removeFromBasket } = useContext(StoreContext);

  const handleRemove = () => {
    removeFromBasket(item);
  };

  return (
    <div
      className="flex flex-row mx-1 my-1 w-full max-w-2xl
       border border-gray-200 rounded-lg 
     "
    >
      <img className="w-48 border-r-2" src={item.image} alt={item.name} />
      <div className="flex flex-row items-center justify-between gap-5">
        <div className="px-3 w-64">
          <p className="text-xl">{item.name}</p>
          <p className="text-lg">${item.price.toFixed(2)}</p>
        </div>
        <button
          className="bg-gray-500 text-white 
        text-lg font-medium p-4 rounded-md  hover:bg-red-500"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default BasketProduct;
