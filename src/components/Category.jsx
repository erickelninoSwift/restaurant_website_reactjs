import React from "react";
import { categories } from "../data/data";
function Category() {
  return (
    <div className="max-w-[1640px] px-4 py-12 mx-auto">
      <h1 className="text-orange-600 font-bold text-2xl text-center">
        Top rated Menu Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 w-full">
        {categories.map((currentCategory) => {
          const { id, name, image } = currentCategory;
          return (
            <div
              key={id}
              className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
            >
              <h2 className="font-bold sm:text-xl">{name}</h2>
              <img className="w-20" src={image} alt={name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
