import React from "react";
import ItemListing from "../components/ItemListing";
import { products } from "../data";

const Home = () => {
  return (
    <div class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 pb-48">
        {products.map((item) => {
          return <ItemListing key={item.id} item={item} />;
        })}
    </div>
  );
};

export default Home;
