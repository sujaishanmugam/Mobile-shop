import React, { useState } from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal, getSubTotal } from "../reducer";

function Payment() {
  const [{ subTotal, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{subTotal?.length} items</Link>)
        </h1>
        {/* payment sec / address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>NO 40 Marina beach</p>
            <p>Chennai,India</p>
          </div>
        </div>
        {/* payment sec / items review */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {subTotal.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment sec / Payment Method*/}
        <div className="payment__section"></div>
        <div className="payment__title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment__details">
          {/* Stripe payment */}
          <form>
            <CardElement />
            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => <h3>Order Total: {value}</h3>}
                decimalScale={2}
                value={getSubTotal(subTotal)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
              <button>Buy Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
