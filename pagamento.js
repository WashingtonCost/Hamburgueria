const productSelect = document.getElementById("product_name");
const priceInput = document.getElementById("product_price");

productSelect.addEventListener("change", (event) => {
  const selectedProduct = event.target.value;
  switch (selectedProduct) {
    case "BurgueDia":
      priceInput.value = "15.00";
      break;
    case "batata_frita":
      priceInput.value = "8.00";
      break;
    case "refrigerante":
      priceInput.value = "5.00";
      break;
    default:
      priceInput.value = "";
      break;
  }
});
