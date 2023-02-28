class Person2 {
  constructor(private name: string) {}
  getName() {
    return this.name;
  }
}
class Student2 {
  constructor(private name: string, private studentId: string) {}
  // Redundant code
  getName() {
    return this.name;
  }
}
const student2 = new Student2('Duc Tran', '1234');
console.log(student2.getName()); // Duc Tran
