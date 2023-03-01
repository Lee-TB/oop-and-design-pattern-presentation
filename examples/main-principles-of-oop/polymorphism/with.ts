abstract class Shape1 {
    abstract paint(): void;
}
class Rectangle1 extends Shape1 {
    paint(): void {
        console.log('paint rectangle');
    }
}
class Circle1 extends Shape1 {
    paint(): void {
        console.log('paint circle');
    }
}
const shapelist1: Shape1[] = [];
shapelist1.push(new Rectangle1());
shapelist1.push(new Circle1());
shapelist1.forEach((shape) => {
    shape.paint();
});
