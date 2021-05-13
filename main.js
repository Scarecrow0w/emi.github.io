let cards = document.querySelectorAll('.card');


cards.forEach((elem)=>{
  elem.addEventListener('mouseover', () => {
      elem.classList.toggle('active')
  })  
})

// cards.forEach((elem)=>{
//     elem.addEventListener('mouseout', () => {
//         elem.classList.remove('active')
//     }) 
//   })

let filterItems = document.querySelectorAll('.filter-item');


// filterItems.forEach((elem)=>{
//   elem.addEventListener('mouseover', () => {
//       elem.classList.toggle('filter-item-active')
//   })  

//   elem.addEventListener('mouseout', () => {
//     elem.classList.remove('filter-item-active')
// }) 
// })

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