document.addEventListener("DOMContentLoaded", function (e) {
  const parrafos = document.querySelectorAll(".description");

  let alturas = [];
  let alturaMaxima = 0;

  const aplicarAlturas = (function aplicarAlturas() {
    parrafos.forEach((parrafo) => {
      if (alturaMaxima == 0) {
        alturas.push(parrafo.clientHeight);
      } else {
        parrafo.style.height = alturaMaxima + "px";
      }
    });
    return aplicarAlturas;
  })();
  alturaMaxima = Math.max.apply(Math, alturas);

  aplicarAlturas();

  const futureBtn = document.getElementById("future-btn");
  const previousBtn = document.getElementById("previous-btn");

  const blogContentFuture = document.getElementById("blog-content-future");
  const blogContentPrevious = document.getElementById("blog-content-previous");

  futureBtn.onclick = () => {
    showElement(blogContentFuture)
    hiddenElement(blogContentPrevious)
  };

  previousBtn.onclick = () => {
    showElement(blogContentPrevious)
    hiddenElement(blogContentFuture)
    
  };
});
function showElement(element){
  element.classList.remove('hidden')
}

function hiddenElement(element){
  element.classList.add('hidden')
}
