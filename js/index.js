import { validateImage } from "image-validator";

let allProductsContainer = []


// prevent form from being submitted
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
})

const fetchProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const receivedData = await response.json();
    const allData = [...allProductsContainer, ...receivedData.products]
    allProductsContainer = allData
    return receivedData.products
  } catch (error) {
    console.error('Error fetching products:', error);
    return 'Error fetching products:', error
  }
}

// fetchProducts()



// ******** star rating

const starRating = async () => {
  try {
    const data = await allProductsContainer

    const starIcons = document.querySelectorAll('.stars-inner')

    starIcons.forEach((icon, index) => {
      const rating = data[index].rating
      const starPercentage = Number((rating / 5) * 100)
      icon.style.width = starPercentage + '%';
    })
  } catch {
    console.error(error.message);
  }
}

// *** create product card template
const createProductCard = (product) => {
  const template = `<div class="p-3 col-xl-3 col-lg-4 col-md-6 col-12">
  <div class="product card pb-3 border-dark-subtle shadow rounded-2 overflow-hidden">
    <div class="image">
      <img src="${product.images[0] ? product.images[0] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQulVpB9YDxnnJBgPdrm5Rc5x6xmJH0xO1FYihUJpEiDSvHEOgSBSHnADEC-NLfeIQ-vos&usqp=CAU'}"
        class="w-100" alt="" id="image">
    </div>
    <div class="content p-2">
      <h4 class="model-name my-3">${product.title}</h4>
      <p class="product-desc">${product.description}</p>
      <p>Price: ${product.price}$</p>

      <div class="c-b-avp text-muted ">
        <span class="category text-primary">${product.category}</span>
        <span class="Brand text-info">${product.brand}</span>
        <span class="avp">( <strong>${product.stock}</strong>: Peaces Left)</span>
      </div>
      <!-- ? star rating -->
      <div class="d-flex justify-content-center mt-2">
        <div class="stars-outer">
          <div class="stars-inner"></div>
        </div>
      </div>
      <div class="text-center mt-3">
        <button class="btn btn-outline-primary display-btn">More Details</button>
      </div>

    </div>

  </div>
</div>`
  return template
}

// let productElements = ``
// ******* display the products ***********
const DisplayProducts = async () => {
  const products = await allProductsContainer
  const productsContainer = document.querySelector('.products-table')
  const productElements = products.map(createProductCard).join('')
  productsContainer.innerHTML = productElements

  //  ***** call star rating function here after creating the elements 
  starRating()
}


// **************************************************************** START WORKING ON MY DATA ****************************************************************************************

const myData = []
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

// image validation 

const imageValidation = async (file) => {
  const isValidImage = await validateImage(file);
  return isValidImage
};

const validateProduct = async () => {
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
  const isValidImage = await imageValidation(imageSrc)

  const isEmpty = Object.keys(errors).length === 0
  if (isEmpty && isValidImage) {
    return true
  }
  if (!isValidImage) errors['imageUrl'] = 'invalid image'
  return errors
}

// display validation errors
const displayValidationErrs = ({ ...errors }) => {
  for (let error in errors) {
    const parent = document.getElementById(error).parentElement
    const child = document.createElement('span')
    child.setAttribute('class', 'error-msg')

    const isThereError = parent.children[1].tagName === 'SPAN'
    if (isThereError) {
      return
    }
    parent.insertBefore(child, parent.childNodes[2])
    child.textContent = ` ${errors[error]}`
  }
}

// ! clear all error messages after every submit so it doesn't stick on the page
const deleteErrMsg = () => {
  const errMsgs = document.querySelectorAll('.error-msg')
  errMsgs.forEach(msg => {
    msg.remove()
  })
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

  const isValid = validateProduct(newProd)



  if (await isValid === true) {
    console.log(await isValid);
    deleteErrMsg()
    allProductsContainer.unshift(newProd)
    renderThePage()
  }
  else {
    console.log(await isValid);
    deleteErrMsg()
    displayValidationErrs(await isValid)
  }
  return newProd
}

// take the action button
const submit = document.querySelector('.submit')
submit.addEventListener('click', collectData)




// !!!!!!!!!!!!!!!!! this function must be always the last don't move it to up !!!!!!!!!!!!!!

const renderThePage = async () => {
  await fetchProducts()
  DisplayProducts()
}
renderThePage()
// ***********************************************************
