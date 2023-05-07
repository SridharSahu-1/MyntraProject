import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Card.css";

const Card = ({
  images,
  title,
  variant_price,
  variant_compare_at_price,
  brand,
  index,
  product_for
}) => {
  const navigate = useNavigate();
  const discount = Math.round(
    (variant_price / variant_compare_at_price) * 100
  );
  return (
    <div
      className="indiv-tile-holder"
      onClick={() => {
        navigate(`/productModal/${product_for}-${index}`);
      }}
    >
      <img src={images[0]} alt="" />
      <p className="name">{brand}</p>
      <p className="description">{title}</p>
      <p className="price">
          <span>Rs.{variant_price}</span>
          <strike className="strikePrice">Rs.{variant_compare_at_price}</strike>
          <span className="discount">({discount})%</span>
        </p>
    </div>
  );
};

export default Card;
