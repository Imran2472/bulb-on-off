function ToggleImg() {
  var image = document.getElementById("image");
  if (image.getAttribute("src") == "./off.png") {
    image.setAttribute("src", "./on.png");
  }else{
    image.setAttribute("src", "./off.png");
  }
}
