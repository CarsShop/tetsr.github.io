
// signup input
//login back
let loginShow = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginShow.classList.toggle("show")
}
document.querySelector('#X-login').onclick = () => {
    loginShow.classList.remove("show")
}
//Login back
// signup back
let sginupshow = document.querySelector('.sginup-form');
document.querySelector('#create-account').onclick = () => {
    loginShow.classList.remove("show");
    sginupshow.classList.toggle("show-sginup")
}
document.querySelector('#X-sginup').onclick = () => {
    sginupshow.classList.remove("show-sginup")
}
// signup back
// swiper
var swiper = new Swiper(".shopping", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
var swiper = new Swiper(".reviews-slider", {
    centeredSlides:true,
    loop:true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
    delay:9500,
    disableOnInteraction:false,
    },
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
    },
});
// swiper
// 2012 lam 
let cart = document.querySelector('.cartc');
document.querySelector('#cartshow').onclick = () => {
    cart.classList.toggle("showus")
}
document.querySelector('#backCart').onclick = () => {
    cart.classList.remove("showus")
}
//car
let num = document.querySelector('.price-car1').innerHTML;
let total = 0;
let cart_car1 = document.querySelector('.car1-cart');
document.querySelector('#car1Cart').onclick = () => {
    cart_car1.classList.toggle("carshowd")
    total += 500000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
document.querySelector('#trash').onclick = () => {
    cart_car1.classList.remove("carshowd")
    total -= 500000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
let cart_car2 = document.querySelector('.car2-cart');
document.querySelector('#car2Cart').onclick = () => {
    cart_car2.classList.toggle("carshowd")
    total += 400000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
document.querySelector('#trash2').onclick = () => {
    cart_car2.classList.remove("carshowd")
    total -= 400000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
let cart_car3 = document.querySelector('.car3-cart');
document.querySelector('#car3Cart').onclick = () => {
    cart_car3.classList.toggle("carshowd")
    total += 450000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
document.querySelector('#trash3').onclick = () => {
    cart_car3.classList.remove("carshowd")
    total -= 450000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
let cart_car4 = document.querySelector('.car4-cart');
document.querySelector('#car4Cart').onclick = () => {
    cart_car4.classList.toggle("carshowd")
    total +=320000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
document.querySelector('#trash4').onclick = () => {
    cart_car4.classList.remove("carshowd")
    total -=320000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
let cart_car5 = document.querySelector('.car5-cart');
document.querySelector('#car5Cart').onclick = () => {
    cart_car5.classList.toggle("carshowd")
    total +=320000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
document.querySelector('#trash5').onclick = () => {
    cart_car5.classList.remove("carshowd")
    total -=320000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
let cart_car6 = document.querySelector('.car6-cart');
document.querySelector('#car6Cart').onclick = () => {
    cart_car6.classList.toggle("carshowd")
    total +=300000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
document.querySelector('#trash6').onclick = () => {
    cart_car6.classList.remove("carshowd")
    total -=300000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
let cart_car7 = document.querySelector('.car7-cart');
document.querySelector('#car7Cart').onclick = () => {
    cart_car7.classList.toggle("carshowd")
    total +=500000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
document.querySelector('#trash7').onclick = () => {
    cart_car7.classList.remove("carshowd")
    total -=500000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
let cart_car8 = document.querySelector('.car8-cart');
document.querySelector('#car8Cart').onclick = () => {
    cart_car8.classList.toggle("carshowd")
    total +=400000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
document.querySelector('#trash8').onclick = () => {
    cart_car8.classList.remove("carshowd")
    total -=400000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
let cart_car9 = document.querySelector('.car9-cart');
document.querySelector('#car9Cart').onclick = () => {
    cart_car9.classList.toggle("carshowd")
    total +=500000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
document.querySelector('#trash9').onclick = () => {
    cart_car9.classList.remove("carshowd")
    total -=500000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
let cart_car10 = document.querySelector('.car10-cart');
document.querySelector('#car10Cart').onclick = () => {
    cart_car10.classList.toggle("carshowd")
    total +=500000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
document.querySelector('#trash10').onclick = () => {
    cart_car10.classList.remove("carshowd")
    total -=500000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
let cart_car11 = document.querySelector('.car11-cart');
document.querySelector('#car11Cart').onclick = () => {
    cart_car11.classList.toggle("carshowd")
    total +=330000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
document.querySelector('#trash11').onclick = () => {
    cart_car11.classList.remove("carshowd")
    total -=330000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
let cart_car12 = document.querySelector('.car12-cart');
document.querySelector('#car12Cart').onclick = () => {
    cart_car12.classList.toggle("carshowd")
    total +=240000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
document.querySelector('#trash12').onclick = () => {
    cart_car12.classList.remove("carshowd")
    total -=240000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
let cart_car13 = document.querySelector('.car13-cart');
document.querySelector('#car13Cart').onclick = () => {
    cart_car13.classList.toggle("carshowd")
    total +=388099;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
document.querySelector('#trash13').onclick = () => {
    cart_car13.classList.remove("carshowd")
    total -=388099;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
let cart_car14 = document.querySelector('.car14-cart');
document.querySelector('#car14Cart').onclick = () => {
    cart_car14.classList.toggle("carshowd")
    total +=400000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
document.querySelector('#trash14').onclick = () => {
    cart_car14.classList.remove("carshowd")
    total -=400000;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
let cart_car15 = document.querySelector('.car15-cart');
document.querySelector('#car15Cart').onclick = () => {
    cart_car15.classList.toggle("carshowd")
    total +=388099;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
document.querySelector('#trash15').onclick = () => {
    cart_car15.classList.remove("carshowd")
    total -=388099;
    num = '$' + total;
    document.querySelector('.price-car1').innerHTML = '$' + total;
}
//car
// buy
let errorbuy = document.querySelector('.erorr');
let buy = document.querySelector('.btn-by');
document.addEventListener("click", function(e){
    if(e.target.className === 'lob'){
        errorbuy.classList.add('noneere');
        buy.classList.add('noneere');
    }else if(e.target.className === 'sub'){
        errorbuy.classList.add('noneere');
        buy.classList.add('noneere');
    }
})
document.querySelector('#btn-by').onclick = () => {
    document.querySelector('payment').classList.add('show-payment')
}
// buy