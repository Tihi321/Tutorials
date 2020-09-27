const OnlineNarudzba = require("./trgovina");

async function onlineAwaitTrgovina(potrebneNamirnice, izvrsitiKadDostavaStigne) {
  const trgovina = new OnlineNarudzba();
  trgovina.dodajNamirnice(potrebneNamirnice);

  const novci = await new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log('Transakcija je uspješno obavljena');
        resolve(50)
      }, 2000);
    } catch(err) {
        reject(`Žao nam je transakcija nije je uspjela zbog: ${err}`);
    }
  });

  const namirnice = await trgovina.plati(novci);

  izvrsitiKadDostavaStigne(namirnice);
}

function onlineTrgovina(potrebneNamirnice, izvrsitiKadDostavaStigne) {
  const trgovina = new OnlineNarudzba();
  trgovina.dodajNamirnice(potrebneNamirnice);

  trgovina.plati(50).then(izvrsitiKadDostavaStigne);

}

function isEqual(source, target) {
  return JSON.stringify(source.sort()) ===  JSON.stringify(target.sort());
}

module.exports = {
  onlineAwaitTrgovina,
  onlineTrgovina,
  isEqual
};
