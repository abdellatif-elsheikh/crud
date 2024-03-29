import { validateImage } from "image-validator";

export default class Validations {
  imageValidation = async (file) => {
    const isValidImage = await validateImage(file);
    return isValidImage
  };
  
  validateProduct = async () => {
    const validations = {
      category: /^(smartphones|laptops|fragrances|skincare|groceries|home-decoration)$/,
      brand: /^(Apple|Samsung|Huawei|OPPO|Infinix|Microsoft|other)$/,
      title: /^[\w\s-]{4,30}$/,
      price: /^(?:[1-9]\d{0,5}|100000)$/,
      desc: /^.{30,700}$/,
      stock: /^(?:[1-9]\d{0,3}|1000)$/,
      rating: /^[1-4]|5$/,
    };
    const results = {};
    const errors = {}
  
    for (let field in validations) {
      const value = document.getElementById(field).value
      const isValid = validations[field].test(value)
      results[field] = isValid
  
      if (!isValid) {
        errors[field] = `invalid ${field}`
      }
    }
    const imageSrc = document.getElementById('imageUrl').value
    const isValidImage = await this.imageValidation(imageSrc)
  
    const isEmpty = Object.keys(errors).length === 0
    if (isEmpty && isValidImage) {
      return true
    }
    if (!isValidImage) errors['imageUrl'] = 'invalid image'
    return errors
  }
  
}