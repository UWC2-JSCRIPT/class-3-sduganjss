// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(name, topSpeed){
        this.name = name;
        this.topSpeed = topSpeed;
    }
    accelerate() {
        console.log(`${this.name} moving to ${this.topSpeed}`)
    }
}


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const ship1 = new SpaceShip('Battlestar', '200mph');
const ship2 = new SpaceShip('blueStar', '300mph')

ship1.accelerate();
ship2.accelerate();

