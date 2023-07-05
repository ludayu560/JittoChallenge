import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const URL = "https://sb9mocqhba.execute-api.us-east-2.amazonaws.com/prod/";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const totalAmount = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const handleCheckout = () => {
    const requestConfig = {
      headers: {
        "x-api-key": "d11D4qJK576istSFcI6Gj972gO1EIKjU8zLkO0YT",
      },
    };
    const requestBody = {
      items: cart,
    };

    axios.post(URL + "orders", requestBody, requestConfig);
  };

  return (
    <div>
      <>
        {cart.length > 0 ? (
          <>
            <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
              <div className="flex flex-col justify-center items-between p-2">
                {cart.map((item) => {
                  return (
                    <div className="flex p-6 shadow">
                      <img
                        src={item.image}
                        className="h-28 w-32 rounded-lg"
                        alt=""
                      />
                      <div className="ml-10 self-start space-y-5">
                        <h1 className="text-xl text-gray-900 font-semibold">
                          {item.title}
                        </h1>
                        <p>${item.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                  <div className="shadow-2xl p-10">
                    <h1 className="font-semibold text-lg text-gray-900 underline">
                      SUMMARY
                    </h1>
                    <p>
                      <span className="text-gray-900 font-semibold">
                        Total Items
                      </span>{" "}
                      : {cart.length}
                    </p>
                    <p>
                      {" "}
                      <span className="text-gray-900 font-semibold">
                        Total Amount
                      </span>{" "}
                      : ${totalAmount.toFixed(2)}
                    </p>
                    <button
                      className="bg-blue-600 rounded-lg text-white mt-5 border-2 font-bold p-3"
                      onClick={handleCheckout}
                    >
                      Checkout Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="h-[80vh] flex flex-col items-center justify-center">
              <h1 className="text-gray-700 font-semibold text-xl mb-2">
                Your cart is empty!
              </h1>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Cart;
