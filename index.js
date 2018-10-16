var cart = [];

function getCart(item) {

 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = (Math.floor(Math.random() * 100))
  var itemVar = {itemName: item, itemPrice: price};
  console.log(itemVar)
  cart.push(itemVar)
  return `${itemVar.itemName} has been added to your cart.`
}

function viewCart() {
  if(cart.length > 0){
    var message = 'In your cart, '
    for(var i = 0; i<cart.length; i++){
      if(i === 0){
        message += `you have ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else if(i == (cart.length-1)&&(cart.length>1)){
        message += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else{
        message += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
    }
    message += '.'
  }
  else{
    message = 'Your shopping cart is empty.'
  }
  return message
 }
 
 