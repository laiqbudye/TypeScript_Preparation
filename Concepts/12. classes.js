what is class?
  - class is just a blueprint to create an object with some fields & methods

e.g.
class Vehicle {
    drive(): void {
        console.log("driving...");
    }

    honk(): void {
        console.log("beep");
    }
}

const vehicle = new Vehicle();
vehicle.drive();    // driving...
vehicle.honk();     // beep



-------------------------------------------------------
  we can inherit class 
    
 class Car1 extends Vehicle {       // here we get acces to all properties & methods of Vehicle class
    // here we can override methods as well... if we dont want same behaviour as parent class
}

const car1 = new Car1();        
car1.drive();       //driving...
car1.honk();        //beep
  
  ----------------------------------------------------------
  
  Modifiers
    1. public  - this method can be called any where any time
    2. private - this method is accessible only within same class in which it is declared
    3. protected - this method can be called by other methods in this class or by other methods in child class.

------------------------------------------------------------

Fields in class
  
    class Vehical {
        color: string = 'red';
    }

    const vehicle = new Vehical();
    vehicle.color;    // red


