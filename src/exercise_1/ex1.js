let shoppingCart = [
    { name: "Apples", price: 2.5, quantity: 3 },
    { name: "Bananas", price: 1.5, quantity: 2 },
    { name: "Oranges", price: 3, quantity: 1 },
  ];
// function calculateTotalPrice (cart){
//     let totalPrice = 0;
//     cart.forEach(item => {
//         totalPrice += item.price * item.quantity;
//     });
//     return totalPrice;
// }
function calculateTotalPrice (cart){
    const totalPrice = cart.map(item => item.price * item.quantity).reduce((total = 0, price) => total + price);
    return totalPrice;
}
console.log(calculateTotalPrice(shoppingCart));