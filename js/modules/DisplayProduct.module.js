import StarRating from "./StarRating.module";
import CreateProduct from "./CreateProduct.module";
import Dashboard from "./Dashboard";

const starRatingInstance = new StarRating
const createProduct = new CreateProduct

export default class DisplayProducts {

  dashboard = new Dashboard

  displayProducts = (productsArray) => {
    const products = productsArray
    const productsContainer = document.querySelector('.products-table')
    const productElements = products.map(createProduct.createProductCard).join('')
    productsContainer.innerHTML = productElements
  
    //  ***** call star rating function here after creating the elements 
    starRatingInstance.starRating(productsArray)

    this.dashboard.addEventsForDashboardButtons()
  }
}