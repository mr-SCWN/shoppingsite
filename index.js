import {foodItem} from './fooditem.js'

const PROMO_CODES = {
    'SAVE10': 10,
    'SAVE15': 15,
    'SAVE20': 20
  };
  let currentDiscountPercent = 0;

function displayItems(){
    var biryani= document.getElementById('biryani');
    var paneer=  document.getElementById('paneer');;
    var chicken=  document.getElementById('chicken');
    var vegetable=  document.getElementById('vegetable');
    var chinese=  document.getElementById('chinese');
    var southIndian=  document.getElementById('south-indian');

    

    const biryaniData= foodItem.filter((item)=>item.category=='biryani');
    const chickenData= foodItem.filter((item)=>item.category=='chicken');
    const PaneerData= foodItem.filter((item)=>item.category=='paneer');
    const vegetableData= foodItem.filter((item)=>item.category=='vegetable');
    const chineseData= foodItem.filter((item)=>item.category=='chinese');
    const southData= foodItem.filter((item)=>item.category=='south indian');
    biryaniData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        biryani.appendChild(itemCard);
        
    })


    chickenData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        chicken.appendChild(itemCard)

    })

    PaneerData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        paneer.appendChild(itemCard)

    })

    vegetableData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        
        vegetable.appendChild(itemCard)
    
    })

    chineseData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        
        chinese.appendChild(itemCard)
        
    })

    southData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        southIndian.appendChild(itemCard)

    })
}
displayItems();


const vegData= [...new Map(foodItem.map(item=> [item['category'],item])).values()];
console.log(vegData);

function selectTaste(){
    var categoryList= document.getElementById('category-list');

    vegData.map(item=>{
        console.log(item)
        var listCard= document.createElement('div');
        listCard.setAttribute('class','list-card');
    
        var listImg= document.createElement('img');
        listImg.src= item.img;
    
        var listName= document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText= item.category;
        listName.setAttribute('href','#'+item.category)
    
        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard= listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        document.querySelector('.category-header').appendChild(cloneListCard)
    })
}
selectTaste();


document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addToCart)
})

var cartData= [];
function addToCart(){
    
    var itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj= foodItem.find(element=>element.name==itemToAdd);

    var index= cartData.indexOf(itemObj);
    if(index=== -1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData= [...cartData,itemObj];
    }
    else if(index > -1){
        alert("Added to cart!");
    }
    
    document.getElementById('cart-plus').innerText=
    ' ' + cartData.length + ' Items';
    document.getElementById('m-cart-plus').innerText=
    ' ' + cartData.length;
    totalAmount();
    cartItems();
}


function cartItems(){
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
  
    cartData.forEach(item => {
      const tr = document.createElement('tr');
  
      // 1) image
      const cellImg = document.createElement('td');
      const img = document.createElement('img');
      img.src = item.img;
      cellImg.appendChild(img);
  
      // 2) name
      const cellName = document.createElement('td');
      cellName.innerText = item.name;
  
      // 3) SPICENESS
        const cellSpice = document.createElement('td');

        const btnSpiceDec = document.createElement('button');
        btnSpiceDec.className = 'decrease-spice';
        btnSpiceDec.innerText = '–';
        cellSpice.appendChild(btnSpiceDec);

        const spiceWrapper = document.createElement('span');
        spiceWrapper.className = 'spice-wrapper';
        const level = item.spiciness || 3;
        for (let i = 0; i < level; i++) {
        const pepper = document.createElement('span');
        pepper.innerText = '🌶️';
        spiceWrapper.appendChild(pepper);
        }
        cellSpice.appendChild(spiceWrapper);

        const btnSpiceInc = document.createElement('button');
        btnSpiceInc.className = 'increase-spice';
        btnSpiceInc.innerText = '+';
        cellSpice.appendChild(btnSpiceInc);
  
      // 4) quantity
      const cellQty = document.createElement('td');
      const btnDec = document.createElement('button');
      btnDec.className = 'decrease-item';
      btnDec.innerText = '-';
      const spanQty = document.createElement('span');
      spanQty.innerText = item.quantity;
      const btnInc = document.createElement('button');
      btnInc.className = 'increase-item';
      btnInc.innerText = '+';
      cellQty.appendChild(btnDec);
      cellQty.appendChild(spanQty);
      cellQty.appendChild(btnInc);
  
      // 5) cost
      const cellPrice = document.createElement('td');
      cellPrice.innerText = item.price;
  

      tr.appendChild(cellImg);
      tr.appendChild(cellName);
      tr.appendChild(cellSpice); 
      tr.appendChild(cellQty);
      tr.appendChild(cellPrice);
  
      tableBody.appendChild(tr);
    });
  
    document.querySelectorAll('.increase-item').forEach(btn => btn.addEventListener('click', incrementItem));
    document.querySelectorAll('.decrease-item').forEach(btn => btn.addEventListener('click', decrementItem));
    document.querySelectorAll('.increase-spice').forEach(btn =>
        btn.addEventListener('click', changeSpice)
      );
      document.querySelectorAll('.decrease-spice').forEach(btn =>
        btn.addEventListener('click', changeSpice)
      );
  }
  
  function changeSpice() { // CHANGE SPICENESS
    const tr = this.closest('tr');
    const itemName = tr.children[1].innerText;
    const obj = cartData.find(el => el.name === itemName);
    if (this.classList.contains('increase-spice')) {
      obj.spiciness = Math.min(5, (obj.spiciness || 3) + 1);
    } else {
      obj.spiciness = Math.max(1, (obj.spiciness || 3) - 1);
    }
    cartItems();
  }
  

  function incrementItem(){
    const tr = this.closest('tr');
    const itemName = tr.children[1].innerText;      
    const incObj = cartData.find(el => el.name === itemName);
    incObj.quantity += 1;
  
    const unitPrice = incObj.price / (incObj.quantity - 1);
    incObj.price = unitPrice * incObj.quantity;
  
    totalAmount();
    cartItems();
  }
  
  function decrementItem(){
    const tr = this.closest('tr');
    const itemName = tr.children[1].innerText;
    const decObj = cartData.find(el => el.name === itemName);
    const idx = cartData.indexOf(decObj);
  
    if(decObj.quantity > 1){
      const unitPrice = decObj.price / decObj.quantity;
      decObj.quantity -= 1;
      decObj.price = unitPrice * decObj.quantity;
    } else {
      document.getElementById(decObj.id).classList.remove('toggle-heart');
      cartData.splice(idx, 1);
      document.getElementById('cart-plus').innerText = ' ' + cartData.length + ' Items';
      document.getElementById('m-cart-plus').innerText = ' ' + cartData.length;
      if(cartData.length < 1 && flag){
        cartToggle();  
      }
    }
  
    totalAmount();
    cartItems();
  }

function totalAmount(){ // counting discounts
    let sum = cartData.reduce((acc, item) => acc + item.price, 0);
  
    const discountValue = sum * (currentDiscountPercent / 100);
    const finalTotal = sum - discountValue;
  
    document.getElementById('total-item').innerText =
      'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerText =
      'Total Price : $ ' + finalTotal.toFixed(2);
    document.getElementById('discount-amount').innerText =
      'Discount : $ ' + discountValue.toFixed(2);
  
    const mTotal = document.getElementById('m-total-amount');
    if (mTotal) mTotal.innerText = 'Total Price : $ ' + finalTotal.toFixed(2);
    const mDiscount = document.getElementById('m-discount-amount');
    if (mDiscount) mDiscount.innerText = 'Discount : $ ' + discountValue.toFixed(2);
  }
  

document.getElementById('cart-plus').addEventListener('click',cartToggle);
document.getElementById('m-cart-plus').addEventListener('click',cartToggle);

var flag= false;
function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag= true;
        console.log(flag)
    }
    else{
        alert("Currently no item in cart!");
    }
}



window.onresize= window.onload= function(){
    var size= window.screen.width;
    console.log(size)
    if(size<800){
        var cloneFoodItems= document.getElementById('food-items').cloneNode(true);
        var cloneCartPage= document.getElementById('cart-page').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('cart-page').remove();
        document.getElementById('category-header').after(cloneFoodItems);
        document.getElementById('food-items').after(cloneCartPage);
        addEvents()
    }
    if(size>800){
        var cloneFoodItems= document.getElementById('food-items').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('header').after(cloneFoodItems);

        var cloneCartPage= document.getElementById('cart-page').cloneNode(true);
        document.getElementById('cart-page').remove();
        document.getElementById('food-items').after(cloneCartPage);
        addEvents()
    }
}

function addEvents(){
    document.querySelectorAll('.add-to-cart').forEach(item=>{
        item.addEventListener('click',addToCart)
    });
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}

document.getElementById('add-address').addEventListener('click',addAddress);

document.getElementById('m-add-address').addEventListener('click',addAddress);

function addAddress(){
    var address= prompt('Enter your address','');
    if(address){
        document.getElementById('add-address').innerText= ' ' + address;
    }
    else{
        alert("Address not added")
    }
}

// —— dark / light theme toggle ——
const themeToggle = document.getElementById('theme-toggle');
const rootEl = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
  rootEl.classList.add('dark');
  themeToggle.classList.replace('fa-moon-o', 'fa-sun-o');
}

themeToggle.addEventListener('click', () => {
  const isDark = rootEl.classList.toggle('dark');

  if (isDark) {
    themeToggle.classList.replace('fa-moon-o', 'fa-sun-o');
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.classList.replace('fa-sun-o', 'fa-moon-o');
    localStorage.setItem('theme', 'light');
  }
});

// Apply button for promocodes
document.getElementById('apply-promo-btn').addEventListener('click', () => {
    const code = document.getElementById('promo-code-input')
                     .value.trim().toUpperCase();
    if (PROMO_CODES.hasOwnProperty(code)) {
      currentDiscountPercent = PROMO_CODES[code];
      alert(`DISCOUNT: ${currentDiscountPercent}% `);
    } else {
      currentDiscountPercent = 0;
      alert('WRONG PROMO-CODE');
    }
    totalAmount(); 
  });