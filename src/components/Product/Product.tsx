import React from 'react'

import { useAppDispatch } from '../../app/hooks';
import { addProduct } from '../../features/productSlice'

interface ProductProps {
  a_iId       : number;
  a_strTitle  : string;
  a_iPrice    : number;
  a_iRating   : number;
  a_strImage  : string;
}

function Product({a_iId, a_strTitle, a_iPrice, a_iRating, a_strImage} : ProductProps) {
  const dispatch = useAppDispatch()
  
  const data = {
    id: a_iId,
    title: a_strTitle,
    price: a_iPrice,
    rating: a_iRating,
    image: a_strImage
  }

  const addToBasket = () => {
    dispatch(addProduct(data))
  }

  return (
    <div className="product">
      <div className="productInfo">
        <p>{a_strTitle}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{a_iPrice}</strong>
        </p>

        <div className="productRating">
          {Array(a_iRating).fill(Array(a_iRating)).map(() => (
            <p key={a_iId}>⭐</p>
          ))}
        </div>
      </div>

      <img src={a_strImage} alt="product_img" />
      <button onClick={() => addToBasket()}>Add to Basket</button>
    </div>
  )
}

export default Product
