import React from "react";
import ItemListing from "../components/ItemListing";

const Home = (props) => {
  const { cartItems, setCartItems } = props;

  const handleClick = (item) => {
    setCartItems((prevCart) => [...prevCart, item]);
    console.log(cartItems);
  };

  const data = [];
  for (let i = 1; i <= 50; i++) {
    const item = {
      id: i,
      name: `Product ${i}`,
      price: Math.floor(Math.random() * 100) + 1, // Random price between 1 and 100
      image: `image-${i}.jpg`, // Replace with the appropriate image URL or filename
      description: `Description of product ${i}`,
    };

    data.push(item);
  }

  return (
    <div class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 pb-48">
      {data.map((item) => {
        return (
          <ItemListing
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
            onClick={() => handleClick(item)}
          />
        );
      })}
    </div>
  );
};

export default Home;
