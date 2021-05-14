// let groupCards = document.querySelectorAll('.card-group-section'),
// storiesCards = document.querySelectorAll('.card-stories-section'),
// newsCards = document.querySelectorAll('.card-news-section');

// const cards = [groupCards, storiesCards, newsCards]


// for (j = 0; j < cards.length; j++) {

//   cards[j].forEach((elem)=>{
//     elem.addEventListener('mouseover', () => {
//       elem.classList.add('active')
      
//       cards[0].forEach((item) => {
//         if (!item.classList.contains('active')) item.classList.add('inactive')
//       })
  
//       elem.addEventListener('mouseout', () => {
//         cards[0].forEach((item) => {
//           item.classList.remove('active')
//           item.classList.remove('inactive')
//         })
//       }) 
//     })  
//   })
// }

const cards = document.querySelectorAll('.card')

cards.forEach((elem)=>{
  elem.addEventListener('mouseover', () => {
    elem.classList.add('active')
    
    cards.forEach((item) => {
      if (!item.classList.contains('active')) item.classList.add('inactive')
    })

    elem.addEventListener('mouseout', () => {
      cards.forEach((item) => {
        item.classList.remove('active')
        item.classList.remove('inactive')
      })
    }) 
  })  
})





// очистить поле поиска и отобразить/показать кнопку Х
let clearButton = document.querySelector('.clear-field'),
searchField = document.querySelector('#searchField');

clearButton.onclick = () => {
  searchField.value = ''
  searchField.value ? clearButton.style.display = 'flex' : clearButton.style.display = 'none'
}

searchField.oninput = () => {
  searchField.value ? clearButton.style.display = 'flex' : clearButton.style.display = 'none'
}


window.addEventListener('scroll', () => {
  let navbar = document.querySelector('nav')

  navbar.classList.toggle('fixed', window.scrollY > 0)
})