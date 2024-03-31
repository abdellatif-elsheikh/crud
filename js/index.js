import Global from "./modules/Global.module";
import HandelData from "./modules/HandelData.module";
import DisplayProducts from "./modules/DisplayProduct.module";
import Dashboard from "./modules/Dashboard";


// *--------- **** INSTANCES **** ----------*
const global = new Global
const handelData = new HandelData
const displayProducts = new DisplayProducts
const dashboard = new Dashboard


global.preventFormAction()

// take the action button
const submit = document.querySelector('.submit')
submit.addEventListener('click', handelData.collectData)




displayProducts.displayProducts(global.productsArray)

// ************************DASHBOARD***********************************
// display dashboard
const displayButtons = document.querySelectorAll('.display-btn')
displayButtons.forEach(ele => {
  ele.addEventListener('click', dashboard.showDashboard)
})
// close dashboard
const closeIcon = document.querySelector('.close-icon')
closeIcon.addEventListener('click', dashboard.closeDashboard)

dashboard.addEventsForDashboardButtons()

// ***************************************************************
