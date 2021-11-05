Interfaces
  - it creates new custom type in TS just like number, string, boolean.
  
 
 why do we need interfaces?
   
   const oldCivic = {
      name: 'civic',
      year: 2000,
      broken: true
    }
    
    const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
        console.log(`${vehicle.name}
          ${vehicle.year}
          ${vehicle.broken}
         `);
    }


    printVehicle(oldCivic);


// here as we can see in printVehicle's definition, type annotations used is really big. if we have 10 properties in object then we need to mention all these 10 properties
// in that definition as well which is very tedius task & not feasible as well.

so to avoid this issue interfaces comes in picture.
we can solve the above problem using interfaces as below


interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}


const oldCivic = {
    name: 'civic',
    broken: true,
    year: 2000,
}

const printVehicle = (vehicle: Vehicle): void => {    // here we are saying vehicle to be type of interface Vehicle which will reduce our type annotation code
    console.log(`${vehicle.name}
        ${vehicle.year}
        ${vehicle.broken}
       `);
}


printVehicle(oldCivic);


-------------------------------------------------------------------------------------------------------------------------------------
  
  we can also add complex data types inside interrfaces like below
  
  
interface Vehicle {
    name: string;
    year: Date;        // year will be of Date type
    broken: boolean;
    summary(): string;     // summary is a function which returns string
} 

const oldCivic:Vehicle = {
    name: 'civic',
    year: new Date(), 
    broken: true,
    summary(): string {
      return this.name;
    }
}


--------------------------------------------------------------------------------------

IMP NOTE

interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}


const oldCivic:Vehicle = {
    name: 'civic',
    year: 2000,
    broken: true,
    insured: false          // here it will throw an erro (Type '{ name: string; year: number; broken: true; insured: boolean; }' is not assignable to type 'Vehicle'.)

}

const printVehicle = (vehicle: Vehicle): void => {
    console.log(`${vehicle.name}
        ${vehicle.year}
        ${vehicle.broken}
        ${vehicle.insured}      // but when we try to access that variable inside code then it will throw error like Property 'insured' does not exist on type 'Vehicle'
       `);
}


printVehicle(oldCivic);




