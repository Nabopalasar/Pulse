// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 900,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png"></img></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png"></img></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                       dots: true,
//                       arrows: false
//                 }
//               }
//         ]
//       });
//   });
  

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  //TABS
const tabsParent = document.querySelector('.catalog__tabs'),
      tabs = document.querySelectorAll('.catalog__tab'),
      tabsText = document.querySelectorAll('.catalog-text')
      tabContent = document.querySelectorAll('.catalog__content'),
      catalogContent = document.querySelectorAll('.catalog-item__content'),
      catalogList = document.querySelectorAll('.catalog-item__list')
      catalogDetail = document.querySelectorAll('.catalog-item__link'),
      catalogBack = document.querySelectorAll('.catalog-item__back');

function hideTabContent() {
  tabContent.forEach(item => {
    item.style.display = "none";
  });
  tabs.forEach(item => {
    item.classList.remove('catalog__tab_active');
  });
}

function showTabsContent(i = 0) {
  tabContent[i].style.display = 'flex';
  tabs[i].classList.add('catalog__tab_active');
}

function toggleTabList(i) {
  catalogContent[i].classList.toggle('catalog-item__content_active');
  catalogList[i].classList.toggle('catalog-item__list_active');
}

catalogDetail.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    toggleTabList(i);

  });
});

catalogBack.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    toggleTabList(i);
  });
});

hideTabContent();
showTabsContent();

tabsText.forEach(item => {
  item.addEventListener('click', (e) => {
    const target = e.target;
    if(target) {
      tabsText.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabsContent(i);
        }
      });
    }
  });
});