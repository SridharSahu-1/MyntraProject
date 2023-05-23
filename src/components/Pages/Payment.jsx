import React from "react";
import "./Payment.css";
import { CiDiscount1 } from "react-icons/ci";

export default function Payment() {
  return (
      <div class="container">
        <div class="left-div">
          <div class="address-div">
            <div>Deliver to: Name pincode</div>
            <button>Change Address</button>
          </div>
          <div class="offers-div">
            
            <h2> <CiDiscount1 className="discount_icon"/> Available Offers</h2>
            <p>
              Get up to Rs 500 Cashback on CRED pay(Android Devices only) on a
              min spend of Rs 1000. TCA
            </p>
          </div>
          <div class="image-div">
            <img src="image.jpg" alt="Product Image" />
          </div>
        </div>
        <div class="right-div">
          <div class="box-div">
            <h2>Box Heading</h2>
            <p>Box Text</p>
          </div>
          <div class="button-div">
            <h2>Button Heading</h2>
            <button>Click Me</button>
          </div>
        </div>
      </div>
    
  );
}
