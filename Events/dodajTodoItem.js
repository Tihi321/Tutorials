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

module.exports = dodajTodoItem;