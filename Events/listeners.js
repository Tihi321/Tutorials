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

module.exports = {
  ispisiUKonzoli,
  postaviPrikaz
};