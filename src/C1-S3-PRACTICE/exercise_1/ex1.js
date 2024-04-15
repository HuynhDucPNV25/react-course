let shoppingCart = 
    [
        { name: "Apples", price: 2.5, quantity: 3 },
        { name: "Bananas", price: 1.5, quantity: 2 },
        { name: "Oranges", price: 3, quantity: 1 },
    ];
let totalPrice1 = 0, totalPrice2 = 0, totalPrice3 = 0;

function calculateTotalPrice1 (cart){
    cart.forEach(item => {
        totalPrice1 += item.price * item.quantity;
    });
    return totalPrice1;
}
function calculateTotalPrice2 (cart){
    for (let item of shoppingCart) {
    totalPrice2 += item.price * item.quantity;
    }

    return totalPrice2;
}
function calculateTotalPrice3 (cart){
    const totalPrice3 = cart.map(item => item.price * item.quantity).reduce((total, price) => total + price);
    return totalPrice3;
}
console.log("Output 1: ",calculateTotalPrice1(shoppingCart));
console.log("Output 2: ",calculateTotalPrice2(shoppingCart));
console.log("Output 3: ",calculateTotalPrice3(shoppingCart));