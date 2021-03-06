import React from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectProductList, removeProduct, addProduct } from '../../features/productSlice'

interface IProductCheckout {
  a_iId       : number,
  a_strTitle  : string,
  a_iPrice    : number,
  a_iRating   : number,
  a_strImage  : string,
  a_iQty      : number  
}

function ProductCheckout({ a_iId, a_strTitle, a_iPrice, a_iRating, a_strImage, a_iQty }: IProductCheckout) {
  const dispatach   = useAppDispatch()
  const productList = useAppSelector(selectProductList)

  const onBtnAddProductClick = () => {
    dispatach(addProduct({ id: a_iId }))
  }

  const onBtnRemoveProductClick = () => {
    dispatach(removeProduct({ id: a_iId }))
  }

  const ratingRender = () => {
    const ratingElement = []
    for (let iRating = 0; iRating < a_iRating; iRating++) {
      ratingElement.push(<p key={iRating}>⭐</p>)
    }
    return ratingElement
  }

  return (
    <div className='productCheckout'>
      <div>
        <img className='productCheckoutImage' src={a_strImage} alt="product_img" />
      </div>
      <div className='productCheckoutInfo'>
        <p className='productCheckoutInfoTitle'>
          {a_strTitle}
        </p>
        <p className='productCheckoutInfoPrice'>
          <small>$</small>
          <strong>{a_iPrice}</strong>
        </p>
        <div className="productCheckoutInfoRating">
          {ratingRender().map((item, index) => (
            item
          ))}
        </div>
        <div className='productCheckoutAction'>
          <button onClick={() => onBtnRemoveProductClick()}>─</button>
          <p>{a_iQty}</p>
          <button onClick={() => onBtnAddProductClick()}>+</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCheckout
