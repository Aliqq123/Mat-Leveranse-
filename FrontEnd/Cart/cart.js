const cartWrapper = document.getElementById(
  "cart-items-wrapper",
);

const cartTotal = document.getElementById("cart-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartWrapper.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    total += item.product_price * item.quantity;

    cartWrapper.innerHTML += `
      <div class="cart-item">

        <div class="item-main">
          <img
            src="${item.product_image}"
            alt="food"
            class="item-image"
          />

          <div class="item-info">
            <h3 class="item-name">
              ${item.product_name}
            </h3>

            <p class="item-description">
              ${item.product_description}
            </p>

            <p>
              Pris: ${item.product_price} kr
            </p>
          </div>
        </div>

        <div class="item-controls">

          <button
            class="btn btn-danger"
            onclick="removeItem(${item.product_id})"
          >
            Ta bort
          </button>

          <div class="quantity-control">

            <button
              class="quantity-btn"
              onclick="decreaseQuantity(${item.product_id})"
            >
              -
            </button>

            <input
              type="number"
              value="${item.quantity}"
              min="1"
              class="quantity-input"
              readonly
            />

            <button
              class="quantity-btn"
              onclick="increaseQuantity(${item.product_id})"
            >
              +
            </button>

          </div>
        </div>
      </div>
    `;
  });

  cartTotal.textContent =
    "Total: " + total.toFixed(2) + " kr";
}

function removeItem(productId) {
  cart = cart.filter(
    (item) => item.product_id !== productId,
  );

  updateCart();
}

function increaseQuantity(productId) {
  const item = cart.find(
    (item) => item.product_id === productId,
  );

  item.quantity++;

  updateCart();
}

function decreaseQuantity(productId) {
  const item = cart.find(
    (item) => item.product_id === productId,
  );

  if (item.quantity > 1) {
    item.quantity--;
  }

  updateCart();
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
}

renderCart();