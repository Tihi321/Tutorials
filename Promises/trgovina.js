class OnlineNarudzba {
  constructor() {
    this._namirnice = [];
    console.log('Otvaranje narudžbe u online trgovini');
  }

  dodajNamirnice(sastojci) {
  	console.log('Dodavanje namirnica u košaru', sastojci);
    this._namirnice = [...this._namirnice, ...sastojci];
  }

  async plati(novci) {
    console.log('Plaćeno hvala sa', novci, 'kn');
    return new Promise((resolve, reject) => {
      console.log('Dostava je na putu');
    
      try {
  
        setTimeout(() => {
          console.log('Dostava stigla');
          resolve(this._namirnice);
        }, 8000);
  
      } catch(err) {
  
        reject(`Žao nam je dostava je zapela u prometu zbog: ${err}`);
  
      }
      return;
    });
  }
}

module.exports = OnlineNarudzba;
