///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

let totalPrice = cart.reduce(function (accumulator, item) {
    return accumulator + item.price;
  }, 0);
  console.log(totalPrice)

const summedPrice = cart.reduce(totalPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/
let calcFinalPrice = (cartTotal,couponValue,tax)=>{
    let final =  (cartTotal- couponValue)+cartTotal*tax
    return final
 
}

console.log(calcFinalPrice(88,9,0.09))




//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

let customer = {
    age: 20,      // to know better my customer and their needs according on age and gender
    gender: "female", // 
    phone: 202020202002, // to send promotions and keep trucking
    adress:"13948 ave20 ", 
    cart: 222222222222  // for membership subscription
}
