const foodItems = [
  {
    id: 1,
    image: "images/Ofada-stew-2.jpg",
    name: "Ofada Rice",
    price: 2000,
  },
  {
    id: 2,
    image: "images/egisi-semo.jpg",
    name: "Egusi Soup",
    price: 1500,
  },
  {
    id: 3,
    image: "images/Amala.jpg",
    name: "Amala",
    price: 1200,
  },
  {
    id: 4,
    image: "images/moi.jpg",
    name: "Moi-Moi",
    price: 900,
  },
  {
    id: 5,
    image: "images/Abacha.jpg",
    name: "Abacha",
    price: 1250,
  },
  {
    id: 6,
    image: "images/Nkwobi-7-2.jpg",
    name: "Nkwobi",
    price: 1500,
  },
];

const container = document.getElementById("food-item");
const CartBtn = document.getElementById("cartbtn");
const MycartBtn = document.getElementById("cart-modal");
const Closebtn = document.getElementById("cartClose");
const contentAbout = document.getElementById("openaboutcontent");
const btn = document.getElementById("modal");
const span = document.getElementById("close");

foodItems.forEach((foodItems, index) => {
  container.innerHTML += ` <div id="food-list">
    <div id="food-img">
   <img src="${foodItems.image}" width="90%" height="90%">
   </div>
   <div id="display">
   <h3>${foodItems.name}</h3>
   <div class="pricadd">
   <p>₦${foodItems.price}</p>
  <button class="addtoCart" onclick="addToCart(${index})">+ Add</button>
  </div> 
   </div>
   </div>`;
});

let cart = [];
function addToCart(a) {
  cart.push({ ...foodItems[a] });
  // console.log(cart);
  displayCart();
  displayTotalPrice();
}
function delElement(a) {
  cart.splice(a, 1);
  displayCart();
  displayTotalPrice();
}

function displayCart() {
  let j = 0;
  //   total = 0;
  const cartItem = document.getElementById("cartItem");
  document.getElementById("count").innerHTML = cart.length;
  cartItem.innerHTML = "";
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "";
    document.getElementById("total").innerHTML = " ₦" + 0 + ".00";
  } else {
    cart.forEach((foodItem, index) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.className = "cart-item";
      cartItemDiv.innerHTML =
        ` <div class="row-img">
        <div class="foodrowimage">
            <img src="${foodItem.image}" width="90%" height="90%">
            </div>
            <h3>${foodItem.name}</h3>
            <p>₦${foodItem.price}</p>` +
        // "<i class='fa-solid fa-trash'onclick='delElement(${index})'></i></div>";
        "<i class='fa-solid fa-trash' onclick='delElement(" +
        j++ +
        ")'></i></div>";
      cartItem.appendChild(cartItemDiv);

      // console.log(cartItem);
    });
  }
}
//      cart.forEach(Items=>{
//         cartItem.innerHTML=
//        `<img src="${Items.image}" width="90%" height="90%"></img>
//        <h3>${Items.name}</h3>
//        <p>₦${Items.price}</p>`
//       "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
//        console.log(cartItem);
//     });

displayCart();

function displayTotalPrice() {
  TotalPrice = 0;
  cart.forEach((foodItem, index) => {
    var { price } = foodItem;
    TotalPrice = TotalPrice + price;
    const totalPriceDisplay = document.getElementById("total");
    totalPriceDisplay.textContent = "₦ " + TotalPrice + ".00";
    totalPriceDisplay.style.color = "black";
    totalPriceDisplay.style.fontSize = "20px";
    // console.log(totalPriceDisplay);
  });
}

function addEventListenerToButtons() {
  const buttons = document.querySelectorAll(".addtoCart");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemId = parseInt(event.target.getAttribute("onclick"));
      const seletedItem = items.find((item) => item.id === item.id);
      addToCart(seletedItem);

      displayCart();
    });
  });
}

// function addEventListenerToIcons() {
//   const removeIcon = document.querySelectorAll(".fa-solid fa-trash");

//   removeIcon.forEach((icon) => {
//     icon.addEventListener("click", (event) => {
//       const ItemIndex = parseInt(event.target.getAttribute("onclick"));
//       // const seletedItemDel = items.find((item) => item.id === item.id);
//       delElement(a);
//       displayCart();
//     });
//   });
// }

contentAbout.onclick = function () {
  btn.style.display = "block";
};

span.onclick = function () {
  btn.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == btn) {
    btn.style.display = "none";
  }
};
CartBtn.onclick = function () {
  MycartBtn.style.display = "block";
  successfulBtn.style.display = "none";
};
Closebtn.onclick = function () {
  MycartBtn.style.display = "none";
  successfulBtn.style.display = "none";
};

const Okbtn = document.getElementById("homepageback");
const OrderBtn = document.getElementById("Ordebackpage");
const successfulBtn = document.getElementById("sucessfull-modal");
const AddCart = document.querySelector(".modal-content");
OrderBtn.onclick = function () {
  AddCart.style.display = "none";
  successfulBtn.style.display = "block";
};

Okbtn.onclick = function () {
  window.location.href = "index.html";
  cart = [];
  document.getElementById("count").innerHTML = cart.length;
};

const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");
menu.addEventListener("click", () => {
  menu.classList.toggle("times");
  navbar.classList.toggle("navbar-toggle");
});

function Order() {
  window.location.href = "dev.html";
}

const userdetails = JSON.parse(localStorage.getItem("userdetails"));
if (userdetails) {
  document.getElementById("Logindetails").style.display = "none";
  document.getElementById("registerdetails").style.display = "none";
  document.getElementById("logout").style.display = "block";
  document.getElementById("cartbtn").style.display = "block";
  document.getElementById("order").addEventListener("click", () => {
    Order();
  });
} else {
  // OrdeBtn.disabled = true;
  document.getElementById("Logindetails").style.display = "block";
  document.getElementById("registerdetails").style.display = "block";
  document.getElementById("logout").style.display = "none";
  document.getElementById("cartbtn").style.display = "none";
}

const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", () => {
  logout();
});
function logout() {
  localStorage.removeItem("userdetails");
  OrdeBtn.disabled = true;
  document.getElementById("Logindetails").style.display = "block";
  document.getElementById("registerdetails").style.display = "block";
  document.getElementById("logout").style.display = "none";
  document.getElementById("cartbtn").style.display = "none";
}
