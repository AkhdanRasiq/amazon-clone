import React from 'react'

import Product from '../Product/Product'

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img className="homeBanner" src={require('../../assets/img/amazon_banner.jpg')} alt="amazon_banner" />

        <div className="homeRow">
          <Product
            a_strID="1"
            a_strTitle='The Product Title Props'
            a_iPrice={19.99}
            a_iRating={5}
            a_strImage="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            a_strID="2"
            a_strTitle='Apple Pencil (2nd Generation)'
            a_iPrice={29.99}
            a_iRating={5}
            a_strImage="https://m.media-amazon.com/images/I/41S3MKU9TjL._AC_UL480_FMwebp_QL65_.jpg"
          />

        </div>

        <div className="homeRow">
          <Product
            a_strID="3"
            a_strTitle='SanDisk 128GB microSDXC Card, Licensed for Nintendo Switch - SDSQXAO-128G-GNCZN'
            a_iPrice={20.95}
            a_iRating={4}
            a_strImage="https://m.media-amazon.com/images/I/810o-i5jpiL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            a_strID="4"
            a_strTitle='Dell USB 3.0 Ultra HD/4K Triple Display Docking Station (D3100), Black'
            a_iPrice={128.98}
            a_iRating={3}
            a_strImage="https://m.media-amazon.com/images/I/61qALmGqKGL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            a_strID="5"
            a_strTitle='Logitech C922x Pro Stream Webcam – Full 1080p HD Camera'
            a_iPrice={94.99}
            a_iRating={2}
            a_strImage="https://m.media-amazon.com/images/I/712xpaJPT6L._AC_UL480_FMwebp_QL65_.jpg"
          />

        </div>

        <div className="homeRow">
          <Product
            a_strID="6"
            a_strTitle='AMD Ryzen 5 5600X 6-core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler'
            a_iPrice={244.78}
            a_iRating={5}
            a_strImage="https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_UL480_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
