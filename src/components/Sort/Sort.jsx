import React from "react";
import "./css/Sort.css";

const Sort = ({ setSort }) => {
  return (
    <>
    <div className="sort-hold">
      FILTERS
    </div>
    <div className="sort-holder">
      <select name="sort" onChange={(e) => setSort(e.target.value)}>
        <option value="What's New">What's New</option>
        <option value="Price low to high">Price low to high</option>
        <option value="Better Discount">Better Discount</option>
      </select>
    </div>
    </>
  );
};

export default Sort;
