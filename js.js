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

     



/* cart

if (document.readyState == "loading")
{
    document.addEventListener("DOMContentLoaded", start);
}
else
{
    start();
}
function start()
{
   
    update();
}*/

//making functioj ready
const it = document.querySelector(".content-oder");
const OderButtonEl = document.querySelector(".oder-button");
const itemodersEl = document.querySelector(".item-oder");
const productsEl = document.querySelector(".productss");
const cartItemsEl = document.querySelector(".content-item");
const subtotalEl = document.querySelector(".total");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");
const clear = document.querySelector(".cart-header");
const oder = document.querySelector(".produc");

// RENDER PRODUCTS
function renderProdcuts() {
    products.forEach((product) => {
      productsEl.innerHTML += `
      <div class="row item">
      <div class="row-1">
          <form action="">
          <img class="image-item" src="${product.imgSrc}" alt="${product.name}">
              <div class="food_icon">
                 
                  <i class="fas fa-heart"></i>
                  <i class="fas fa-eye"></i>
                  <i class="fas fa-share"></i>
                  
              </div>
          </form>
      </div>
      <div class="footer_food">
    <div class="item-name">
    <h4 class="title-item">${product.name}</h4>
    </div>
     
     <div class="price-items">
     <h2 class="price"> Price:</h2>
     <h2 class="price-item">$${product.price}</h2>
     </div>
      </div>
      
      <p class="title">
          ${product.description}
      </p>
      <button class="add-to-cart addtocart " onclick="addToCart(${product.id}, ${product.idnumer})">
        add
      </button>
     </div>`;
    });
  }
  renderProdcuts();






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
        </div> 
        <i class="fas fa-trash cart_remove" onclick="removeItemFromCart(${item.id})"></i>
        </div>
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












































/*oder 

let oders = JSON.parse(localStorage.getItem("ODER")) || [];
updateCartOder();

function addToCarto(id) {
  // check if prodcut already exist in cart
  if (oders.some((oderitem) => oderitem.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const oderitem = cart.find((item) => item.id === id);

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

renderOderIt();








function renderCartOde(){
  OderButtonEl.innerHTML = ""; // clear cart element
  Oder.forEach((oderite) => { 
  OderButtonEl.innerHTML += `
  <span class="oder" onclick="addToCarto(${oderite.idnumer})">${oderite.name}</span>
  `
  });
}
renderCartOde();

function addToCartor(idnumer) {
  // check if prodcut already exist in cart
  if (oder.some((oderite) => oderite.id === id)) {
    changeNumberOfUnits("plus", idnumer);
  } else {
    const oder = cart.find((item) => item.id === id);

    oder.push({
      ...oderite,
      numberOfUnits: 1,
      
    });
  }

  updateCart();
}
/////// hre is for heart js

//making functioj ready
/*
const heartItemsEl = document.querySelector(".content-heart");



// cart array
let hearts = JSON.parse(localStorage.getItem("CART")) || [];
updateHeart();

// ADD TO CART
function addToHeart(id) {
  // check if prodcut already exist in cart
  if (hearts.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    hearts.push({
      ...item,
      numberOfUnits: 1,
      
    });
  }

  updateHeart();
}

// update cart
function updateHeart() {
  renderHeartItems();
  renderSubtotalS();

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(hearts));
}

// calculate and render subtotal
function renderSubtotalS() {
  let totalPrice = 0,
    totalItems = 0;

  hearts.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    
    totalItems += item.idnumer;
  });

  subtotalEl.innerHTML = ` $${totalPrice.toFixed(2)}`;
  totalItemsInCartEl.innerHTML = totalItems;
}


// render cart items
function renderHeartItems() {
  heartItemsEl.innerHTML = ""; // clear cart element
  hearts.forEach((item) => {
    heartItemsEl.innerHTML += `
         <div class="heart-menu"
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
        <button class="add-to-cart addtocart " onclick="addToCart(${item.id}, ${item.idnumer})">
</div>
 `;
      
  });
}

// remove item from cart
function removeItemFromHeart(id) {

  hearts = hearts.filter((item) => item.id !== id);

  updateHeart();
}
function removeItemFromHearttall(idnumer) {
  let clears = 0;
  hearts = hearts.filter((item) =>
  

  item.idnumer !== idnumer,
  
   clears = item.idnumer );
  clear.innerHTML += clears;
  updateHeart();
}
// change number of units for an item
function changeNumberOfUnits(action, id) {
  haerts = hearts.map((item) => {
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

  updateHeart();
}




 
function renderClearHaert(){
  clear.innerHTML = ""; // clear cart element
  CartCleer.forEach((clearAllItems) => { 
  clear.innerHTML += `
  <span>${clearAllItems.name}</span>
  <span class="cleer" onclick="ClearItemsFromCart(${clearAllItems.idnumer})">Clear All</span>
  `
  });
}
renderClearHaert();

function ClearItemsFromHeart(idnumer) {

hearts = Heart.filter((clearAllItems) => clearAllItems.idnumer !== idnumer);

updateHeart();
}















































/*
function addEvent()
{
    let removeCartButton = document.querySelectorAll(".cart_remove");
    console.log(removeCartButton);
   removeCartButton.forEach((btn) =>
   {
        btn.addEventListener('click', removeCartItem);
   });
    //=========change qty========
    let cartqty = document.querySelectorAll(".quantity");
    cartqty.forEach(input =>
        {
            input.addEventListener("change", cart_changeqty);
        });


        ///====== add cart btn=====
        let cart_additem = document.querySelectorAll(".addtocart");
        console.log(cart_additem);
        cart_additem.forEach((btn) =>
        {
            btn.addEventListener('click', hanle_addcart);
        });
}
let cart = JSON.parse(localStorage.getItem("CART")) || [];
update();
//=== additem
function hanle_addcart()
{
    
    let product = this.parentElement;
    let title = document.querySelector(".title-item").innerHTML;
    let price = document.querySelector(".price-item").innerHTML;
    let image = document.querySelector(".image-item").src;
   /* for (let i = 0; i < title.length; i++)
    {
        alert("you have already ass this item to cart");
    }
    console.log(title, price, image);

    let newAdd = {
        title,
        price,
        image,
    };
   
    
  


    
  let cartelement = cartbaxelement(title,price,image);
    let newNod = document.createElement("div");
    newNod.innerHTML = cartelement;
    const cartcontent = document.querySelector(".content-item");
    cartcontent.appendChild(newNod);

    update();
}
function update()
{
    addEvent();
    updatetotal();

    localStorage.setItem("CART", JSON.stringify(cart));
   

 
}
// remove item
function removeCartItem()
{
   
    this.parentElement.remove();

    update();
}

function cart_changeqty()
{
    
    if (isNaN(this.value) || this.value < 1)
    {
       this.value = 1;
    }
 
      this.value = Math.floor(this.value);
    update();
}

function  updatetotal()
{
    let cartbox = document.querySelectorAll(".cart-menu");
    document.querySelector(".total").innerHTML = "$" +0+".00";
    let total = 0;
    cartbox.forEach((cartboxs) =>
        {
        let priceElament = cartboxs.querySelector(".new-price");
        let price = parseFloat(priceElament.innerHTML.replace("$", ""));
        let qty = cartboxs.querySelector(".quantity").value;
        total += price*qty;
    });
    document.querySelector(".total").innerHTML = "$" +total+".00";
}

//////// cart box componnents
function cartbaxelement(title,price,image)
{
return`
    
     <div class="cart-menu action">
         <div class="cart-img"> 
           <img src=${image} alt=""> 
           </div> <div class="cart-des">
             <div class="cart-name">
                 <span>${title} </span>
                   </div>  <div class="cart-price">  
                      <span class="price">price:</span>
                     <span class="first cart-price new-price">${price}</span>  
                     <div class="qty"><button>-</button><input type="number" value="1" class="quantity">
            <button>+</button></div>  </div> 
             </div> <i class="fas fa-trash cart_remove"></i></div> `

             update();

}



*/

