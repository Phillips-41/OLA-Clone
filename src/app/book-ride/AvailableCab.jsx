import React from "react";

const AvailableCab = () => {
  return (
    <div className="flex items-center border rounded-md py-2 px-5 cursor-pointer -z-10">
      <div>
        <img
          className="w-7"
          src="https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_640.png"
          alt=""
        />
      </div>
      <div className="pl-5 text-sm">
        <p className="font-semibold">Prime SVP </p>
        <p className="text-xs">SUVS with free Wifi and top Drivers</p>
      </div>
    </div>
  );
};

export default AvailableCab;
