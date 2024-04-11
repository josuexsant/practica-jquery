function addEvent(elemento, nomevento, funcion, captura) {
  if (elemento.attachEvent) {
    elemento.attachEvent("on" + nomevento, funcion);
    return true;
  } else if (elemento.addEventListener) {
    elemento.addEventListener(nomevento, funcion, captura);
    return true;
  } else return false;
}

function initEvents() {
  console.log("Se han iniciado los eventos");
  var playButton = document.getElementById("playButton");
  addEvent(playButton, "click", initGame, false);
}

function initGame() {
  console.log("Se ha iniciado el juego");

  var xmlHttp = crearXMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      document.getElementById("maxValue").innerHTML = 'Ganancia máxima: ' +xmlHttp.responseText;
    }
  };
  xmlHttp.open("GET", "./gananciaMax.txt", true);
  xmlHttp.send();
}

function crearXMLHttpRequest() {
  var xmlHttp = null;
  if (window.ActiveXObject) xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  else if (window.XMLHttpRequest) xmlHttp = new XMLHttpRequest();
  return xmlHttp;
}

addEvent(window, "load", initEvents, false);
