import HomeView from "../views/HomeView"
import CheckoutView from "../views/CheckoutView"

const router = [
  {
    "id": "homeView",
    "path": "/",
    "element": HomeView
  },
  {
    "id": "checkoutView",
    "path": "/checkout",
    "element": CheckoutView
  }
]

export default router
