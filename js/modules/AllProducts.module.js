export default class AllProducts {
  allProductsContainer = []

  fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const receivedData = await response.json();
      const allData = [...this.allProductsContainer, ...receivedData.products]
      this.allProductsContainer = allData
      return receivedData.products
    } catch (error) {
      console.error('Error fetching products:', error);
      return 'Error fetching products:', error
    }
  }
}