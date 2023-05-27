import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Card from "../Card/Card";
import Filters from "../Filters";
import "./Content.css";

const Content = ({ data, nextCall,hasMore,product_for }) => {
  const [content, setContent] = useState(data);
  const [fliter, setFilter] = useState({
    gender: "M",
    color: false,
    category: false,
  });


  useEffect(() => {
    let filteredData = data;
    if (fliter.color) {
      filteredData = filteredData.filter((ele) => ele.link.includes("white"));
    }
    if (fliter.category) {
      filteredData = filteredData.filter((ele) => ele.folded === "Y");
    }
    setContent(filteredData);
  }, [fliter]);
  return (
    <div className="content">
    
      <div className="mainDisplay">
        <div className="sideBar">
          <Filters setFilter={setFilter} fliter={fliter} />
        </div>
        <InfiniteScroll
          dataLength={data.length}
          className="product-tile-holder"
          next={nextCall}
          hasMore={hasMore}
        >
          {data.map((ele, i) => (
            <Card key={i} {...ele} index={i} product_for={product_for} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Content;
