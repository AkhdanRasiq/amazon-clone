import React from "react"
import Subtotal from "./Subtotal"

import { useAppSelector } from '../../app/hooks'
import { selectProductList } from '../../features/productSlice'
import ProductCheckout from "../../components/Product/ProductCheckout"

function Checkout() {
  const productList = useAppSelector(selectProductList)


  return (
    <div className="checkout">
      <div className="checkoutItems">
        <div>
          <h2 className="checkoutTitle">
            Your Shopping Basket
          </h2>
          {productList.map((item, index) => (
            <ProductCheckout key={index}
              a_iId       ={item.id}
              a_strTitle  ={item.title}
              a_iPrice    ={item.price}
              a_iRating   ={item.rating}
              a_strImage  ={item.image}
              a_iQty      ={item.qty}
            />
          ))}
        </div>
      </div>
      <div className="checkoutSubtotal">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
