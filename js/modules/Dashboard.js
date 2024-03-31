export default class Dashboard {

  dashboardElement = document.querySelector('.dashboard')

  showDashboard = (e) => {
    this.dashboardElement.classList.add('show-dashboard')
    // const card = e.closest('.product.card')
    // console.log(card.children[1]);
  }

  closeDashboard = () => {
    this.dashboardElement.classList.remove('show-dashboard')
  }
  addEventsForDashboardButtons = () => {
    const displayButtons = document.querySelectorAll('.display-btn')
    displayButtons.forEach(ele => {
      ele.addEventListener('click', () => {
        this.showDashboard(ele)
      })
    })
  }
}