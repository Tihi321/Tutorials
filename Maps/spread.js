// Arrays

const sastojci = ['brašno', 'šećer', 'prašak za pecivo'];
const kupljeniSastojci = ['sol', 'papar'];

const noviSastojci = sastojci;

const recept = [...sastojci, ...kupljeniSastojci];

console.log(recept);


// Objekti

const djeloviKojeImam = {
  hardDisk: "Verbatim",
  ram: 4
};

const djeloviIzDucana = {
  monitor: "LG",
  tipkovnica: "Logitech",
  ram: 4
};

const ukupniDjelovi = {
  ...djeloviKojeImam,
  ...djeloviIzDucana,
  ram: djeloviKojeImam.ram + djeloviIzDucana.ram,
  mis: "Logitech"
};

console.log(ukupniDjelovi);

