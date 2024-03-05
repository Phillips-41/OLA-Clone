"use client";
import { Divider } from "@mui/material";
import React from "react";
import SearchResultCard from "./SearchResultCard ";

const SearchResult = ({
  area_key,
  setActiveField,
  item,
  lattitude_key,
  longitude_key,
}) => {
  return (
    <div className="absolute top-10 left-0 right-0 z-0 bg-white rounded-md p-2 border max-h-[50vh] overflow-y-scroll shadow-md hide-scrollbar">
      {[1, 1, 1, 1, 1].map((item) => (
        <>
          {" "}
          <SearchResultCard
            area_key={area_key}
            setActiveField={setActiveField}
            key={item.display_name}
            item={item}
            lattitude_key={lattitude_key}
            longitude_key={longitude_key}
          />{" "}
          <Divider />{" "}
        </>
      ))}
    </div>
  );
};

export default SearchResult;
