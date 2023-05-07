import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Card from "../Card/Card";
import Filters from "../Filter/Filters";
import Sort from "../Sort/Sort";
import "./css/Content.css";

const Content = ({ data, nextCall,hasMore,product_for }) => {
  const [content, setContent] = useState(data);
  const [fliter, setFilter] = useState({
    gender: "M",
    color: false,
    category: false,
  });
  const [sort, setSort] = useState("What's New");

  useEffect(() => {
    let sortedContent = content;
    if (sort === "Price low to high") {
      sortedContent = sortedContent.sort(
        (a, b) => Number(a.finalPrice) - Number(b.finalPrice)
      );
      setContent(sortedContent);
    } else if (sort === "Better Discount") {
      sortedContent = sortedContent.sort(
        (a, b) => Number(a.discount) - Number(b.discount)
      );
      setContent(sortedContent);
    } else {
      sortedContent = content;
      setContent(sortedContent);
    }
  }, [sort]);

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
      <div className="sortFilter">
        <Sort setSort={setSort} />
      </div>
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
        {/* <div className="product-tile-holder">
          
        </div> */}
      </div>
    </div>
  );
};

export default Content;
