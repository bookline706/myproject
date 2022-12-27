let toggleButton = document.querySelector('.toggleButton');
let close = document.querySelector('.close');
let content = document.querySelector('.content');
let menu = document.querySelector('.menu');
let asside = document.querySelector('.asside');
let menuclos = document.querySelector('.menuclos');
let nem = document.querySelector(".nam");
let heart = document.querySelector(".openhearts");
let closeheart = document.querySelector(".closeheart");
let openprofile = document.querySelector(".open-profile");
let closeprofile = document.querySelector(".closeprofile");

openprofile.onclick = function () {
  content.classList.add('opened-profile');

}
closeprofile.onclick = function () {
  content.classList.remove('opened-profile');
}


heart.onclick = function () {
  content.classList.add('active-heart');

}
closeheart.onclick = function () {
  content.classList.remove('active-heart');
}

toggleButton.onclick = function () {
    content.classList.add('active');

}
close.onclick = function () {
    content.classList.remove('active');
}

menu.onclick = function () {
    asside.classList.add('action');

}
menuclos.onclick = function () {
    asside.classList.remove('action');
}
 

let menu_1 = document.querySelector('.menu-1');
let color = document.querySelector('.colors');

let menuclose_1 = document.querySelector('.menuclose-1');



menu_1.onclick = function () {
    color.classList.add('active-1');

}
menuclose_1.onclick = function () {
    color.classList.remove('active-1');
}
// swich colors


    /// cart
 let cart_2 = document.querySelector('.cart_2');
 let openecart = document.querySelector('.opencart');
let closecart = document.querySelector('.closecart');



openecart.onclick = function () {
    cart_2.classList.add('active-cart');

}
closecart.onclick = function () {
    cart_2.classList.remove('active-cart');
}

     



//oder 

let oders = JSON.parse(localStorage.getItem("ODER")) || [];
updateCartOder();

function addToCartOder(idnumer) {
  // check if prodcut already exist in cart
  if (oders.some((oderitem) => oderitem.idnumer === idnumer)) {
    changeNumberOfUnits("plus", idnumer);
  } else {
    const oderitem = cart.find((item) => item.idnumer === idnumer);

    oders.push({
      ...oderitem,
      numberOfUnits: 1,
      
    });
  }
 updateCartOder();
}

function updateCartOder() {
 // renderCartOder();
  //renderSubtotalOder();
  

  // save cart to local storage
  localStorage.setItem("ODER", JSON.stringify(oders));
}
const it = document.querySelector(".produc");
function renderOderIt() {
  it.innerHTML = ""; // clear cart element
  oders.forEach((oderitem) => {
    it.innerHTML += `
         
    <div class="cart-menu action">
    <div class="cart-img"> 
    <img src="${oderitem.imgSrc}" alt="${oderitem.name}">
      </div> <div class="cart-des">
        <div class="cart-name">
            <span>${oderitem.name} </span>
              </div>  <div class="cart-price">  
                <span class="price">price:</span>
                <span class="first ">$${oderitem.price}</span>  
                <div class="qty"><span class="btn minus button" onclick="changeNumberOfUnits('minus', ${oderitem.id})"><span>-</span></span><span class="number">${oder.numberOfUnits}</span>
       <span class="btn plus button" onclick="changeNumberOfUnits('plus', ${oderitem.id})"><span>+</span></span></div>  </div> 
        </div> <i class="fas fa-trash cart_remove" onclick="removeItemFromCart(${oderitem.id})"></i></div>
 `;
      
  });
}













































// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
  updateCart();
};
// ADD TO CART
function addToCart(id) {
  // check if prodcut already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
      
    });
  }

  updateCart();
}


// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();
  

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    
    totalItems += item.idnumer;
  });

  subtotalEl.innerHTML = ` $${totalPrice.toFixed(2)}`;
  totalItemsInCartEl.innerHTML = totalItems;
}


// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
         
    <div class="cart-menu action">
    <div class="cart-img"> 
    <img src="${item.imgSrc}" alt="${item.name}">
      </div> <div class="cart-des">
        <div class="cart-name">
            <span>${item.name} </span>
              </div>  <div class="cart-price">  
                <span class="price">price:</span>
                <span class="first ">$${item.price}</span>  
                <div class="qty"><span class="btn minus button" onclick="changeNumberOfUnits('minus', ${item.id})"><span>-</span></span><span class="number">${item.numberOfUnits}</span>
       <span class="btn plus button" onclick="changeNumberOfUnits('plus', ${item.id})"><span>+</span></span></div>  </div> 
        </div> <i class="fas fa-trash cart_remove" onclick="removeItemFromCart(${item.id})"></i></div>
 `;
      
  });
}

// remove item from cart
function removeItemFromCart(id) {

  cart = cart.filter((item) => item.id !== id);

  updateCart();
}
function removeItemFromCartall(idnumer) {
  let clears = 0;
  cart = cart.filter((item) =>
  

  item.idnumer !== idnumer,
  
   clears = item.idnumer );
  clear.innerHTML += clears;
  updateCart();
}
// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}




 
function renderClearCart(){
  clear.innerHTML = ""; // clear cart element
  CartCleer.forEach((clearAllItems) => { 
  clear.innerHTML += `
  <span>${clearAllItems.name}</span>
  <span class="cleer" onclick="ClearItemsFromCart(${clearAllItems.idnumer})">Clear All</span>
  `
  });
}
renderClearCart();

function ClearItemsFromCart(idnumer) {

cart = cart.filter((clearAllItems) => clearAllItems.idnumer !== idnumer);

updateCart();
}





