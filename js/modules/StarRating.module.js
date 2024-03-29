
export default class StarRating {
  star = 0
  starRating = (data) => {
    try {
  
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
}