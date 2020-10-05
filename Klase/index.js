class Rectangle {
  rectangleHeight;
  rectangleWidth;
  rectangleArea = 150;

  constructor(height, width = 20) {
    console.log("Klasa instancirana Rectangle");
    this.rectangleHeight = height;
    this.rectangleWidth = width;
  }

  get area() {
    console.log("height vrijednost uzeta", this.rectangleHeight);
    return this.rectangleArea;
  }

  set height(height) {
    console.log("height vrijednost zadana", height);
    this.rectangleHeight = height;
    this.rectangleArea = this.calcArea();
  }

  set width(width) {
    console.log("width vrijednost zadana", width);
    this.rectangleWidth = width;
    this.rectangleArea = this.calcArea();
  }

  calcArea() {
    return this.rectangleHeight * this.rectangleWidth;
  }
}

const square = new Rectangle(10);

console.log(square.rectangleArea);

console.log(square.rectangleHeight);

square.width = 30;

console.log(square.area);

square.rectangleHeight = 20;

console.log(square.area);