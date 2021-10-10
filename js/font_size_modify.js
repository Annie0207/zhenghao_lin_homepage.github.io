function SetFont(size) {
  var divBody = document.getElementById("modifiable_text");
  if (!divBody) {
    return;
  }
  divBody.style.fontSize = size + "px";
  var divChildBody = divBody.childNodes;
  for (var i = 0; i < divChildBody.length; i++) {
    if (divChildBody[i].nodeType == 1) {
      divChildBody[i].style.fontSize = size + "px";
    }
  }
}
