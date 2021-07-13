what is Type inference?
  typescript on its own tries to figure out what type of value a variable refers to


if declaration & initialization are on the same line, Typescript will figure out the type of variale for us.


e.g    const color = "red"    // here both declaration & initialization are on the same line, so TS will figure out the type of color.


e.g    let name;
       name = "Laiq";        // here type inference wont work as declaration & initialization are not on the same line



when to use 

1. type annotations -  when we declare a variable on one line & initialize it on other line
                       when we want a variable of type that cant be inferred
                       when function returns any type & we need to clarify the value

e.g  // when to use annotations

// 1. Functions that returns 'any' type

const json = '{"x": 10, "y": 20}';

const coordinates = JSON.parse(json);      // here if we hover over coordinates it shows any type
coordinates.something;   // here TS wont give any error becuse type of coordinates is 'any'



//to fix that issue
const coordinates: {x: number; y: number} = JSON.parse(json);   // now here we can see that type of coordinates is that object
coordinates.something;    // here TS will now throw error saying "something does not exist on type {x: number; y: number}"




2. type inference  - always
