import React from "react";
import { data as FoodMenu } from "../data/data";
import { categories } from "../data/data";
function Food() {
  console.log(FoodMenu, categories);
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* {Filter Row} */}
      <div className="flex flex-col lg:flex-row justify-between ">
        {/* {Filter Type} */}
        <div>
          <p>Filter Type</p>
          <button>All</button>
          <button>Burgers</button>
          <button>Pizza</button>
          <button>Salads</button>
          <button>Chicken</button>
        </div>
        {/* {Filter Price} */}
        <div>
          <p>Filter Price</p>
          <div>
            <button>$10</button>
            <button>$40</button>
            <button>$50</button>
            <button>$80</button>
            <button>$100</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
