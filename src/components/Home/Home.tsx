import React, { HTMLFactory, ReactElement, useEffect, useState } from 'react'
import * as ADAPTERS from "../../utils/adapters"
import * as UTILS from "../../utils/util"
import CONFIG from "../../static/config.json"
import Product from '../Product/Product'


interface IProduct {
  id      : number,
  title   : string,
  price   : number,
  rating  : number,
  imgUrl  : string
}

function Home() {
  const [product, setProduct] = useState<IProduct[] | []>([])

  useEffect(() => {
    const promise = ADAPTERS.getRequest(UTILS.getApiUrl(CONFIG.api.products))

    promise.then((res) => {
      setProduct(res.data)
    }, (errReason) => {
      console.log(errReason)
    })
  }, [])

  const getProductArrayElement = () => {
    const elements = []

    for (let iProduct = 0; iProduct < product.length; iProduct++) {
      elements.push(
        <Product
          a_iId       ={product[iProduct].id}
          a_strTitle  ={product[iProduct].title}
          a_iPrice    ={product[iProduct].price}
          a_iRating   ={product[iProduct].rating}
          a_strImage  ={product[iProduct].imgUrl}
        />
      )
    }

    return elements
  }

  const getProductGroupElement = () => {
    const arrProduct = UTILS.arraySplitter(3, getProductArrayElement())
    const arrParent = []

    for (let iProduct = 0; iProduct < arrProduct.length; iProduct++) {
      arrParent.push(
        <div className="homeRow">
          {arrProduct[iProduct].map((item:ReactElement) => (
            <>
              {item}
            </>
          ))}
        </div>
      )
    }

    return arrParent
  }
  
  return (
    <div className="home">
      <div className="homeContainer">
        <img className="homeBanner" src={require('../../assets/img/amazon_banner.jpg')} alt="amazon_banner" />
          {getProductGroupElement().map((item) => (
            <>
              {item}
            </>
          ))}
      </div>
    </div>
  )
}

export default Home
