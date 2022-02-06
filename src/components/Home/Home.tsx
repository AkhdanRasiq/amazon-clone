import Product from '../Product/Product'

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img className="homeBanner" src={require('../../assets/img/amazon_banner.jpg')} alt="amazon_banner" />

        <div className="homeRow">
          <Product />
          {/* <Product /> */}
        </div>

        <div className="homeRow">
          {/* <Product /> */}
          {/* <Product /> */}
          {/* <Product /> */}
        </div>

        <div className="homeRow">
          {/* <Product /> */}
        </div>
      </div>
    </div>
  )
}

export default Home
