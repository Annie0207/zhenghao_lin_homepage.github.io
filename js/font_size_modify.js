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

// Anni: I like your idea to choose the font size for the customers. 
// But this may attract too much attention from others, because it has become the most prominent part of your entire web page. It blurs your own focus.
