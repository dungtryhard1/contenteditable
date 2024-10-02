var contenteditable = document.getElementById("contenteditable");

contenteditable.addEventListener("keydown", function (event) {
  var li = document.querySelector("li");
  if (!li) {
    var newLi = document.createElement("li");
    contenteditable.appendChild(newLi);
  }
});
