class Stan {
  pospremanje;
  prostorije;
  index = 0;
  constructor() {
    this.prostorije = ['Dnevna soba', 'Spavaća soba', 'Kuhinja', 'Boravak', 'Smočnica'];
  }
  
  pocniPospremanje() {
    console.log('Počinjemo pospremanje');
  
    this.pospremanje = setInterval(() => {
        console.log('Pospremljena', this.prostorije[this.index]);
    this.index = this.index >= this.prostorije.length - 1 ? 0 : this.index + 1;
    }, 2500);
  }
  
  zaustaviPospremanje() {
    console.log('Zustavljamo pospremanje');
    clearInterval(this.pospremanje);
  }

}

module.exports = Stan;
