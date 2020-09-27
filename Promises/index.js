const Rucak = require("./rucak");
const Stan = require("./stan");
const { onlineAwaitTrgovina } = require("./utility");

function nedjeljniRucak() {
  const rucak = new Rucak();
  
  if (!rucak.provjeriNamirnice()) {
    const stan = new Stan();
    const potrebneNamirnice = rucak.vratiListuPotrebnihNamirnica();
    
    const pristiglaDostava = namirnice => {
      stan.zaustaviPospremanje();
      rucak.dodajNamirnice(namirnice);
      if (rucak.provjeriNamirnice()) {
        rucak.napraviRucak();
      }
    };
  
    onlineAwaitTrgovina(potrebneNamirnice, pristiglaDostava);
    
    stan.pocniPospremanje(); 
  } else {
    rucak.napraviRucak();
  }
  
}

nedjeljniRucak();
