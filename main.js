window.addEventListener('DOMContentLoaded', function(){

    // Бургерное меню

    // Создаём плавность анимации появления мобильного меню
    // Сначала объявим функцию FadeIn

    const fadeIn = (el, timeout, display) => {
      el.style.opacity = 0;
      el.style.display = display || 'block';
      el.style.transition = `opacity ${timeout}ms`;
      setTimeout(() => {
        el.style.opacity = 1;
      }, 10);
    }

    // Объявим функцию FadeOut

    const fadeOut = (el, timeout) => {
      el.style.opacity = 1;
      el.style.transition = `opacity ${timeout}ms`;
      el.style.opacity = 0;

      setTimeout(() => {
        el.style.display = 'none';
      }, timeout);
    };

    var menu = document.querySelector('#menu')
       ,burger = document.querySelector('#burger')
       ,burgerBefore = document.querySelector('.burger__line_before')
       ,burgerAfter = document.querySelector('.burger__line_after')
       ,burgerMedium = document.querySelector('.burger__line_middle')
       ,flag = false;

      burger.addEventListener('click', function(){      
        if(!flag) {
          fadeIn(menu, 1000, 'block');
          flag = true;  
        } else {
          fadeOut(menu, 1000);
          flag = false;
        }                

        // document.querySelector('#menu').classList.toggle('is-active');

        // document.querySelector('#burger').classList.toggle('is-active');

        burger.classList.toggle('is-active');

        burgerBefore.classList.toggle('is-active');

        burgerAfter.classList.toggle('is-active');

        burgerMedium.classList.toggle('is-active');

        // Скрытие меню при нажатии на один из пунктов меню

        document.querySelectorAll('.menu-mobile__link').forEach(function(oneItem){
            oneItem.addEventListener('click', function(){

              fadeOut(menu, 1500);
              flag = false;
            
              burger.classList.toggle('is-active');

              burgerBefore.classList.remove('is-active');

              burgerAfter.classList.remove('is-active');

              burgerMedium.classList.remove('is-active');
            });
        });
    });


    // Слайдер в блоке Hero

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        speed: 700,
                   
        

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
          type: 'progressbar'
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

             
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        // Управлять слайдером с клавиатуры
        keyboard: {
            //включаем
            enabled: true,
            //управление клавишами pageUp/pageDown
            pageUpDown: true,
        },

        freeMode: {
            enabled: true,
        },

        autoplay: {
            delay: 2500,            
            waitForTransition: true,
        },
        
    });

    // document.querySelector('.swiper-button-prev').style.opacity = '0';
    // document.querySelector('.swiper-button-next').style.opacity = '0';


    // Табы

    document.querySelectorAll('.works-level__link').forEach(function(tabsBtn){
      tabsBtn.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path;

        document.querySelectorAll('.works-level__link').forEach(function(oneTab){
          oneTab.classList.remove('level-link-active');
        });

        document.querySelector(`[data-path='${path}']`).classList.add('level-link-active');

        document.querySelectorAll('.work-article').forEach(function(tabContent){
          tabContent.classList.remove('work-article-active');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('work-article-active');
      });

    });

    // Открытие поля поиска

    var openSearch = document.querySelector('#searchButton')
       ,closeSearch = document.querySelector('#closeSearch')
       ,searchBox = document.querySelector('.search-box__contain');

    openSearch.addEventListener('click', function(){
      fadeIn(searchBox, 500, 'flex');
      flag = true;
    });

    closeSearch.addEventListener('click', function(){
      fadeOut(searchBox, 400);
      flag = false;
    });


  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
    searchEnabled: true
  });

  //Маскирование телефона

  var selector = document.querySelector('input[type="tel"]');
  var im = new Inputmask("+7 (999) 999-99-99");

  im.mask(selector);
 
       
  // Валидация форм

  new JustValidate('.contact-form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 10
      },
      email: {
        required: true,
        email: true
      },
      tel: {
        required: true,
        function: (name, value) => {
          // Получить значение без маски
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },
  });
});


