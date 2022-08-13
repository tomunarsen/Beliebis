//================= menu Nav ==================//
const menu = document.querySelector('.icon-menu')
const navBar = document.querySelector('.header__nav-bar')
const openMenu = a => {
    if(a){
        navBar.classList.toggle('_active');
        menu.classList.toggle('_active');
    }else {
        navBar.classList.remove('_active');
        menu.classList.remove('_active');
    }
    navBar.addEventListener('click',item => {
        item.preventDefault();
        var href = item.target.href.split("#")[1],
            target = document.querySelector(`.${href}`),
            header = document.querySelector(".header");
        window.scrollTo({ 
            top: target.offsetTop,
            behavior: "smooth" 
        }),
        openMenu()
    });
}
menu.addEventListener('click',(el)=>{
    el.preventDefault();
    openMenu(true);
});
//================= swiper category ==================//
new Swiper('.category__swiper',{
    // пагінація
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets:true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    // 
    grabCursor:true,
    slideToClickedSlide:true,
    slidesPerView:"auto",
    spaceBetween:30,
    centeredSlides:true,
    initialSlide:1,
});
//================= swiper category ==================//
new Swiper('.testimonials__swiper',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    // 
    grabCursor:true,
    slideToClickedSlide:true,
    slidesPerView:"auto",
    spaceBetween:30,
    centeredSlides:true,
    initialSlide:1,
});