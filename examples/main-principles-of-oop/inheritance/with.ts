class Person1 {
    constructor(private name: string) {}
    getName() {
        return this.name;
    }
}
class Student1 extends Person1 {
    constructor(
        name: string,
        private studentId: string
    ) {
        super(name);
    }
}
const student1 = new Student1('Duc Tran', '1234');
console.log(student1.getName()); // Duc Tran
