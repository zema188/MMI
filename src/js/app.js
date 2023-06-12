// "use strict"

function changerActive(list) {
    for(let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
    }
    list = 0
}
function deleteSpace(str) {
  return str.replace(/\s+/g, ' ').trim()
}
function deleteLetter(str) {
  return str.replace(/[^0-9]/g,"").trim()
}

//Popup close 
document.addEventListener("click", function(event) {
    event = event || window.event;
    let target = event.target

    if(target.classList.contains('popup')) {
      target.classList.remove('active')
      bodyScrollLock.enableBodyScroll(target);
    }

    //закрытие меню кликом по темной области
    if(target.classList.contains('header-m')) {
      target.classList.remove('active')
      bodyScrollLock.enableBodyScroll(target);
      for (let i = 0; i < headerMenuBtn.length; i++) {
        headerMenuBtn[i].classList.toggle('open')
      }
    }


    //закрытие блоков close-out по клику вне 
    if(!target.classList.contains('close-out') && !target.closest('.close-out')) {
      let closeOutBlock = document.querySelectorAll('.close-out')
      changerActive(closeOutBlock)
    }
  }

)

let popupClose = document.querySelectorAll('.popup-close')
for(let i=0 ; i < popupClose.length ; i++) {
    popupClose[i].addEventListener("click",
    function() {
      let popup = popupClose[i].closest('.popup')
      if(popup.classList.contains('filter')) {
        popup.classList.remove('popup')
      } else {
        popup.classList.remove('active')
      }
        bodyScrollLock.enableBodyScroll(popup);
    })
}




let headerMenuBtn = document.querySelectorAll('.toggle-menu')
let mobileMenu = document.querySelector('.header-m')
for (let i = 0; i < headerMenuBtn.length; i++) {
  headerMenuBtn[i].addEventListener('click', function() {
    toggleMobileMenu()
    bodyScrollLock.disableBodyScroll(mobileMenu);
  })
}

function toggleMobileMenu() {
  for (let i = 0; i < headerMenuBtn.length; i++) {
    headerMenuBtn[i].classList.toggle('open')
  }
  mobileMenu.classList.toggle('active')
}



//открытие link_hidden в хедере меню

if(document.querySelectorAll('[open-for]').length) {
  let openLink = document.querySelectorAll('[open-for]')
  for(let i = 0; i<openLink.length; i++) {
    openLink[i].addEventListener('click', function(e) {
      if(window.innerWidth <= 1023) {
        e.preventDefault()
        let id = this.getAttribute('open-for')
        console.log(id)
        let hiddenBlock = document.querySelector(`[open-id=${id}]`)
        hiddenBlock.classList.toggle('active')
      }
    })
  }
}
// // Size-control
window.addEventListener('resize', function(event){
    let popups = document.querySelectorAll('.popup')
    if(window.innerWidth >= 1024) {
      mobileMenu.classList.remove('active')
      bodyScrollLock.enableBodyScroll(mobileMenu)
      for (let i = 0; i < headerMenuBtn.length; i++) {
        headerMenuBtn[i].classList.remove('open')
      }
    }
})



// //mask for input type tel 
//   [].forEach.call( document.querySelectorAll('[type="tel"]'), function(input) {
//   let keyCode;
//   function mask(event) {
//       event.keyCode && (keyCode = event.keyCode);
//       let pos = this.selectionStart;
//       if (pos < 3) event.preventDefault();
//       let matrix = "+7 (___) ___ ____",
//           i = 0,
//           def = matrix.replace(/\D/g, ""),
//           val = this.value.replace(/\D/g, ""),
//           new_value = matrix.replace(/[_\d]/g, function(a) {
//               return i < val.length ? val.charAt(i++) || def.charAt(i) : a
//           });
//       i = new_value.indexOf("_");
//       if (i != -1) {
//           i < 5 && (i = 3);
//           new_value = new_value.slice(0, i)
//       }
//       let reg = matrix.substr(0, this.value.length).replace(/_+/g,
//           function(a) {
//               return "\\d{1," + a.length + "}"
//           }).replace(/[+()]/g, "\\$&");
//       reg = new RegExp("^" + reg + "$");
//       if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
//       if (event.type == "blur" && this.value.length < 5)  this.value = ""
//   }

//   input.addEventListener("input", mask, false);
//   input.addEventListener("focus", mask, false);
//   input.addEventListener("blur", mask, false);
//   input.addEventListener("keydown", mask, false)

// });

// // прижимаем футер вниз на странице акции
// if(document.querySelectorAll('.wrapper_stock').length) {
//   let footer = document.querySelector('.footer-w')
//   let wrapper = document.querySelector('.wrapper')
//   function addPaddingWrapperFromFooter() {
//     let margin = window.getComputedStyle(footer).marginTop
//     wrapper.style.paddingBottom = footer.clientHeight + parseInt(margin) + 'px'
//   }
//   window.onresize = function() {
//     addPaddingWrapperFromFooter()
//   }
//   addPaddingWrapperFromFooter()
// }





// //selector список
// if(document.querySelectorAll('.selector')) {
//   let selector = document.querySelectorAll('.selector')
//   for(let i = 0; i < selector.length; i++) {
//     removeClickLabel(selector[i])
//     selector[i].addEventListener('click', function(e) {
//       let target = e.target
//       let subTitle = selector[i].querySelector('.selector__subtitle')
//       //open close
//       if(target.classList.contains('selector__subtitle')) {
//         this.classList.toggle('active')
//       }
//       //close 
//       if(target.classList.contains('close')) {
//         this.classList.remove('active')
//       }
//       //select
//       if(target.classList.contains('filter__custom-input') || target.classList.contains('selector__list-item') || target.tagName == "SPAN") {
//         subTitle.innerHTML = target.closest('.filter__item-checkbox').querySelector('span').innerHTML
//       }
//     })
//   }
// }

// function removeClickLabel(list) {
//   let labels = list.querySelectorAll('label')
//   for (let i = 0; i < labels.length; i++) {
//     labels[i].addEventListener('click', function(e) {
//       labels[i].querySelector('input').checked = !labels[i].querySelector('input').checked
//       e.preventDefault()
//     })
//   }
// }




// //блоки со скрытом контентом
// if(document.querySelectorAll('.dropdown-block ').length) {
//   let dropwodnBlock = document.querySelectorAll('.dropdown-block') 

//   for(let i = 0; i < dropwodnBlock.length; i++) {
//     equipmentToggle(dropwodnBlock[i])
//   }

//   function equipmentToggle(dropwodnBlock) {
//     let dropdownHeader = dropwodnBlock.querySelectorAll('.dropdown-header')

//     for(let i = 0; i < dropdownHeader.length; i++) {

//       dropdownHeader[i].onclick = function() {
//         let parent = this.closest('.dropdown-item')
//         parent.classList.toggle('active')
//         let hiddenContetn = parent.querySelector('.dropdown-hidden')
//         $(hiddenContetn).slideToggle(200)
//       }

//     }

//   }
// }



// // скролл до блока по клику на ticker-swiper__slide 
// if(document.querySelectorAll('.ticker-swiper__slide').length) {
//   let tickers = document.querySelectorAll('.ticker-swiper__slide')
//   for(let i = 0; i < tickers.length; i++) {
//     tickers[i].addEventListener('click', function() {
//       let id = tickers[i].getAttribute('href')
//       id = id.substring(1) 
//       let blockToScroll = document.querySelector('[ticker-name="'+id+'"]')
//       if(blockToScroll!== null) {
//         $('body,html').animate({
//           scrollTop: $(blockToScroll).offset().top - 78
//         },500);
//     }
//     })
//   }
// }


// //ввод только кириллицы
// $('body').on('input', '.input-ru', function(){
// 	this.value = this.value.replace(/[^а-яё\s]/gi, '');
// });

//-----------------------------------------------------------------------------------------------------------------------


const swiper_notifications = new Swiper('.swiper-notifications', {
  pagination: {
    el: '.swiper-notifications__pagination',
    type: 'bullets',
  },
});

//смена темы 
if(document.querySelectorAll('.theme').length) {
  const themeBtn = document.querySelectorAll('.theme')
  const body = document.body
  themeBtn.forEach(btn => {
    btn.onclick = () => {
      if(body.getAttribute('dark') !== null) {
        body.removeAttribute('dark')
      } else {
        body.setAttribute('dark', '')
      }
    }
  });
}


//открытие и закртыие уведомлений
if(document.querySelectorAll('.notifications').length) {
  const notifications = document.querySelector('.notifications')
  const notificationsBtn = notifications.querySelector('.notifications__btn')
  const notificationsClose = notifications.querySelector('.notifications__close')

  notificationsBtn.onclick = () => notifications.classList.toggle('active')
  notificationsClose.onclick = () => notifications.classList.remove('active')
}


//открытие и закртыие смены языка
if(document.querySelectorAll('.lang').length) {
  const lang = document.querySelector('.lang')
  const langBtn = lang.querySelector('.lang__top')

  langBtn.onclick = () => lang.classList.toggle('active')
}