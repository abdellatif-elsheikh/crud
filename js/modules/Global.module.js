export default class Global {
  productsArray = []
  // prevent form from being submitted
  preventFormAction = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
    })
  }
}