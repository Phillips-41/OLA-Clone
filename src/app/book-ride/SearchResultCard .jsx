"use client";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Import LocationOnIcon

const SearchResultCard = ({
  item,
  lattitude_key,
  longitude_key,
  setActiveField,
  area_key,
}) => {
  const handleSelect = () => {
    console.log();
  };

  return (
    <div
      onClick={handleSelect}
      className="flex items-center py-2 z-10 bg-white cursor-pointer"
    >
      {" "}
      <div className="pr-5">
        <LocationOnIcon />
      </div>
      <div>
        <p className="font-semibold">Tirupati</p>{" "}
        <p className="font-semibold opacity-60">Balaji Colony</p>{" "}
      </div>
    </div>
  );
};

export default SearchResultCard;
