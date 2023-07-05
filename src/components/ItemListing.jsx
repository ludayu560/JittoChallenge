import React, { useState } from "react";

const ItemListing = (props) => {
  const { id, name, price, image, description, onClick } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleItemClick = () => {
    onClick({ id, name, price, image, description });
  };

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
      onClick={handleItemClick}
    >
      <a href="#">
        <img
          src=""
          alt="Product image"
          class="h-80 w-72 object-cover rounded-lg"
        />
      </a>
      <div class="px-4 py-3 w-72 flex justify-between">
        <p class="text-lg font-bold text-black truncate capitalize">{name}</p>
        <p class="text-lg font-semibold text-black">${price}</p>
        <div class="flex items-center"></div>
      </div>
      {isHovered && <p>{ description }</p>}
    </div>
  );
};
export default ItemListing;
