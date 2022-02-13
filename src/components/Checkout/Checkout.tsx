import React from "react"
import Subtotal from "./Subtotal"

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkoutItems">
        <div>
          <h2 className="checkoutTitle">
            Your Shopping Basket
          </h2>

        </div>
      </div>
      <div className="checkoutSubtotal">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
