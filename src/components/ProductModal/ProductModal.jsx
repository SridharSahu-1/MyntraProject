import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../../firebase";
import { cartContext, dataContext } from "../App";
import "./ProductModal.css";

const ProductModal = () => {
  const navigate = useNavigate();
  const [size, setSize] = useState("");
  const { index } = useParams();
  let [product_for, idx] = index.split("-");
  const [id,setId] = useState(idx);
  const { cart, setCart } = useContext(cartContext);
  let { data: Data, setData } = useContext(dataContext);
  const productSize = ["xs", "sm", "s", "m", "l", "xl"];

  if (Data.length === 0) {
    getData(`/${product_for}`, Math.floor(id / 20)).then((res) => {
      if (res?.length >= 0) {
        setData(res);
        setId(id=>id%res.length);
      } else {
        navigate("/404");
      }
    });
  }
  const {
    images,
    brand,
    title,
    type,
    variant_compare_at_price,
    variant_price,
    product_details,
    id:productId
  } = Data.length !== 0 ? Data[id] : {};
  const discount = Math.round((variant_price / variant_compare_at_price) * 100);
  return (
    !!Data.length && (
      <div>
        <div className="route">
          <b>{type}</b>
        </div>
        <div id="product-modal">
          <div id="otherImages">
            {images?.slice(0, Math.min(images?.length, 4))?.map((e, i) => (
              <img key={i} src={e} alt="otherImage" />
            ))}
          </div>
          <div className="details">
            <div>
              <h2 className="name">{brand}</h2>
              <h3 className="description">{title}</h3>
            </div>
            <hr />
            <div className="prices">
              <div className="finalPrice">
                <i className="rupee sign icon"></i>
                {variant_price}
              </div>
              <div>
                MRP{" "}
                <strike className="strikePrice">
                  {variant_compare_at_price}
                </strike>
              </div>
              <div className="discount">Discount {discount}%</div>
            </div>
            <div>
              <h3>Size Chart</h3>
              {productSize.map((ele, i) => (
                <button
                  onClick={() => setSize(ele)}
                  className={size === ele ? "size-active" : "size-option"}
                  key={i}
                >
                  {ele}
                </button>
              ))}
            </div>
            <button
              className="add__cart__btn"
              onClick={() => {
                const payload = {
                  brand,
                  title,
                  variant_price,
                  variant_compare_at_price,
                  discount,
                  images,
                  size,
                  id:productId
                };
                if (size === "") {
                  alert("Please select size");
                } else {
                  setCart([...cart, payload]);
                }
              }}
            >
              Add to Cart
            </button>
            <br />
            <p>100% Original Products</p>
            <p>Pay on delivery might be available</p>
            <p>Easy 30 days returns and exchanges</p>
            <p>Try & Buy might be available</p>
            <hr/>
            <h3 className="details__header">product details</h3>
            {product_details.split(",").map((el, id) => (
              <p key={id}>{el}</p>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default ProductModal;
