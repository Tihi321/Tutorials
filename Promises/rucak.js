const { isEqual } = require("./utility");

class Rucak {
  recept;
  namirnice;

  constructor() {
    this.recept = ['luk', 'grašak', 'mrkvu', 'peršin', 'meso', 'vegeta'];
    this.namirnice = ['luk', 'meso', 'mrkvu', 'peršin'];
    console.log('Početak priepreme za ručak');
  }
  provjeriNamirnice() {
    const provjera = isEqual(this.recept, this.namirnice);
    
    if (!provjera) {
     console.log('Za pripremu ručka su potrebne još ove namirnice: ', this.vratiListuPotrebnihNamirnica()); 
    } else {
      console.log('Imamo sve potrebne sastojke');
    }
    return provjera;
  }
  vratiListuPotrebnihNamirnica() {
    return this.recept.filter(sastojak => !this.namirnice.includes(sastojak));
  }
  
  dodajNamirnice(noveNamirnice) {
    console.log('Dodajemo nove namirnice', noveNamirnice);
    this.namirnice = [...this.namirnice, ...noveNamirnice];
  }
  
  napraviRucak() {
    console.log('Počinjemo pripremu ručka sa namirnicama', this.namirnice);
    setTimeout(() => console.log('Ručak je gotov, dobar tek'), 3000);
  }
}

module.exports = Rucak;
