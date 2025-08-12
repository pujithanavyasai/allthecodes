const products = [
    { id: 1, pname: "Laptop", pprice: 50000 },
    { id: 2, pname: "Sneakers", pprice: 3500 },
    { id: 3, pname: "Makeup Kit", pprice: 1200 },
    { id: 4, pname: "Handbag", pprice: 2500 },
    { id: 5, pname: "Bluetooth Speaker", pprice: 1800 },
    { id: 6, pname: "Sunglasses", pprice: 999 },
    { id: 7, pname: "Wrist Watch", pprice: 4500 },
    { id: 8, pname: "Denim Jacket", pprice: 2700 },
    { id: 9, pname: "Perfume", pprice: 2200 },
    { id: 10, pname: "Bookshelf", pprice: 3200 }
];
const ons = document.getElementById('ons');
const prodcont = document.getElementById('productCont');
const cartcont = document.getElementById('cartCont');
const actioncont = document.getElementById(`actionscont`);
const viewcont = document.getElementById('viewCont');
const clearbutt = document.getElementById(`clearButt`);
const buyButt = document.getElementById(`buyButt`);
const mycartname = document.getElementById(`mycartname`)
const total = document.createElement('div');


let amount = 0;
let productsToShow = [];
cartcont.insertAdjacentElement("afterend", total);
total.innerHTML = `<h2 class="money">Total Amount : ₹<span id="total">0</span></h2>`;
actioncont.innerHTML = `<button id="clearButt" onclick="clearcart()" >Clear</button><button id="sortButt" onclick="sortCart()">Sort By Price</button><button id="buyButt" onclick="buycart()">Buy</button>`;
// viewcont.innerHTML = `<button id="viewFullcart" onclick="viewFullcart()">View Full Cart</button><button id="viewherecart" onclick="viewHerecart()">View Cart Here</button>`;
const cart = [];
disp();
// updates
// function dispView(){
//     if (cart.length === 0) {
//         viewcont.style.display = "none"
//     } else {
//         viewcont.style.display = "block"
//     }
// }
function disp() {
    if (cart.length === 0) {
        total.style.display = "none"
        actioncont.style.display = "none"
        mycartname.style.display = "none"
    } else {
        total.style.display = "block"
        actioncont.style.display = "block"
        mycartname.style.display = "block"
    }
}
const amountid = document.getElementById("total");
if (/Mobi|Android/i.test(navigator.userAgent)) {
    // for(let i = 0;i<=5;i++){
    //     let randomitem = Math.floor(Math.random() * products.length);
    //     productsToShow.push(products[randomitem]);

    // }
    let count = 0;
    cond = true;
    let randomArrList = [];
    while (cond) {
        let randomitem = Math.floor(Math.random() * products.length);
        if (count < 5) {
            if (!randomArrList.includes(randomitem)) {
                randomArrList.push(randomitem);
                count++
            }
        } else { cond = false; }
    }
    randomArrList.forEach(each=>productsToShow.push(products[each]))
    prodcont.className = "productContPhone";
    prodcont.classList.remove("productContNotPhone")
    prodcont.classList.add("productContPhone")
} else {
    productsToShow = [...products];
    prodcont.classList.remove("productContPhone")
    prodcont.classList.add("productContNotPhone")
    prodcont.className = "productContNotPhone";
}
productsToShow.forEach(product => {
    const productdiv = document.createElement('div');
    productdiv.className = "item";
    productdiv.innerHTML = `
        <p> ${product.pname} - ${product.pprice} </p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    prodcont.appendChild(productdiv);
});
const notify = document.createElement('p');
notify.className = 'pos';
notify.style.backgroundColor = "#62eba9ff"
notify.style.display = 'none';
document.body.appendChild(notify);
function addToCart(id) {
    const exists = cart.some(item => item.id === id);

    if (!exists) {
        const product = products.find(item => item.id === id);
        cart.push(product);
        notify.innerText = `Added ${product.pname} to the cart`;
    } else {
        notify.innerText = `Already in cart`;
    }

    notify.style.display = 'block';
    setTimeout(() => {
        notify.style.display = 'none';
    }, 1000);
    renderCart(cart);

}
function renderCart(given) {
    cartcont.innerHTML = "";
    amount = 0;
    given.forEach(item => {
        const eachitem = `
            <div class="item">
                <p> ${item.pname} - ${item.pprice} </p>
                <button onclick="remove(${item.id})">Remove</button> 
            </div>`;
        cartcont.insertAdjacentHTML("beforeend", eachitem);
        amount += Number(item.pprice);
    });

    amountid.textContent = `${amount}`;
    disp();
}
function remove(id) {
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
        notify.innerText = `Removed ${products.find(each => each.id == id).pname} from cart`;
        cart.splice(index, 1);
        renderCart(cart);
        notify.style.display = 'block';
        notify.style.backgroundColor = "#ff7676ff"
        setTimeout(() => {
            notify.style.display = 'none';
            notify.style.backgroundColor = "#62eba9ff"
        }, 1000);

    }
}

function clearcart() {
    cart.length = 0;
    renderCart(cart);
}
function sortCart() {
    cart.sort((a, b) => a.pprice - b.pprice)
    renderCart(cart);
}
function buycart() {
    ons.innerHTML = "";
    ons.insertAdjacentHTML("beforeend",
        `
        <div class="buycont">
            <img class="buyimg" src="to_pay.svg"/>
            <h3 class="topay">The Amount to be paid ₹${amount}</h3>
            <button class="paybut" onclick="topay()">Confirm Purchase</button>
        </div>
        `
    );
}
function topay() {
    ons.innerHTML = "";
    ons.insertAdjacentHTML("beforeend",
        `
        <div class="buycont">
            <img class="buyimg" src="tick.svg"/>
            <pre class="topay">Order Has been Confirmed!

   Thank you for shopping with us.
            </pre>
        </div>
        `
    );
}
// Updatesss
// function viewFullcart(){
//     viewcont.style.display = "none"
//     document.getElementById('ons').innerHTML = "";
// }
// function viewHerecart(){
//     viewcont.style.display = "none"
// }