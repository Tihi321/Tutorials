class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    console.log("Contructor", Point.distance(x, y));
  }

  static pointDistance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Point.distance(dx, dy);
  }

  static distance(a, b) {
    return Math.hypot(a, b);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(p1.distance);
console.log(p2.distance);
console.log(Point.pointDistance(p1, p2));
