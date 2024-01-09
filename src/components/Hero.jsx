import React from "react";

function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="mx-h-[500px] relative">
        {/* {Overlay} */}
        <div className="absolute w-full h-full text-gray-30 max-h-[500px] text-gray-200 bg-black/45 flex flex-col justify-center className =  items-center">
          <h1 className="px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            The <span className="text-orange-600">Best</span>
          </h1>
          <h1 className="px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            <span className="text-orange-600">Foods</span> Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
    </div>
  );
}

export default Hero;
