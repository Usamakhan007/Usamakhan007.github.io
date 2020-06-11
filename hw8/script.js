var BikeMoudle = (function () {
    "use strict";

    var createBicyclePrototye = function () {
            return {
                speed: 0,
                applyBrake: function (x) {
                    this.speed -= x;
                },
                speedUp: function (x) {
                    this.speed += x;
                }
                // applyBrake: (x) => ( this.speed -= x ),
                // speedUp: (x) => ( this.speed += x )
            };
        },
        createMountainBikeProtoype = function (proto) {
            var obj = Object.create(proto);
            obj.gear = 1;
            obj.setGear = function (v) { this.gear = v; };
            return obj;
        },
        start = function () {
            var bicyclePrototye = createBicyclePrototye(),
                mountainBikeProtoype = createMountainBikeProtoype(bicyclePrototye);

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
        };

    return {
        start: start,
        createBicyclePrototye: createBicyclePrototye,
        createMountainBikeProtoype: createMountainBikeProtoype
    };

}());

BikeMoudle.start();
