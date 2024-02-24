let navbar = document.querySelector('.navbar');
const showMore = document.querySelector('.showMore');
const disabledProducts = document.querySelector('.disabledProducts');
let productsArray = document.querySelectorAll('.prod-wrapper a');
const products = document.querySelectorAll('.prod-wrapper > a');
let cartItemsCover = document.querySelector('#cartItemsContainer');
let cartsCounter = document.querySelector('.cartsCounter');


showMore.addEventListener('click', e => {
  disabledProducts.style.display = 'block';
  showMore.style.display = 'none';
})

document.querySelector('#menu-bar').onclick = () => {
  navbar.classList.toggle('active');
}



let search = document.querySelector('.search');
document.querySelector('#search').onclick = () => {
  search.classList.toggle('active');
}

// var home = document.getElementById("home");

// var images = new Array(
//   "images/vivo.jpg"
//   "images/cake2.avif"
//   "images/cake2.avif"
//   "images/cake2.avif"
// )



var swiper = new Swiper(".test-wrapper", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2580,
    // disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



search.addEventListener('keyup', (e) => {

  const searchValue = e.target.value.toLowerCase();

  Array.from(products)
    .filter((product) => { return !product.textContent.toLowerCase().includes(searchValue); })
    .forEach((product) => { product.classList.add('filtered') })

  Array.from(products)
    .filter((product) => { return product.textContent.toLowerCase().includes(searchValue); })
    .forEach((product) => { product.classList.remove('filtered') })
})





Array.from(productsArray).forEach((productItem) => {
  productItem.addEventListener('click', e => {
    console.log('added to cart');
    cartItemsCover.innerHTML += `<p>${productItem.textContent}</p><hr/>`;
    cartsCounter.innerHTML += 1;
  })
})





const cartNum = document.querySelector('.cart-num');
const cart = parseInt(cartNum.textContent);

products.forEach((product) => {
  product.addEventListener('click', () => {
    console.log('clicked');
    // cartNum.textContent = cart++;
    console.log(parseInt(cartNum.textContent) + 1);
  })
})
