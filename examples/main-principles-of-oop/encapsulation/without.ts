let dogName: string = 'chihuahua';
let dogHungry: number = 0;
let dogWeight: number = 0;

function dogEat() {
    dogHungry = dogHungry - 1;
}
function dogSetWeight(weight: number) {
    dogWeight = weight;
}

dogEat();
dogSetWeight(11);
console.log('name', dogName); // name chihuahua
console.log('hungry', dogHungry); // hungry -1
console.log('weight', dogWeight); // weight 11
