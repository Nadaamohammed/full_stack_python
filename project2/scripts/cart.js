let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.getElementById('listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quentity');

console.log(quantity);

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id:1,
        name: 'big burger',
        image:'/popular-burger-big.png',
        price:450
    },
    {
        id:2,
        name: 'chicken burger',
        image:'/popular-burger-chicken.png',
        price:400
    },{
        id:3,
        name: 'classic burger',
        image:'/popular-burger-classic.png',
        price:350
    },
    {
        id:4,
        name: 'meat burger',
        image:'/popular-burger-meat.png',
        price:500
    }
];
let listCards = [];
function initApp(){
    products.forEach((value , key) =>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <img src="assets/img/burger${value.image}"/>
        <div class= "title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity=1;
    }
    
    reloadCard();
}

function reloadCard(){
     listCard.innerHTML = '';
    let count=0;
    let totalPrice=0;
    listCards.forEach((value , key) =>{
        totalPrice = totalPrice +value.price;
        count = count + value.quantity;
        console.log(value);

       
            let newDiv = document.createElement('li');
           newDiv.innerHTML = `
           <div><img src='../assets/img/burger/popular-burger-big.png'/></div>
           <div>${value.name}</div>
           <div>${value.price.toLocaleString()}</div>
           <div>
             <button onclick="changeQuantity(${key} , ${value.quantity-1})">-</button>
             <div class="count">${value.quantity}</div>
             <button onclick="changeQuantity(${key} , ${value.quantity+1})">+</button>
            </div>
           `;
           listCard.appendChild(newDiv);

        }
    )
    total.innerHTML = totalPrice.toLocaleString();
    quantity.innerHTML = count;
    

}
function changeQuantity(key , quantity){
    if(quantity == 0)
    {
        delete listCards[key];
    }
    else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity *products[key].price;
    }
    reloadCard();
}
//json
document.addEventListener('DOMContentLoaded', function() {
    async function fetchProducts(url) {
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            let data = await response.json();
            let products = document.getElementById('products');
            products.innerHTML = ''; 
            data.forEach(product => {
                products.innerHTML += `
                    <div>
                        <div>
                            <img src='${product.category.image || 'https://via.placeholder.com/100'}' alt="${product.title}">
                        </div>
                        <div>
                            <p>${product.title}</p>
                            <p>Price: $${product.price}</p>
                        </div>
                    </div>
                `;
            });
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }
    
    fetchProducts('https://api.escuelajs.co/api/v1/products');
    // fetchProducts('./data.json');
  });