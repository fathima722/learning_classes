/*
-----Throws error since Classes are not hoisted on the top auntomatically Hence classes must be declared before trying to access them----
const cx5 = new Car(4,"V6","grey"); // Create an instance of Car

console.log(cx5);
console.log(cx5.carStats());
*/

sayHi(); // Function call

//Class declaration
class Car {
    constructor(doors,engine,color){
        this.doors = doors;
        this.engine = engine;
        this.color=color;
    }
    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine, and a beautiful ${this.color} color`;
    }
    static totalDoors(car1,car2) { //static method
        const doors1 = car1.doors;
        const doors2 = car2.doors;
        return doors1+doors2;
    }
}

class SUV extends Car {
    constructor(doors, engine, color, brand, carStats,totalDoors) {
        super (doors, engine, color, carStats,totalDoors); // All these properties are being accessed from the extended class Car here using the super keyword
        this.brand = brand; //This property "brand" here is specific to our class SUV
        this.wheels = 4; // We are here passing a default value to a property specific to SUV class
        this.ac = true;
        this._gears = 0; // the underscore tells JS here that we are trying to protect this property
    }

    // Using getters and setters to access the _gears property. These setters and getters are not functions here (don't get confused with the syntax)
    get getGears(){
        return this._gears;
    }

    set setGears(noOfGears){
        this._gears = noOfGears;
    }

    myBrand(seatType){
        this.seatType = seatType;
        return console.log(`This SUV is a ${this.brand} and has ${this.seatType}`);
    }
}

const cx5 = new Car(4,"V6","grey"); // Create an instance of Car
const civic = new Car(3,"V4","blue"); //Create another instance of Car
const cx6 = new SUV(4,"V6","grey","Mazda"); 


console.log(cx5); // returns Car object
console.log(cx5.doors.toString()); //Because a class is a prototype in itself, we inherit all of its methods. Returns the value of number of doors as a string here.
console.log(cx5.carStats()); //Access methods from our class Car here

console.log(civic);
console.log(civic.carStats());
console.log(Car.totalDoors(cx5,civic)); //Access static methods with className and dot notation

console.log(cx6);
console.log(cx6.carStats()); // Accessing the method of Car from the instance of SUV
console.log(cx6.ac);
console.log(cx6.myBrand("Leather seats"));
console.log(Car.totalDoors(cx6,cx5));
console.log(cx6._gears); // Accessing the _gears property of SUV with our cx6 instance created
cx6.setGears = 5; //setting a value 5 to our _gears property
console.log(cx6._gears);

function sayHi() {
    return console.log("I can be accessed from anywhere since I am hoisted on the top automatically!!!!");
}