import Validations from "./Validation.module";
import HandelValidations from "./HandelValidations.module";
import Global from "./Global.module";
import DisplayProducts from "./DisplayProduct.module";

const validations = new Validations
const handelValidations = new HandelValidations
const global = new Global
const displayProducts = new DisplayProducts

export default class HandelData {
  storeData = (category, brand, title, price, description, stock, rating, images) => {
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
  collectData = async () => {
    const d = document
    const cat = d.getElementById('category').value.trim()
    const brand = d.getElementById('brand').value.trim()
    const title = d.getElementById('title').value.trim()
    const price = d.getElementById('price').value.trim()
    const desc = d.getElementById('desc').value.trim()
    const stock = d.getElementById('stock').value.trim()
    const rating = d.getElementById('rating').value.trim()
    const images = [d.getElementById('imageUrl').value.trim()]
    const newProd = this.storeData(cat, brand, title, price, desc, stock, rating, images)

    const isValid = validations.validateProduct(newProd)



    // if (await isValid === true) {
      handelValidations.deleteErrMsg()
      global.productsArray.unshift(newProd)
      displayProducts.displayProducts(global.productsArray)
      return
    // }

    handelValidations.deleteErrMsg()
    handelValidations.displayValidationErrs(await isValid)
    return false
  }

}