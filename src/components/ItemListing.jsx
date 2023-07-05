import React, { useState } from "react";
import { add } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ItemListing = ({item}) => {

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
  };

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      class="bg-white shadow-md hover:scale-110 hover:shadow-xl duration-500 w-72 rounded-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={addToCart}
    >
      <a href="#">
        <img
          src={item.image}
          alt="Product image"
          class="h-80 w-72 object-cover rounded-lg"
        />
      </a>
      <div class="px-4 py-3 w-72 flex justify-between">
        <p class="text-lg font-bold text-black truncate capitalize">{item.title}</p>
        <p class="text-lg font-semibold text-black">${item.price}</p>
        <div class="flex items-center"></div>
      </div>
      {isHovered && <p>{ item.description }</p>}
    </div>
  );
};
export default ItemListing;
