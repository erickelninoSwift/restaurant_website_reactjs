import React, { useState } from "react";
import { data as FoodMenu } from "../data/data";
import { categories } from "../data/data";
function Food() {
  console.log(FoodMenu, categories);

  const [Foods, setFoods] = useState(FoodMenu);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* {Filter Row} */}
      <div className="flex flex-col lg:flex-row justify-between ">
        {/* {Filter Type} */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              All
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Burgers
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Pizza
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Salads
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Chicken
            </button>
          </div>
        </div>
        {/* {Filter Price} */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $10
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $40
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $50
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $80
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $100
            </button>
          </div>
        </div>
      </div>
      {/* {Grid } */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {Foods.map((data, index) => {
          return (
            <div
              className="border shadow-lg hover:scale-105 rounded-lg duration-400"
              key={index}
            >
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{data.name}</p>
                <p>
                  <span className="bg-orange-500 text-white rounded-xl p-[5px]">
                    {data.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Food;
