// Добавление классов эффектов при наведении на карточки
const cards = document.querySelectorAll('.card')

cards.forEach((elem)=>{
  elem.addEventListener('mouseover', () => {
    const parent = elem.parentElement,
    thisCards = parent.querySelectorAll('.card');
    
    thisCards.forEach((el) => {
      el.classList.add('inactive')
    })

    elem.classList.remove('inactive')
    elem.classList.add('active')
  })  

  elem.addEventListener('mouseout', () => {
    cards.forEach((item) => {
      item.classList.remove('active')
      item.classList.remove('inactive')
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

// функция Hamburger Menu
function navToggle() {
  let btn = document.getElementById('menuBtn'),
  nav = document.getElementById('menu');

  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
}


const links = [
  
    {
      name: 'Group',
      url: '#',
      title: {
          name: 'Who we are',
          url: '#'
      },
      lists: [
        {
          list_1: {       
              title: 'About Emi',
              url: '#',     
              items: [
              {
                  item_1: {
                  title: 'Our purpose',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Strategy & Model',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Quality & Safety Standards',
                  url: '#'
                  }
              },
              { 
                  item_4: {
                  title: 'Our performance',
                  url: '#'
                  }
              }              
              ]
          }
        },
        {
          list_2: {       
              title: 'Governance & Ethics',
              url: '#',     
              items: [
              {
                  item_1: {
                  title: 'Board of directors',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Executive Committee',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Our ethical principles',
                  url: '#'
                  }
              }             
              ]
          }
        },
        {
          list_3: {       
              title: 'Culture & Heritage',
              url: '#',     
              items: [
              {
                  item_1: {
                  title: 'Life at Emi',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Values & Mindset',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Emi History',
                  url: '#'
                  }
              }             
              ]
          }
        },
        {
          list_4: {       
            title: 'News & Documentation',
            url: '#',     
            items: [
              {
                item_1: {
                title: 'News',
                url: '#'
                }
              },
              {  
                item_2: {
                title: 'Publications',
                url: '#'
                }
              },
              {
                item_3: {
                title: 'Media Library',
                url: '#'
                }
              },
              { 
                item_4: {
                title: 'Press Releases',
                url: '#'
                }
              }              
            ]
          }
        }
      ]
    },
  
    {
      name: 'Commitments',
      url: '#',
      title: {
          name: 'Our Commitments & Responsibilities',
          url: '#'
      },
      lists: [
        {
          list_1: {       
            title: 'For the Planet',
            url: '#',     
            items: [
              {
                item_1: {
                title: 'Our purpose',
                url: '#'
                }
              },
              {  
                item_2: {
                title: 'Strategy & Model',
                url: '#'
                }
              },
              {
                item_3: {
                title: 'Quality & Safety Standards',
                url: '#'
                }
              },
              { 
                item_4: {
                title: 'Our performance',
                url: '#'
                }
              }              
            ]
          }
        },
        {
          list_2: {       
              title: 'Governance & Ethics',
              url: '#',     
              items: [
              {
                  item_1: {
                  title: 'Board of directors',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Executive Committee',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Our ethical principles',
                  url: '#'
                  }
              }             
              ]
          }
        },
        {
          list_3: {       
              title: 'Culture & Heritage',
              url: '#',     
              items: [
              {
                  item_1: {
                  title: 'Life at Emi',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Values & Mindset',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Emi History',
                  url: '#'
                  }
              }             
              ]
          }
        },
        {
          list_4: {       
              title: 'News & Documentation',
              url: '#',     
              items: [
              {
                  item_1: {
                  title: 'News',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Publications',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Media Library',
                  url: '#'
                  }
              },
              { 
                  item_4: {
                  title: 'Press Releases',
                  url: '#'
                  }
              }              
              ]
          }
        }
      ]
    },
  
    {
      name: 'Brands',
      url: '#',
      title: {
          name: 'Our Global Brands Portfolio',
          url: '#'
      },
      lists: [
        {
          list_1: {       
              title: 'Consumer Products',
              url: '#',     
              items: [
              {
                  item_1: {
                  title: 'Our purpose',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Strategy & Model',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Quality & Safety Standards',
                  url: '#'
                  }
              },
              { 
                  item_4: {
                  title: 'Our performance',
                  url: '#'
                  }
              }              
              ]
          }
        },
        {
          list_2: {       
              title: 'Emi Luxe',
              url: '#', 
              itemsTitle: {
              title: 'Explore Emi Luxe Division',
              url: '#'
              },     
              items: [
              {
                  item_1: {
                  title: 'Board of directors',
                  url: '#'
                  }
              },
              {  
                  item_2: {
                  title: 'Executive Committee',
                  url: '#'
                  }
              },
              {
                  item_3: {
                  title: 'Our ethical principles',
                  url: '#'
                  }
              }             
              ]
          }
        },
        {
          list_3: {       
            title: 'Profession Products',
            url: '#',   
            itemsTitle: {
              title: 'Explore Professional Products Division',
              url: '#'
            },  
            items: [
              {
                item_1: {
                title: 'Life at Emi',
                url: '#'
                }
              },
              {  
                item_2: {
                title: 'Values & Mindset',
                url: '#'
                }
              },
              {
                item_3: {
                title: 'Emi History',
                url: '#'
                }
              }             
            ]
          }
        },
        {
          list_4: {       
            title: 'Active Cosmetics',
            url: '#',   
            itemsTitle: {
              title: 'Explore Active Cosmetics Division',
              url: '#'
            },   
            items: [
              {
                item_1: {
                title: 'News',
                url: '#'
                }
              },
              {  
                item_2: {
                title: 'Publications',
                url: '#'
                }
              },
              {
                item_3: {
                title: 'Media Library',
                url: '#'
                }
              },
              { 
                item_4: {
                title: 'Press Releases',
                url: '#'
                }
              }              
            ]
          }
        }
      ]
    },
  
  {
    name: 'Beauty Science & Technology',
    url: '#',
    title: {
        name: 'How to Invent Future of Beauty',
        url: '#'
    },
    lists: [
        {
        list_1: {       
            title: 'Beauty Research & Innovation',
            url: '#',     
            items: [
            {
                item_1: {
                title: 'Our purpose',
                url: '#'
                }
            },
            {  
                item_2: {
                title: 'Strategy & Model',
                url: '#'
                }
            },
            {
                item_3: {
                title: 'Quality & Safety Standards',
                url: '#'
                }
            },
            { 
                item_4: {
                title: 'Our performance',
                url: '#'
                }
            }              
            ]
        }
        },
        {
        list_2: {       
            title: 'Governance & Ethics',
            url: '#',     
            items: [
            {
                item_1: {
                title: 'Board of directors',
                url: '#'
                }
            },
            {  
                item_2: {
                title: 'Executive Committee',
                url: '#'
                }
            },
            {
                item_3: {
                title: 'Our ethical principles',
                url: '#'
                }
            }             
            ]
        }
        },
        {
        list_3: {       
            title: 'Culture & Heritage',
            url: '#',     
            items: [
            {
                item_1: {
                title: 'Life at Emi',
                url: '#'
                }
            },
            {  
                item_2: {
                title: 'Values & Mindset',
                url: '#'
                }
            },
            {
                item_3: {
                title: 'Emi History',
                url: '#'
                }
            }             
            ]
        }
        },
        {
        list_4: {       
            title: 'News & Documentation',
            url: '#',     
            items: [
            {
                item_1: {
                title: 'News',
                url: '#'
                }
            },
            {  
                item_2: {
                title: 'Publications',
                url: '#'
                }
            },
            {
                item_3: {
                title: 'Media Library',
                url: '#'
                }
            },
            { 
                item_4: {
                title: 'Press Releases',
                url: '#'
                }
            }              
            ]
        }
        }
      ]
  },
  
  {
    name: 'Careers',
    url: '#'
  }
  
]

console.log(links);

// let linkTitle = document.querySelector('.link-title')

// linkTitle.textContent = '123'

let navlink = document.querySelectorAll('.nav-link'),
submenu = document.querySelector('.submenu');

// Показать подменю при наведении курсора на ссылку
navlink.forEach((el, i) => {
  
  el.textContent = links[i].name


  el.addEventListener('mouseover', () => {
    submenu.classList.remove('hidden')
    submenu.classList.add('flex')
  })
})

// Скрыть подменю при mouseleave submenu
submenu.addEventListener('mouseleave', () => {
  submenu.classList.remove('flex')
  submenu.classList.add('hidden')
})

