class Bicycle {

    applyBrake (x) {
        this.speed -= x;
    }

    speedUp (x) {
        this.speed += x;
    }

    constructor() {
        this.speed = 0;
    }
}

class MountainBike extends Bicycle {

    setGear(v) {
        this.gear = v;
    }

    constructor() {
        super();
        
        this.gear = 1;
    }
}

class App {
    // "use strict";

    constructor() {

        console.log('constructor');

        // let bicyclePrototye = this.createBicyclePrototye.call(this);
        let bicyclePrototye = new Bicycle();
        console.log('bicyclePrototye', bicyclePrototye);

        // let mountainBikeProtoype = this.createMountainBikeProtoype.call(this, bicyclePrototye);
        let mountainBikeProtoype = new MountainBike();

        console.log('mountainBikeProtoype', mountainBikeProtoype);

        console.log(bicyclePrototye.speed);
        console.log(mountainBikeProtoype.speed);

        bicyclePrototye.speedUp(5);
        console.log(bicyclePrototye.speed);
        console.log(mountainBikeProtoype.speed);
        console.log(mountainBikeProtoype.hasOwnProperty('speed'));

        mountainBikeProtoype.speedUp(5);
        console.log(bicyclePrototye.speed);
        console.log(mountainBikeProtoype.speed);
        console.log(mountainBikeProtoype.hasOwnProperty('speed'));
    }

}

let app = new App();