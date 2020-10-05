class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {    
    this.#height = height;
    this.#width = width;
  }

  get height() {
    return this.#height;
  }
}

const rect = new Rectangle(20, 40);

console.log(rect.#height);
