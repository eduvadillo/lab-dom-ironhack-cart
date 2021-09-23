// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('input').value;

  let valuePrice = Number(price.innerHTML);

  let precioSubTotal = valuePrice * quantity;

  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = precioSubTotal;

  return precioSubTotal;
}

function calculateAll() {
  let precioTotal = 0;

  let products = document.getElementsByClassName('product');

  for (let i = 0; i < products.length; i++) {
    precioTotal += updateSubtotal(products[i]);
    let totalHtml = document.querySelector('#total-value span');
    totalHtml.innerHTML = precioTotal;
  }

  return precioTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let parent = target.parentNode.parentNode.parentNode;
  let child = target.parentNode.parentNode;

 // console.log(parent);
 // console.log(child);

  parent.removeChild(child);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn btn-remove');

  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }
  //... your code goes here
});
