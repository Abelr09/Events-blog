document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
  document
    .getElementById("move-content")
    .classList.toggle("move-container-all");

  document.getElementById("show-menu").classList.toggle("show-lateral");
}

let previusTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "¡No te vayas!¡Vuelve!😱";
});

window.addEventListener("focus", () => {
  document.title = previusTitle;
});
