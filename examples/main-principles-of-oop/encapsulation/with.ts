class Dog1 {
    constructor(
        private hungry: number = 0,
        private weight: number = 0
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

const dog1 = new Dog1(); // Dog1 { hungry: 0, weight: 0 }
dog1.eat();
console.log(dog1); // Now Dog1 { hungry: -1, weight: 0 }
dog1.setWeight(-10); // throw an error
