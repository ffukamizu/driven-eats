//Will change state if an item is already highlighted
let isHighlightedFood = false;
let isHighlightedBeverage = false;
let isHighlightedDessert = false;
//Restaurant's phone:
const phone = 5511995023335;

function highlightFood(idFood) {
  //highlight a product not previously highlighted
  if (isHighlightedFood === false) {
    document.getElementById(idFood).classList.add("highlight-item");
    currentHighlightFood = idFood;
    isHighlightedFood = true;
    if (isHighlightedFood === true && isHighlightedBeverage === true && isHighlightedDessert === true) {
      document.getElementById("buttom-text").innerHTML = "Fechar pedido";
      document.getElementById("buttom-rectangle").classList.add("active-buttom");
    } else {
      null;
    }
    //highlight another product while unselecting the previous one
  } else if (isHighlightedFood === true && currentHighlightFood != idFood) {
    document.getElementById(currentHighlightFood).classList.remove("highlight-item");
    document.getElementById(idFood).classList.add("highlight-item");
    currentHighlightFood = idFood;
    if (isHighlightedFood === true && isHighlightedBeverage === true && isHighlightedDessert === true) {
      document.getElementById("buttom-text").innerHTML = "Fechar pedido";
      document.getElementById("buttom-rectangle").classList.add("active-buttom");
    } else {
      null;
    }
    //unselect a product that is already highlighted
  } else {
    document.getElementById(idFood).classList.remove("highlight-item");
    isHighlightedFood = false;
    document.getElementById("buttom-text").innerHTML = "Selecione os 3 itens para fechar o pedido";
    document.getElementById("buttom-rectangle").classList.remove("active-buttom");
  }
}

function highlightBeverage(idBeverage) {
  //highlight a product not previously highlighted
  if (isHighlightedBeverage === false) {
    document.getElementById(idBeverage).classList.add("highlight-item");
    currentHighlightBeverage = idBeverage;
    isHighlightedBeverage = true;
    if (isHighlightedFood === true && isHighlightedBeverage === true && isHighlightedDessert === true) {
      document.getElementById("buttom-text").innerHTML = "Fechar pedido";
      document.getElementById("buttom-rectangle").classList.add("active-buttom");
    } else {
      null;
    }
    //highlight another product while unselecting the previous one
  } else if (isHighlightedBeverage === true && currentHighlightBeverage != idBeverage) {
    document.getElementById(currentHighlightBeverage).classList.remove("highlight-item");
    document.getElementById(idBeverage).classList.add("highlight-item");
    currentHighlightBeverage = idBeverage;
    if (isHighlightedFood === true && isHighlightedBeverage === true && isHighlightedDessert === true) {
      document.getElementById("buttom-text").innerHTML = "Fechar pedido";
      document.getElementById("buttom-rectangle").classList.add("active-buttom");
    } else {
      null;
    }
    //unselect a product that is already highlighted
  } else {
    document.getElementById(idBeverage).classList.remove("highlight-item");
    isHighlightedBeverage = false;
    document.getElementById("buttom-text").innerHTML = "Selecione os 3 itens para fechar o pedido";
    document.getElementById("buttom-rectangle").classList.remove("active-buttom");
  }
}

function highlightDessert(idDessert) {
  //highlight a product not previously highlighted
  if (isHighlightedDessert === false) {
    document.getElementById(idDessert).classList.add("highlight-item");
    currentHighlightDessert = idDessert;
    isHighlightedDessert = true;
    if (isHighlightedFood === true && isHighlightedBeverage === true && isHighlightedDessert === true) {
      document.getElementById("buttom-text").innerHTML = "Fechar pedido";
      document.getElementById("buttom-rectangle").classList.add("active-buttom");
    } else {
      null;
    }
    //highlight another product while unselecting the previous one
  } else if (isHighlightedDessert === true && currentHighlightDessert != idDessert) {
    document.getElementById(currentHighlightDessert).classList.remove("highlight-item");
    document.getElementById(idDessert).classList.add("highlight-item");
    currentHighlightDessert = idDessert;
    if (isHighlightedFood === true && isHighlightedBeverage === true && isHighlightedDessert === true) {
      document.getElementById("buttom-text").innerHTML = "Fechar pedido";
      document.getElementById("buttom-rectangle").classList.add("active-buttom");
    } else {
      null;
    }
    //unselect a product that is already highlighted
  } else {
    document.getElementById(idDessert).classList.remove("highlight-item");
    isHighlightedDessert = false;
    document.getElementById("buttom-text").innerHTML = "Selecione os 3 itens para fechar o pedido";
    document.getElementById("buttom-rectangle").classList.remove("active-buttom");
  }
}

let foodName = null;
let foodPrice = null;
let beverageName = null;
let beveragePrice = null;
let dessertName = null;
let dessertPrice = null;
let totalPrice = null;

//confirm order buttom, also gets each highlighted product information
function orderConfirm() {
  if (isHighlightedFood === true && isHighlightedBeverage === true && isHighlightedDessert === true) {
    //unhide modal window
    document.getElementById("checkout-modal").classList.replace("modal-hide", "modal-display");
    //concatenate the id of all selected products, and gets the adress of each product's name and price
    let foodNameAdress = "#" + currentHighlightFood + " div:nth-child(2)";
    let foodPriceAdress = "#" + currentHighlightFood + " div:nth-child(4)";
    let beverageNameAdress = "#" + currentHighlightBeverage + " div:nth-child(2)";
    let beveragePriceAdress = "#" + currentHighlightBeverage + " div:nth-child(4)";
    let dessertNameAdress = "#" + currentHighlightDessert + " div:nth-child(2)";
    let dessertPriceAdress = "#" + currentHighlightDessert + " div:nth-child(4)";
    //uses the adress to fetch a string containing the relevant information
     foodName = document.querySelector(foodNameAdress).innerText;
     foodPrice = document.querySelector(foodPriceAdress).innerText;
     beverageName = document.querySelector(beverageNameAdress).innerText;
     beveragePrice = document.querySelector(beveragePriceAdress).innerText;
     dessertName = document.querySelector(dessertNameAdress).innerText;
     dessertPrice = document.querySelector(dessertPriceAdress).innerText;
    //display a modal with order information
    document.querySelector(".checkout-food p:nth-child(1)").innerText = foodName;
    document.querySelector(".checkout-food p:nth-child(2)").innerText = foodPrice;
    document.querySelector(".checkout-beverage p:nth-child(1)").innerText = beverageName;
    document.querySelector(".checkout-beverage p:nth-child(2)").innerText = beveragePrice;
    document.querySelector(".checkout-dessert p:nth-child(1)").innerText = dessertName;
    document.querySelector(".checkout-dessert p:nth-child(2)").innerText = dessertPrice;
    //converts string to number and them sum everything
    let stripFoodPrice = Number(foodPrice.replace(/[^0-9,.]/g, "").replace(",", "."));
    let stripBeveragePrice = Number(beveragePrice.replace(/[^0-9,.]/g, "").replace(",", "."));
    let stripDessertPrice = Number(dessertPrice.replace(/[^0-9,.]/g, "").replace(",", "."));
    totalPrice = stripFoodPrice + stripBeveragePrice + stripDessertPrice;
    totalPrice = Math.round(totalPrice * 100) / 100;
    document.querySelector(".checkout-total p:nth-child(2)").innerText = "R$ " + totalPrice;
  } else {
    null;
  }
}

function checkout() {
  let checkoutMensage = "Olá, gostaria de fazer o pedido:" + "\n- Prato: " + foodName + "\n- Bebida: " + beverageName + "\n- Sobremesa: " + dessertName + "\n\nTotal: R$ " + totalPrice 
  let encoded = encodeURI('https://api.whatsapp.com/send?phone=' + phone + "&text=" + checkoutMensage)
  window.open(encoded);
}

function cancelCheckout() {
  document.getElementById("checkout-modal").classList.replace("modal-display", "modal-hide");
}
