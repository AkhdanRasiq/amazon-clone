import React, { useEffect, useState } from 'react'

import CurrencyFormat from 'react-currency-format'
import { useAppSelector } from '../../app/hooks'
import { selectProductList } from '../../features/productSlice'


function Subtotal() {
  const [totalPrice, setTotalPrice] = useState<string>()
  const [totalItem, setTotalItem]   = useState<string>()
  const productList                 = useAppSelector(selectProductList)

  useEffect(() => {
    updateSubtotal()
  }, [productList])

  const updateSubtotal = () => {
    setTotalPrice(() => {
      return productList.reduce((prev, cur) => prev + (cur.price * cur.qty), 0).toFixed(2).toString()
    })
    setTotalItem(() => {
      return productList.reduce((prev, cur) => prev + cur.qty, 0).toString()
    })
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({totalItem} Items):
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
