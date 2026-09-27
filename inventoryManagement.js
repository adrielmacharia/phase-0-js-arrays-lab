// Write your code here
const products = ["laptop","phone","headphones","monitor"]

function logFirstProduct() {
  console.log(products[0])
}

logFirstProduct();

function addProduct(productName) {
  products.push(productName);
}

addProduct("keyboard");
console.log(products);

function updateProductName(position,newName){
  products[position]=newName;
}
updateProductName(1,"smartphone");
console.log(products);

function removeLastProduct() {
  products.pop();
}

removeLastProduct();
console.log(products);


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
