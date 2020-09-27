function posaljiTekstoveEvent(textovi) {
  const noviTextoviEvent = new CustomEvent(
    "posaljiTekstove", {
      detail: textovi
    });

  document.dispatchEvent(noviTextoviEvent);
}

function posaljiSveTekstove() {
  const textovi = [];

  document.addEventListener("makniZadnjiItem", (e) => {
    textovi.pop();
    posaljiTekstoveEvent(textovi);
  });

  document.addEventListener("posaljiInputText", (e) => {
    textovi.push(e.detail);

    posaljiTekstoveEvent(textovi);
  });
}

module.exports = posaljiSveTekstove;