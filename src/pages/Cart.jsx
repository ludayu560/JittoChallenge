import React from "react";

const Cart = (props) => {
  const { cartItems } = props;
  console.log(cartItems);
  return (
    <div>
      {cartItems ? (
        cartItems.map((item) => {
          return (
            <div class="flex items-center hover:bg-gray-100 px-48 py-5 bg-white">
              <div class="flex w-1/5">
                <div class="w-20">
                  <img class="h-24" src="" alt="" />
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                  <span class="font-bold text-sm">{item.name}</span>
                  <a
                    href="#"
                    class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >
                    Remove
                  </a>
                </div>
              </div>
              <span class="text-center w-1/5 font-semibold text-sm">
                ${item.price}
              </span>
            </div>
          );
        })
      ) : (
        <h3>Add Some Items to Your Cart!</h3>
      )}
    </div>
  );
};

export default Cart;
