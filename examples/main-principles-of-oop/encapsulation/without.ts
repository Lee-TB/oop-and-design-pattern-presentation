class Dog2 {
  constructor(public hungry: number = 0, public weight: number = 0) {}

  // In the real world, hunger can be reduced by eating
  public eat(): void {
    this.hungry--; // reduce hunger
  }

  public setWeight(weight: number): void {
    // Check the value before assigning it
    if (weight < 0) {
      throw new Error('Weight cannot negative');
    }
    this.weight = weight;
  }
}

const dog2 = new Dog2(); // Dog2 { hungry: 0, weight: 0 }
dog2.hungry--; // reduce hungry
dog2.weight = -20; // it's not safe
console.log(dog2); // Now Dog2 { hungry: -1, weight: -20 }
