function highlight() {
  // Get all the <strong> elements in the paragraph
  var boldElements = document.querySelectorAll("p strong");

  // Change the color of each <strong> element to green
  boldElements.forEach(function (element) {
    element.style.color = "green";
  });
}

function return_normal() {
  // Get all the <strong> elements in the paragraph
  var boldElements = document.querySelectorAll("p strong");

  // Revert the color of each <strong> element back to black
  boldElements.forEach(function (element) {
    element.style.color = "black";
  });
}
