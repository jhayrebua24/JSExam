const { topProduct, bottomProduct, zeroProfitProduct } = require('./SalesProblem');

const salesProfit = [
  {
    "Product A" : -20,
  },
  {
    "Product E" : -5,
  },
  {
    "Product B" : 20,
  },
  {
    "Product C": -81,
  },
];//profits array

console.log(topProduct(salesProfit)) //expected output product B
console.log(bottomProduct(salesProfit)) // product C
console.log(zeroProfitProduct(salesProfit)) // product E