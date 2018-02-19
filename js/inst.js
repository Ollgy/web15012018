//реализация полноэкранного меню (при помощи полной верстки и свойства display:none)
const hamburger = document.querySelector(".header_hamburger");
const fullscrmenu = document.querySelector(".fullscrmenu");
const exitbtnmenu = document.querySelector(".exitmark--menu");


hamburger.addEventListener("click", function (e) {

    e.preventDefault();

    fullscrmenu.style.display = "flex";
    fullscrmenu.style.zIndex = "100";
    hamburger.style.zIndex = "1";

});

exitbtnmenu.addEventListener("click", function () {

    e.preventDefault();

    fullscrmenu.style.display = "none";
    fullscrmenu.style.zIndex = "1";
    hamburger.style.zIndex = "100";

});

//реализация модального окна отзывов (при помощи динамического добвления 
//через script type="template" и его innerHTML)
const btnReview = document.querySelectorAll(".review__link");
const reviewmodal = document.querySelector(".reviewmodal");

const overlayElement = document.createElement('div');
overlayElement.classList.add('reviewmodal');
const template = document.querySelector('#reviewTemplate');
console.log(template);
overlayElement.innerHTML = template.innerHTML;

for (i = 0; i < btnReview.length; i++) {

    btnReview[i].addEventListener("click", function (e) {

        e.preventDefault();

        document.body.appendChild(overlayElement);
        // reviewmodal.style.display = "flex";
    });

}

const exitbtnreview = overlayElement.querySelector(".exitmark--reviewmodal");

exitbtnreview.addEventListener("click", function () {

    document.body.removeChild(overlayElement);
    // reviewmodal.style.display = "none";

});

function openOverlay(content) {

}


//реализация аккордеона
const acco_menu = document.querySelectorAll('.accordeon-horiz__item');
var acco_menuclass = "accordeon-horiz__item--active";


const acco_team = document.querySelectorAll('.accordeon__item');
var acco_teamclass = "accordeon__item--active";


acco(acco_menu, acco_menuclass);
acco(acco_team, acco_teamclass);


function acco(items, className) {

    for (var i = 0; i < items.length; i++) {

        // console.log(items[i]);
        // console.log(items.length);

        items[i].addEventListener('click', function (e) {

            e.preventDefault();

            if (window.innerWidth < 480 && className == 'accordeon-horiz__item--active') {
                for (var j = 0; j < items.length; j++) {

                    console.log('click item');

                    if (!items[j].classList.contains(className)) {
                        this.classList.add(className);
                        // this.children[1].children[0].style.display = 'block';

                        for (var z = 0; z < items.length; z++) {
                            if (items[z] != this) {
                                items[z].style.opacity = '0';
                                items[z].style.zIndex = '-1';
                            }
                        }
                    } else break;

                }
            }

            else if (window.innerWidth >= 480 || className == 'accordeon__item--active') {
                
                this.classList.toggle(className);

                for (var j = 0; j < items.length; j++) {

                    if (items[j] != this && items[j].classList.contains(className)) {
                        items[j].classList.remove(className);
                        
                    }
                }

                // console.log(this);
            }


        })
    }
    return;
}



//поведение для аккоржеона на телефоне
exitbtnacco = document.querySelectorAll('.exitmark--acco');

for (var i = 0; i < exitbtnacco.length; i++) {
    console.log(exitbtnacco.length);

    exitbtnacco[i].addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();
        console.log('click acco');
          
        
        for (var z = 0; z < acco_menu.length; z++) {            
            
            if (acco_menu[z].classList.contains(acco_menuclass)) {
                // console.log(acco_menu[z].classList);
                acco_menu[z].classList.remove(acco_menuclass)
            }
            
            acco_menu[z].classList.remove(acco_menuclass);
            acco_menu[z].style.opacity = '1';
            acco_menu[z].style.zIndex = '1';
        }

        
    });
}

// const text = document.querySelector(".title--lmenu");


// function someFunc() {
//     // Выполняем действие, если ширина меньше 1000px
//     var w = window.innerWidth;
//     if (w < 480) {
//      text.style.color = "red";
//     }
//   }

//   // Выполняем заново при изменении размера окна
//   window.addEventListener('resize', function() {
//     console.log("Размер окна изменен");
//     someFunc();
//   });


//реализация карты
ymaps.ready(init);
var myMap,
    myPlacemark;

function init() {
    myMap = new ymaps.Map("map", {
        center: [59.93750026069284, 30.319637561153748],
        zoom: 12
    });
    
    myMap.behaviors.disable('scrollZoom');

    myPlacemark = new ymaps.Placemark([59.94421836037533, 30.32277038128312], {
        hintContent: 'Центр',
        balloonContent: 'Пункт доставки 1'
    }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/icons/contacts/map-marker.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([59.90522487277663, 30.311549230133018], {
        hintContent: 'Московский пр-т',
        balloonContent: 'Пункт доставки 4'
    }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/icons/contacts/map-marker.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([59.95104768539385, 30.298404693603352], {
        hintContent: 'Петроградка',
        balloonContent: 'Пункт доставки 2'
    }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/icons/contacts/map-marker.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
    [59.94376558812452, 30.308017730712738]
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([59.94423925522798, 30.411701202392408], {
        hintContent: 'Кудрово',
        balloonContent: 'Пункт доставки 3'
    }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/icons/contacts/map-marker.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
    [59.94376558812452, 30.308017730712738]
    myMap.geoObjects.add(myPlacemark);
}

//реализация слайдера
var sliderList = document.querySelector('.slider__list');
var sliderItem = document.querySelector('.slider__item');
var slidetoLeft = document.querySelector('.slider__arrow--left');
var slidetoRight = document.querySelector('.slider__arrow--right');


let widthItem = parseInt(getComputedStyle(sliderItem).width);
let widthList = parseInt(getComputedStyle(sliderList).width);
let numItem = 5;
let maxSliding = (numItem - 1) * widthItem;

//console.log(widthItem+ '  '+maxSliding);

var currentRight = 0;

slidetoRight.addEventListener('click', function (e) {

    e.preventDefault();

    if (currentRight < maxSliding) {
        currentRight += widthItem;
    } else if (currentRight = maxSliding) {
        currentRight = 0;
    }
    sliderList.style.right = currentRight + 'px';

    //console.log(currentRight);
});

slidetoLeft.addEventListener('click', function (e) {

    e.preventDefault();

    if (currentRight > 0) {
        currentRight -= widthItem;
    } else if (currentRight == 0) {
        currentRight = maxSliding;
    }
    sliderList.style.right = currentRight + 'px';

    //console.log(currentRight);
});

//реализация one page scroll при помощи jQuery
const display = $('.content');
const sections = $('.section');
const slidebarItems = $('.sidebar__point')
const inScroll = false;
var md = new MobileDetect(window.navigator.userAgent);
var isMobile = md.mobile();
console.log(isMobile);

const setSlidebarItemActive = ItemEq=>{

    slidebarItems.removeClass('sidebar__point--active');
    slidebarItems.eq(ItemEq).addClass('sidebar__point--active');
}

//функция расчитывает смещение от номера секции и через transform свойств css смещает
const sectionTransition = sectionNum =>{
    const position = `${sectionNum*-100}%`

    //if(!inScroll) return;

    //inScroll = true;

    sections.eq(sectionNum).addClass('active');
    sections.eq(sectionNum).siblings().removeClass('active');


    display.css({
        'tansform':`translate(0,${position})`,
        '-webkit-transform':`translate(0,${position})`
    })
    
    setTimeout(()=>{
        //inScroll = false;
        setSlidebarItemActive(sectionNum);
    }, 1300); //длительность анимации +300мс инерции скролла на тач-устройствах
    //console.log(position);
}

const scrollToSection = direction =>{
     const activeSection = sections.filter('.active');
     const nextSection = activeSection.next();
     const prevSection = activeSection.prev();
     
     if(direction=='up' && nextSection.length){
         sectionTransition(nextSection.index());
     }

     if(direction=='down' && prevSection.length){
        sectionTransition(prevSection.index());
    }
}

$(document).on({
    'wheel': e=>{
    const deltaY = e.originalEvent.deltaY;
    const moving = deltaY < 0
    ? 'down' 
    :'up';
    
    scrollToSection(moving);
    },
    
    'keydown':e=>{
        switch (e.keyCode){
            case 40: 
            scrollToSection('up');
            break;

            case 38: 
            scrollToSection('down');
            break;

        }
    },

    'touchmove': e=>{
        e.preventDefault();
    }   
})

if(isMobile){
    $(document).swipe({
        swipe:function(event,direction,distance,duration,fingerCount,fingerData){
    
            //заменяем т.к. плагин ждет движение пальца, а у нс код под движеие экрана
            const scrollDirection = direction=='down'?'up':'down'
    
            scrollToSection(scrollDirection);
        },
        // excludedElements: "label, button, select, textarea, .noSwipe",
        // threshold:1
    })
    
}

//навигация по меню хедера
$('[data-scroll-to]').on('click',e=>{
    e.preventDefault();

    const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
    sectionTransition(target);
});

//навигация полноэкранного меню(+смотри выше)

$('.nav__item--fullscrmenu').on('click',function(){
    $('.fullscrmenu').css("display", "none");
})

//навигация по боковому сайдбару
slidebarItems.on('click',e=>{
    e.preventDefault();

    const activeSection = sections.filter('.active').index();

    const target = parseInt($(e.currentTarget).attr('section'));
     if(target!=activeSection){
        sectionTransition(target);
        setSlidebarItemActive(target);
     }
});

//скролл по стрелке с первой стрницы на вторую
$('.arrow').on('click',function(e){
    e.preventDefault();
    scrollToSection('up');
});

//многоточие для секции с отзывами черз плагин
$(document).ready(function(){
    $('.review__description').dotdotdot();
    // console.log($('.review__description'))
});

//отправка письма из формы

const overlayModal = document.createElement('div');
overlayModal.classList.add('reviewmodal');
const templateModal = document.querySelector('#formTemplate');
//console.log(template);
overlayModal.innerHTML = templateModal.innerHTML;

const formModalText = overlayModal.querySelector('.formmodal__msg');

const closeModal = overlayModal.querySelector("#btnformmodal");

closeModal.addEventListener("click", function () {

    document.body.removeChild(overlayModal);

});

$('.form').on('submit',submitForm);

function submitForm(e){
    console.log('Событие submit');
    e.preventDefault();//отменяем выпонение php по умолчанию нажатия на submit

    var form = $(e.target);
    var data = form.serialize(), //все данные записываются в одну строку
    url = form.attr('action'),
    method = form.attr('method');

    //console.log(data);

    var request =  $.ajax({ //асинхронный запрос
        type:method,
        url:url,
        data:data,
        dataType:'JSON'
    });   
      

    request.done(function(msg){
        var mes = msg.mes;
        var status = msg.status;

        if(status==='OK'){
           document.body.appendChild(overlayModal);
           formModalText.textContent = msg.mes;
        } else if(status==='NO'){
            document.body.appendChild(overlayModal);
            formModalText.textContent = msg.mes;
        }
    });

    request.fail(function(jqHR, textStatus){
        document.body.appendChild(overlayModal);
        formModalText.textContent = 'Request failed: ' + textStatus;
               
    });

    // var ajaxForm = function(form){       
    // }
}

//кнопка "Очистить" на форме

$('.form__reset').on('click',function(e){
    e.preventDefault();
    $(this).closest('.form')[0].reset();
});




