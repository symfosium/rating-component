const app = document.querySelector('.app')
const appReview = document.querySelector('.app-review')
const appReviewNumberBox = document.querySelector('.app-review__number')
const ratingNumbers = document.querySelector('.app__rating')
const numbers = document.querySelectorAll('.app__rating-number')
const btn = document.querySelector('.app__link')

function getNumber(e) {
  const activeNumber = e.target

  numbers.forEach((elem) => {
    if (elem !== activeNumber) {
      elem.classList.remove('active')
    }
  })

  activeNumber.classList.add('active')
  return activeNumber
}

ratingNumbers.addEventListener('click', getNumber)

btn.addEventListener('click', () => {
  let ratingSelected = false

  app.style.display = 'none'
  appReview.style.display = 'block'

  numbers.forEach((elem) => {
    if (elem.classList.contains('active')) {
      appReviewNumberBox.innerHTML = `You selected ${elem.textContent} out of 5`
      ratingSelected = true
    }
  })

  if (!ratingSelected) {
    alert('Give number!')
    app.style.display = 'block'
    appReview.style.display = 'none'
  }
})
