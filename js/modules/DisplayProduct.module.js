import StarRating from "./StarRating.module";
import AllProducts from "./AllProducts.module"
import CreateProduct from "./CreateProduct.module";

const allProducts = new AllProducts
const starRatingInstance = new StarRating
const createProduct = new CreateProduct

export default class DisplayProducts {
  displayProducts = () => {
    const products = allProducts.allProductsContainer
    const productsContainer = document.querySelector('.products-table')
    const productElements = products.map(createProduct.createProductCard).join('')
    productsContainer.innerHTML = productElements
  
    //  ***** call star rating function here after creating the elements 
    starRatingInstance.starRating(allProducts.allProductsContainer)
  }
}