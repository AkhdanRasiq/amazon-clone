import React from 'react'

function Product() {
  return (
    <div className="product">
      <div className="productInfo">
        <p>The Product Title</p>
        <p className="productPrice">
          <small>$</small>
          <strong>19.99</strong>
        </p>

        <div className="productRating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>

      <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="amazon_banner" />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product
