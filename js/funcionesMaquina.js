var nombre = "";
var apellido = "";

function initEvents() {
  console.log("Se han iniciado los eventos");
  var playButton = $("#playButton");
  var nombreButton = $("#nombreButton");
  playButton.prop("disabled", true);
  playButton.on("click", play);
  nombreButton.on("click", getNombre);
}

function getNombre() {
  nombre = $("#nombre").val();
  apellido = $("#apellido").val();
  console.log("Se ha pulsado el botón de nombre");

  var campoNombre = $("#nombre");
  var campoApellido = $("#apellido");

  if (nombre == "" || apellido == "") {
    if (nombre == "") {
      campoNombre.css("borderColor", "red");
    } else {
      campoNombre.css("borderColor", "");
    }
    if (apellido == "") {
      campoApellido.css("borderColor", "red");
    } else {
      campoApellido.css("borderColor", "");
    }
    alert("Introduce un nombre y un apellido");
  } else {
    console.log("Nombre: " + nombre);
    campoNombre.css("borderColor", "");
    campoApellido.css("borderColor", "");
    $("#playButton").prop("disabled", false);
  }
}

function play() {
  console.log("Se ha iniciado el juego");

  var xmlData =
    "<data><nombre>" +
    nombre +
    "</nombre><apellido>" +
    apellido +
    "</apellido></data>";

  $.ajax({
    url: "./php/gananciaAleatoria.php",
    type: "POST",
    data: xmlData,
    dataType: "xml", // Esperamos un XML como respuesta
    success: function (response) {
      var xmlString = new XMLSerializer().serializeToString(response);
      var gananciaMaxima = $(response).find('ganancia').text();
      $("#maxValue").text("Ganancia máxima: " + gananciaMaxima);
      $("#maxValue").css("visibility", "visible");
      $("#playButton").prop("disabled", false);
      $("#cargando").css("visibility", "hidden");
    },
    error: function (xhr, status, error) {
      $("#maxValue").text("ERROR: " + xhr.status);
      $("#maxValue").css("visibility", "visible");
      $("#playButton").prop("disabled", false);
      $("#cargando").css("visibility", "hidden");
    },
  });

  $("#maxValue").css("visibility", "hidden");
  $("#playButton").prop("disabled", true);
  $("#cargando").css("visibility", "visible");
}

$(function () {
  initEvents();
});


$(function () {
  initEvents();
});
