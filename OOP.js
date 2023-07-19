class Vehicle {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
}
manufacturer(){
    return this.make;
}
modelType(){
    return this.model;
}
prodYear(){
    return this.year;
}
honk(){
    console.log('Beep');
}
toString(){
    console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`);
}
};
 
class Car extends Vehicle {
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
  
}
};

class motorcycle extends Vehicle {
    constructor(make,model,year){
        super(make,model,year)
        this.numWheels = 2;
    }


revEngine(){
    return 'VROOOM!!!'
}
};


class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(car){
        if(this.capacity === this.vehicles.length){
            throw Error("Sorry we're full!");
        }
        if(!(car instanceof Vehicle)){
            throw Error(`${car} is not a vehicle`)
        }
        this.vehicles.push(car);

        console.log('car has been added!')
    }
}


// toyota.model = 'corolla';
// toyota.make = 'toyota';
// toyota.year = "1999";

