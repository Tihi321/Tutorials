function dodajTodoItem() {
  const addButton = document.querySelector(".add");

  addButton.addEventListener("click", () => {
    const textInput = document.querySelector(".input");

    const noviInputEvent = new CustomEvent(
      "posaljiInputText", {
        detail: textInput.value
      });

    document.dispatchEvent(noviInputEvent);
    textInput.value = "";
  });
}

function izbrisiTodoItem() {
  const eraseButton = document.querySelector(".erase");
  eraseButton.addEventListener("click", () => {

    const makniZadnjiItem = new CustomEvent("makniZadnjiItem");

    document.dispatchEvent(makniZadnjiItem);
  });
}

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

function ispisiUKonzoli() {
  document.addEventListener("posaljiTekstove", (e) => console.log(e.detail));
}

function postaviPrikaz() {
  const prikaz = document.querySelector(".prikaz");

  document.addEventListener("posaljiTekstove", (e) => {
    const elementi = e.detail.map((text, index) => `
<li>${index + 1}: ${text}</li>
`);
    prikaz.innerHTML = elementi.join("");
  });
}

dodajTodoItem();
izbrisiTodoItem();
posaljiSveTekstove();
ispisiUKonzoli();
postaviPrikaz();