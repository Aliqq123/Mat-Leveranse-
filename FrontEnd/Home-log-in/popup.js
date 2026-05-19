// 5. JavaScript to Toggle
function openModal(product) {
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