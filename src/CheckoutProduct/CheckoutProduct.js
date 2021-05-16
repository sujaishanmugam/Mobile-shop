import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ subTotal }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the product from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  const addToSubTotal = () => {
    // dispatch the item into the data layer
    {
      subTotal?.length < 1
        ? dispatch({
            type: "ADD_TO_SUBTOTAL",
            item: {
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating,
            },
          })
        : alert("Each person can only check out one device at a time.");
    }
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button className="checkoutProduct__basket" onClick={removeFromBasket}>
          Remove from Basket
        </button>
        <br />
        <button onClick={addToSubTotal}>Add to Subtotal</button>
      </div>
    </div>
  );
}
export default CheckoutProduct;
