import StarRating from "./StarRating.module";
import CreateProduct from "./CreateProduct.module";
import Global from "./Global.module";

const starRatingInstance = new StarRating
const createProduct = new CreateProduct
const global = new Global

export default class DisplayProducts {
  displayProducts = (productsArray) => {
    const products = productsArray
    const productsContainer = document.querySelector('.products-table')
    const productElements = products.map(createProduct.createProductCard).join('')
    productsContainer.innerHTML = productElements
    console.log(products);
  
    //  ***** call star rating function here after creating the elements 
    starRatingInstance.starRating(productsArray)
  }
}