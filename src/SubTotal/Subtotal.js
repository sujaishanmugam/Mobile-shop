import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useHistory } from "react-router";

function Subtotal() {
  const history = useHistory();
  const [{ subTotal }] = useStateValue();
 
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <img
              src="https://m.media-amazon.com/images/G/02/img15/SeptEye19/desktop/iphone11pro1._CB436763248_.jpg"
              alt=""
            />
            <p>
              Subtotal ({subTotal?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(subTotal)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={e => history.push ('/payment')}>Proceed to Checkout</button>

    </div>
  );
}

export default Subtotal;
