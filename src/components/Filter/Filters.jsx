import React,{useContext} from "react";
import { dataContext } from "../App";

const Filters = () => {
  const {filter,setFilter} = useContext(dataContext)
  function filterColor(e) {
    //setFilter({ ...fliter, color: e.target.checked });
    console.log(e.target.value);
    setFilter({...filter,color:e.target.value})
  }
  // filter data using brand name
  function filterFn(e){
    //setFilter({ ...fliter, brand: e.target.checked });
    console.log(e.target.value);
    setFilter({...filter,brand:e.target.value})

  }
  

  return (
    <div className="filter-holder">
      <div>
        <h3>BRANDS</h3>
        <div className="filter_group">
          <input
            type="radio"
            id="all"
            value=""
            name="brand"
            onChange={filterFn}
          />
          <label htmlFor="all">All</label>
        </div>
        <div className="filter_group">
          <input
            type="radio"
            id="manyavar"
            value="manyavar"
            name="brand"
            onChange={filterFn}
          />
          <label htmlFor="manyavar">Manyavar</label>
        </div>
        <div className="filter_group">
          <input
            type="radio"
            id="wintage"
            name="brand"
            value="wintage"
            onChange={filterFn}
          />
          <label htmlFor="wintage">Wintage</label>
        </div>
        <div className="filter_group">
          <input
            type="radio"
            id="svanik"
            name="brand"
            value="svanik"
            onChange={filterFn}
          />
          <label htmlFor="svanik">Svanik</label>
        </div>
        <div className="filter_group">
          <input
            type="radio"
            id="ethnicity"
            name="brand"
            value="ethnicity"
            onChange={filterFn}
          />
          <label htmlFor="ethnicity">Ethnicity</label>
        </div>
        <div className="filter_group">
          <input
            type="radio"
            id="vastramay"
            name="brand"
            value="vastramay"
            onChange={filterFn}
          />
          <label htmlFor="vastramay">Vastramay</label>
        </div>
      </div>

      <div>
        <h3>COLOR</h3>
        <div className="filter_group">
          <input
            type="radio"
            name="color"
            id="color-all"
            value=""
            onChange={filterColor}
          />
          <label htmlFor="color-all">All</label>
        </div>
        <div className="filter_group">
          <input
            type="radio"
            name="color"
            id="white"
            value="white"
            onChange={filterColor}
          />
          <label htmlFor="white">White</label>
        </div>
        <div className="filter_group">
          <input
            type="radio"
            id="black"
            name="color"
            value="black"
            onChange={filterColor}
          />
          <label htmlFor="black">Black</label>
        </div>
        <div className="filter_group">
          <input
            type="radio"
            id="blue"
            name="color"
            value="blue"
            onChange={filterColor}
          />
          <label htmlFor="blue">Blue</label>
        </div>
        <div className="filter_group">
          <input
            type="radio"
            id="green"
            name="color"
            value="green"
            onChange={filterColor}
          />
          <label htmlFor="green">Green</label>
        </div>
        <div className="filter_group">
          <input
            type="radio"
            id="yellow"
            name="color"
            value="yellow"
            onChange={filterColor}
          />
          <label htmlFor="yellow">Yellow</label>
        </div>
      </div>
      
    </div>
  );
};

export default Filters;
