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

// зафиксировать Navbar по скроллу
window.addEventListener('scroll', () => {
  let navbar = document.querySelector('nav')

  if (window.scrollY > 0) {
    navbar.classList.remove('lg:static')
    navbar.classList.add('fixed')
    navbar.classList.add('navfixed')
  } else {
    navbar.classList.remove('fixed')
    navbar.classList.remove('navfixed')
    navbar.classList.add('lg:static')
  }
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

let navlinks = document.querySelectorAll('.nav-link'),
navtitles = document.querySelectorAll('.nav-title'),
submenu = document.querySelector('.submenu'),
mainMenu = document.querySelector('.main-menu'),
mobileSubMenuDiv = document.querySelector('.mobile-submenu'),
mobileSubMenuLinksDiv = document.querySelector('.mobile-submenu-links-container'),
mobileSubMenuTitles = document.querySelectorAll('.mobile-submenu-titles'),
backToMainMenu = document.querySelector('.back-to-main-menu'),
navbar = document.querySelector('nav'),
backToMobileSubmenu = document.querySelector('.back-to-mobile-submenu');

Navbar()
window.addEventListener('resize', Navbar);

function Navbar() {  
  // Navbar для десктопов
  if (window.innerWidth >= 1024) {  
    navbar.classList.remove('navfixed')

    // Показать подменю при наведении курсора на ссылку
    navlinks.forEach((el, i) => {
      
      el.textContent = links[i].name
        
      el.addEventListener('mouseover', () => fadeIn(submenu))    
      
    })

    // Скрыть подменю при mouseleave submenu
    navbar.addEventListener('mouseleave', () => {
      submenu.classList.remove('flex')
      submenu.classList.add('hidden')
    })
  }

  // Navbar для узких экранов
  if (window.innerWidth < 1024) {
    navbar.classList.add('navfixed')

    // функция Hamburger Menu
    let btn = document.getElementById('menuBtn'),
    nav = document.getElementById('menu');

    btn.onclick = () => {
      btn.classList.toggle('open')
      nav.classList.toggle('-left-full')
      nav.classList.toggle('left-0')
    }

    navtitles.forEach((el, i) => {
      el.textContent = links[i].name

      el.onclick = () => {
        mainMenu.classList.remove('flex')
        mainMenu.classList.add('hidden')
        mobileSubMenuDiv.classList.remove('hidden')
        mobileSubMenuDiv.classList.add('flex')      
        setTimeout(() => {
          mobileSubMenuDiv.classList.remove('translate-x-full')
          mobileSubMenuLinksDiv.classList.add('translate-x-full')
        }, 0)
        
      }

      mobileSubMenuTitles.forEach((title, i) => {
        title.onclick = () => {
          mobileSubMenuDiv.classList.remove('flex')
          mobileSubMenuDiv.classList.add('hidden')
          mobileSubMenuLinksDiv.classList.remove('hidden')
          mobileSubMenuLinksDiv.classList.add('flex')
          setTimeout(() => {
            mobileSubMenuLinksDiv.classList.remove('translate-x-full')
            mobileSubMenuDiv.classList.add('translate-x-full')
          }, 0)
        }
      })
    })

    backToMainMenu.onclick = () => {    
      mobileSubMenuDiv.classList.add('translate-x-full')

      setTimeout(() => {
        mobileSubMenuDiv.classList.remove('flex')
        mobileSubMenuDiv.classList.add('hidden')
        mainMenu.classList.remove('hidden')
        mainMenu.classList.add('flex')
      }, 250)
      
    }

    backToMobileSubmenu.onclick = () => {
      mobileSubMenuLinksDiv.classList.add('translate-x-full')

      setTimeout(() => {
        mobileSubMenuLinksDiv.classList.remove('flex')
        mobileSubMenuLinksDiv.classList.add('hidden')
        mobileSubMenuDiv.classList.remove('hidden')
        mobileSubMenuDiv.classList.add('flex')
        mobileSubMenuDiv.classList.remove('translate-x-full')

      }, 250)
    }
  }
}





// FadeIn effect
function fadeIn(el) {
  let op = 0
  el.style.opacity = op
  el.classList.remove('hidden')
  el.classList.add('flex')
  
  let timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer)
    }
    el.style.opacity = op
    op = op + 0.1
  }, 50);
}

