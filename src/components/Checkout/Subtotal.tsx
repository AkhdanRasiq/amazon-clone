import React, { useEffect, useState } from 'react'

import CurrencyFormat from 'react-currency-format'
import { useAppSelector } from '../../app/hooks'
import { selectProductList } from '../../features/productSlice'


function Subtotal() {
  const [totalPrice, setTotalPrice] = useState<string>()
  const productList                 = useAppSelector(selectProductList)

  useEffect(() => {
    getTotalPrice()
  }, [productList])

  const getTotalPrice = () => {
    setTotalPrice(() => {
      let total = 0
      for (let iProduct = 0; iProduct < productList.length; iProduct++) {
        total += productList[iProduct].price * productList[iProduct].qty
      }
      return total.toFixed(2)
    })
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal:
              <strong>{value}</strong>
            </p>
            <small className='subtotalGift'>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button >Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
