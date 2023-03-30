var isHighlighted = false;

function highlightFood(id) {
  if (isHighlighted === false) {
    //highlight a product
    document.getElementById(id).classList.add("highlight-item");
    currentHighlight = id;
    isHighlighted = true;
  } else if (isHighlighted === true && currentHighlight != id) {
    //highlight another product while unselecting the previous one 
    document.getElementById(currentHighlight).classList.remove("highlight-item");
    document.getElementById(id).classList.add("highlight-item");
    currentHighlight = id;
  } else {
    //unselect a product that is already highlighted
    document.getElementById(id).classList.remove("highlight-item");
    isHighlighted = false;
  }
}
