// ================= NAVBAR =================
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// ================= SEARCH =================
const searchBtn = document.querySelector("#search");
const searchBox = document.querySelector("#searchBox");
const searchInput = document.querySelector("#searchInput");

searchBtn.onclick = (e) => {
  e.preventDefault();
  searchBox.style.display =
    searchBox.style.display === "block" ? "none" : "block";
  searchInput.focus();
};

searchInput.addEventListener("keyup", function () {
  let keyword = searchInput.value.toLowerCase();
  let items = document.querySelectorAll(".layanan-card");
  items.forEach((item) => {
    let name = item
      .querySelector(".layanan-card-title")
      .textContent.toLowerCase();
    if (name.includes(keyword)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

// ================= CART =================
const cartBtn = document.querySelector("#dhopping-cart"); // typo "dhopping" biar sesuai HTML
const cartBox = document.querySelector("#cartBox");
const cartItemsList = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");

let cart = [];

cartBtn.onclick = (e) => {
  e.preventDefault();
  cartBox.style.display = cartBox.style.display === "block" ? "none" : "block";
};

// Tambah ke keranjang
document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", function () {
    let card = this.closest(".layanan-card");
    let name = card.querySelector(".layanan-card-title").textContent;
    let price = parseInt(card.querySelector(".menu-card-price").dataset.price);

    cart.push({ name, price });
    updateCart();
    alert(`${name} ditambahkan ke keranjang!`);
  });
});

function updateCart() {
  cartItemsList.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    let li = document.createElement("li");
    li.textContent = `${item.name} - IDR ${item.price.toLocaleString()}`;
    cartItemsList.appendChild(li);
  });
  cartTotal.textContent = "IDR " + total.toLocaleString();
}
