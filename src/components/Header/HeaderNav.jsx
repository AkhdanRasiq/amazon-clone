import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"

function HeaderNav() {
  return (
    <div className="headerNav">
      <div className="headerNavOption">
        <span className="headerNavOptionTitle">
          <p>Hello Guest</p>
        </span>
        <span className="headerNavOptionItem">
          <p>Sign in</p>
        </span>
      </div>

      <div className="headerNavOption">
        <span className="headerNavOptionTitle">
          <p>Returns</p>
        </span>
        <span className="headerNavOptionItem">
          <p>& Orders</p>
        </span>
      </div>

      <div className="headerNavOption">
        <span className="headerNavOptionTitle">
          <p>Your</p>
        </span>
        <span className="headerNavOptionItem">
          <p>Prime</p>
        </span>
      </div>

      <div className="headerNavOptionBasket">
        <ShoppingBasketIcon />
        <span className="headerNavOptionItem headerNavBasketCount">
          <p>0</p>
        </span>
      </div>
    </div>
  )
}

export default HeaderNav
