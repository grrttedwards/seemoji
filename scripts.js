function handleKeypress(){
    e = window.event;
    if (e.which == 13 || e.keycode == 13) {
      if (document.getElementById("search").value === "") {
        document.getElementById("mojos").innerHTML = "";
      } else {
        var content = document.createElement("IMG");
        content.src = "mojos/apple-okay.png";
        content.style.width = "100%";
        var li = document.createElement("LI");
        li.appendChild(content);
        var ul = document.getElementById("mojos").appendChild(li);
        return false;
      }
    }
    return true;
}
