class Dog {
    constructor(
        private name: string,
        private weight: number = 0,
        private hungry: number = 0
    ) {}

    // In the real world, hunger can be reduced by eating
    public eat(): void {
        this.hungry--; // reduce hungry
    }

    public setWeight(weight: number): void {
        // Check the value before assigning it
        if (weight < 0) {
            throw new Error(
                'Weight cannot negative'
            );
        }
        this.weight = weight;
    }
}

const dog = new Dog('poodle'); // Dog { name: 'poodle', weight: 0, hungry: 0 }
dog.setWeight(19);
dog.eat();
console.log(dog); // Dog { name: 'poodle', weight: 19, hungry: -1 }
