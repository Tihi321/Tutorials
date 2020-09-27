function dohvatiVrijeme() {
  let vrijeme = "Nepoznato";
  
  setTimeout(() => {
      console.log("Dohvaćamo vrijeme");
      vrijeme = "Sunčano";
  }, 2000);
  
  console.log(vrijeme);
}

async function dohvatiVrijemeAsync() {
  let vrijeme = "Nepoznato";
  
  await new Promise((resolve, reject) => setTimeout(() => {
      console.log("Dohvaćamo vrijeme");
      vrijeme = "Sunčano";
      resolve();
  }, 2000));
  
  console.log(vrijeme);
}

dohvatiVrijemeAsync();
