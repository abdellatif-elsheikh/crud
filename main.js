const fetchProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products
  } catch (error) {
    console.error('Error fetching products:', error);
    return 'Error fetching products:', error
  }
}


// ******** star rating

const starRating = async () => {
  try {
    const data = await fetchProducts()

    const starIcons =  document.querySelectorAll('.stars-inner')

    starIcons.forEach((icon, index) => {
      const rating = data[index].rating
      const starPercentage = Number(( rating / 5) * 100 )
      icon.style.width = starPercentage + '%';
    })
  } catch {
    console.error(error.message);
  }
}

// *** create product card template
const createProductCard = (product) => {
  const template = `<div class="p-3 col-xl-3 col-lg-4 col-md-6 col-12">
  <div class="product card border-dark-subtle shadow rounded-2 overflow-hidden">
    <div class="image">
      <img src="${product.images[0]}"
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
        <button class="btn btn-outline-primary display-btn">show more</button>
      </div>

    </div>

  </div>
</div>`
return template
}

// let productElements = ``
// ******* display the products ***********
const DisplayProducts = async () => {
  const products = await fetchProducts()
  const productsContainer = document.querySelector('.products-table')
  const productElements = products.map(createProductCard).join('')
  productsContainer.innerHTML = productElements
  console.log(productElements);

  //  ***** call star rating function here after creating the elements 
  starRating()
}

DisplayProducts()