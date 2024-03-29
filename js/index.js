import StarRating from "./modules/StarRating.module";
import CreateProduct from "./modules/CreateProduct.module";
import Validations from "./modules/Validation.module";
import HandelValidations from "./modules/HandelValidations.module";
import AllProducts from "./modules/AllProducts.module";


// *--------- **** INSTANCES **** ----------*
const starRatingInstance = new StarRating
const createProduct = new CreateProduct
const validations = new Validations
const handelValidations = new HandelValidations
const allProducts = new AllProducts




// prevent form from being submitted
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
})

const fetchProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const receivedData = await response.json();
    const allData = [...allProducts.allProductsContainer, ...receivedData.products]
    allProducts.allProductsContainer = allData
    return receivedData.products
  } catch (error) {
    console.error('Error fetching products:', error);
    return 'Error fetching products:', error
  }
}

// let productElements = ``
// ******* display the products ***********
const DisplayProducts = async () => {
  const products = allProducts.allProductsContainer
  const productsContainer = document.querySelector('.products-table')
  const productElements = products.map(createProduct.createProductCard).join('')
  productsContainer.innerHTML = productElements

  //  ***** call star rating function here after creating the elements 
  starRatingInstance.starRating(allProducts.allProductsContainer)
}


// **************************************************************** START WORKING ON MY DATA ****************************************************************************************

// **** Create a method that stores taken data from the page ****
const storeData = (category, brand, title, price, description, stock, rating, images) => {
  const takenData = {
    category,
    brand,
    title,
    price,
    description,
    stock,
    rating,
    images
  }
  return takenData
}

// Collect the data from the user
const collectData = async () => {
  const d = document
  const cat = d.getElementById('category').value.trim()
  const brand = d.getElementById('brand').value.trim()
  const title = d.getElementById('title').value.trim()
  const price = d.getElementById('price').value.trim()
  const desc = d.getElementById('desc').value.trim()
  const stock = d.getElementById('stock').value.trim()
  const rating = d.getElementById('rating').value.trim()
  const images = [d.getElementById('imageUrl').value.trim()]
  const newProd = storeData(cat, brand, title, price, desc, stock, rating, images)

  const isValid = validations.validateProduct(newProd)



  if (await isValid === true) {
    console.log(await isValid);
    handelValidations.deleteErrMsg()
    allProducts.allProductsContainer.unshift(newProd)
    renderThePage()
  }
  else {
    console.log(await isValid);
    handelValidations.deleteErrMsg()
    handelValidations.displayValidationErrs(await isValid)
  }
  return newProd
}

// take the action button
const submit = document.querySelector('.submit')
submit.addEventListener('click', collectData)




// !!!!!!!!!!!!!!!!! this function must be always the last don't move it to up !!!!!!!!!!!!!!

const renderThePage = async () => {
  await allProducts.fetchProducts()
  DisplayProducts()
}
renderThePage()
// ***********************************************************
