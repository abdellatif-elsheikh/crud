export default class CreateProduct {
  createProductCard = (product) => {
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
}