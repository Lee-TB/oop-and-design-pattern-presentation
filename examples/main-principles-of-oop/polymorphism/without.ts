class Shape2 {}
class Rectangle2 extends Shape2 {
  paintRectangle(): void {
    console.log('paint rectangle');
  }
}
class Circle2 extends Shape2 {
  paintCircle(): void {
    console.log('paint circle');
  }
}
const shapelist2: Shape2[] = [];
shapelist2.push(new Rectangle2());
shapelist2.push(new Circle2());
shapelist2.forEach((shape) => {
  // We need if/else
  // to specify what object to be handled
  if (shape instanceof Rectangle2) {
    shape.paintRectangle();
  } else if (shape instanceof Circle2) {
    shape.paintCircle();
  }
});
