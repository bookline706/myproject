

const prodcutviewEl = document.querySelector(".block-img");

//const clear = document.querySelector(".cart-heade");

function renderProdcutview(){
    prodcutviewEl.innerHTML = ""; // clear cart element
    prodcutView.forEach((prodcutViews) => { 
    prodcutviewEl.innerHTML += `
                       <div class="flex-img">
                      
                       <div class="input-img">
                       <div class="img">
                       <div class="box activeimg"  onclick=" changeImages(this)">
                       <img   class="classimg" src="${prodcutViews.imgSrc1}" alt="thumb">
                       </div>
                  
                       <div class="box"  onclick=" changeImages(this)">
                       <img   class="classimg" src="${prodcutViews.imgSrc2}" alt="thumb">
                       </div>
                       <div class="box"  onclick=" changeImages(this)">
                       <img   class="classimg" src="${prodcutViews.imgSrc3}" alt="thumb">
                       </div>
                       <div class="box"  onclick=" changeImages(this)">
                       <img   class="classimg" src="${prodcutViews.imgSrc4}" alt="thumb">
                       </div>
                     
                   </div>
                      
                   </div>
                
                   <div class="product-home-image">
                   <img class="images home-img" src="${prodcutViews.imgSrc}"alt="product">
                      </div>
                    </div>
                    <div class="productInfo">
                       <div class="productName">
                        <h2>Name:</h2>
                        <h3 class="nam">${prodcutViews.name}</h3>
                       </div>
                       <div class="productPrice">
                        <h2>Price</h2>
                        <span class="pr">${prodcutViews.price}</span>
                       </div>
                       <div class="productIcons">
                        <i class="fa-brands fa-facebook-f"></i>      
                        <i class="fa-brands fa-whatsapp"></i>
                        <i class="fa-brands fa-instagram"></i>  
                        
                       </div>
                      
    
                       <div class="productButtons">
                        
                       <button class="add-to-cart addtocart " onclick="addToCart(${prodcutViews.id}, ${prodcutViews.idnumer})">Add Cart<?button>
                       </div>
                       <div class="productDesc">
                        <h2>Description</h2> 
                         <p>${prodcutViews. description}</p>
                       </div>
                    </div>`;
    
    
    });
    }
    
    
    renderProdcutview();

   