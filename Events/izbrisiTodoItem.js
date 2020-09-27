function izbrisiTodoItem() {
  const eraseButton = document.querySelector(".erase");
  eraseButton.addEventListener("click", () => {

    const makniZadnjiItem = new CustomEvent("makniZadnjiItem");

    document.dispatchEvent(makniZadnjiItem);
  });
}

module.exports = izbrisiTodoItem;