var isHighlightedFood = false;
var isHighlightedBeverage = false;
var isHighlightedDessert = false;

function highlightFood(idFood) {
  if (isHighlightedFood === false) {
    //highlight a product
    document.getElementById(idFood).classList.add("highlight-item");
    currentHighlightFood = idFood;
    isHighlightedFood = true;
    if (
      isHighlightedFood === true &&
      isHighlightedBeverage === true &&
      isHighlightedDessert === true
    ) {
      document.getElementById("buttom-text").innerHTML = "Fechar pedido";
      document
        .getElementById("buttom-rectangle")
        .classList.add("active-buttom");
    } else {
      null;
    }
  } else if (isHighlightedFood === true && currentHighlightFood != idFood) {
    //highlight another product while unselecting the previous one
    document
      .getElementById(currentHighlightFood)
      .classList.remove("highlight-item");
    document.getElementById(idFood).classList.add("highlight-item");
    currentHighlightFood = idFood;
    if (
      isHighlightedFood === true &&
      isHighlightedBeverage === true &&
      isHighlightedDessert === true
    ) {
      document.getElementById("buttom-text").innerHTML = "Fechar pedido";
      document
        .getElementById("buttom-rectangle")
        .classList.add("active-buttom");
    } else {
      null;
    }
  } else {
    //unselect a product that is already highlighted
    document.getElementById(idFood).classList.remove("highlight-item");
    isHighlightedFood = false;
    document.getElementById("buttom-text").innerHTML =
      "Selecione os 3 itens para fechar o pedido";
    document
      .getElementById("buttom-rectangle")
      .classList.remove("active-buttom");
  }
}

function highlightBeverage(idBeverage) {
  if (isHighlightedBeverage === false) {
    //highlight a product
    document.getElementById(idBeverage).classList.add("highlight-item");
    currentHighlightBeverage = idBeverage;
    isHighlightedBeverage = true;
    if (
      isHighlightedFood === true &&
      isHighlightedBeverage === true &&
      isHighlightedDessert === true
    ) {
      document.getElementById("buttom-text").innerHTML = "Fechar pedido";
      document
        .getElementById("buttom-rectangle")
        .classList.add("active-buttom");
    } else {
      null;
    }
  } else if (
    isHighlightedBeverage === true &&
    currentHighlightBeverage != idBeverage
  ) {
    //highlight another product while unselecting the previous one
    document
      .getElementById(currentHighlightBeverage)
      .classList.remove("highlight-item");
    document.getElementById(idBeverage).classList.add("highlight-item");
    currentHighlightBeverage = idBeverage;
    if (
      isHighlightedFood === true &&
      isHighlightedBeverage === true &&
      isHighlightedDessert === true
    ) {
      document.getElementById("buttom-text").innerHTML = "Fechar pedido";
      document
        .getElementById("buttom-rectangle")
        .classList.add("active-buttom");
    } else {
      null;
    }
  } else {
    //unselect a product that is already highlighted
    document.getElementById(idBeverage).classList.remove("highlight-item");
    isHighlightedBeverage = false;
    document.getElementById("buttom-text").innerHTML =
      "Selecione os 3 itens para fechar o pedido";
    document
      .getElementById("buttom-rectangle")
      .classList.remove("active-buttom");
  }
}

function highlightDessert(idDessert) {
  if (isHighlightedDessert === false) {
    //highlight a product
    document.getElementById(idDessert).classList.add("highlight-item");
    currentHighlightDessert = idDessert;
    isHighlightedDessert = true;
    if (
      isHighlightedFood === true &&
      isHighlightedBeverage === true &&
      isHighlightedDessert === true
    ) {
      document.getElementById("buttom-text").innerHTML = "Fechar pedido";
      document
        .getElementById("buttom-rectangle")
        .classList.add("active-buttom");
    } else {
      null;
    }
  } else if (
    isHighlightedDessert === true &&
    currentHighlightDessert != idDessert
  ) {
    //highlight another product while unselecting the previous one
    document
      .getElementById(currentHighlightDessert)
      .classList.remove("highlight-item");
    document.getElementById(idDessert).classList.add("highlight-item");
    currentHighlightDessert = idDessert;
    if (
      isHighlightedFood === true &&
      isHighlightedBeverage === true &&
      isHighlightedDessert === true
    ) {
      document.getElementById("buttom-text").innerHTML = "Fechar pedido";
      document
        .getElementById("buttom-rectangle")
        .classList.add("active-buttom");
    } else {
      null;
    }
  } else {
    //unselect a product that is already highlighted
    document.getElementById(idDessert).classList.remove("highlight-item");
    isHighlightedDessert = false;
    document.getElementById("buttom-text").innerHTML =
      "Selecione os 3 itens para fechar o pedido";
    document
      .getElementById("buttom-rectangle")
      .classList.remove("active-buttom");
  }
}
