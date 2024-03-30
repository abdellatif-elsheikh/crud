import Global from "./modules/Global.module";
import HandelData from "./modules/HandelData.module";
import DisplayProducts from "./modules/DisplayProduct.module";



// *--------- **** INSTANCES **** ----------*
const global = new Global
const handelData = new HandelData
const displayProducts = new DisplayProducts


global.preventFormAction()

// take the action button
const submit = document.querySelector('.submit')
submit.addEventListener('click', handelData.collectData)


// !!!!!!!!!!!!!!!!! this function must be always the last don't move it to up !!!!!!!!!!!!!!

const renderThePage = () => {
  displayProducts.displayProducts(global.productsArray)
}
renderThePage()
// ***********************************************************
