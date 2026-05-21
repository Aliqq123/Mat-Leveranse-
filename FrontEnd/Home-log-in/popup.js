// 5. JavaScript to Toggle
let currentProduct = null;

function openModal(product) {
  currentProduct = product;

  document.getElementById("modalTitle").textContent =
    product.product_name;

  document.getElementById("modalName").textContent =
    product.product_name;

  document.getElementById("modalDescription").textContent =
    product.product_description;

  document.getElementById("modalImage").src =
    product.product_image;

  document.getElementById("modalPrice").textContent =
    product.product_price;

  document.getElementById("itemModal").style.display = "block";
}

function closeModal() {
  document.getElementById("itemModal").style.display = "none";
}

document
  .getElementById("addToCartBtn")
  .addEventListener("click", addToCart);

function addToCart() {
  const quantity =
    parseInt(document.getElementById("quantitySelect").value) || 1;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find(
    (item) => item.product_id === currentProduct.product_id,
  );

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({
      ...currentProduct,
      quantity,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  closeModal();
}