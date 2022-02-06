import React, { Props } from 'react'

function Product({a_strId, a_strTitle, a_iPrice, a_iRating, a_strImage} : any) {
  return (
    <div className="product">
      <div className="productInfo">
        <p>{a_strTitle}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{a_iPrice}</strong>
        </p>

        <div className="productRating">
          {Array(a_iRating).fill(Array(a_iRating)).map((_, i) => (
            <p>⭐</p>
          ))}
        </div>
      </div>

      <img src={a_strImage} alt="product_img" />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product
