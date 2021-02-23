[![Coverage Status](https://coveralls.io/repos/github/gs494/is219calculator/badge.svg?branch=master)](https://coveralls.io/github/gs494/is219calculator?branch=master) 
[![Build Status](https://travis-ci.org/gs494/is219calculator.svg?branch=master)](https://travis-ci.org/gs494/is219calculator)   
Step 1: Clone repo  
Step 2: Run npm install     


# Explain OOP principles using Javascript    

*__Encapsulation:__ The practice of keeping objects in a private state inside a class. 
This prevents other objects from having direct access.
 Instead, these other objects can only call on public functions or "methods". In the cat example, it is possible for 
 another object to access the three static methods but another object can't access the private meow. 
 ```js
class cat{
    private meow();
    static sleep();
    static play();
    static feed();
}
```
*__Abstraction:__ A natural extension of encapsulation. 
A practice of only exposing a high level mechanism for using an object. 
This means hiding any operations or implementation details that are not relevant to other objects. 
The example below is of a test for a calculator. 
We don't need to know how the calculator finds the square of the values. 
We just enter the values and test to see if the calculator was right.
```js
test('Calculator square of a number', () => {
    let result = Calculator.Square(4, null);
    expect(result).toBe(16);
});
```
*__Inheritance:__   A practice of creating parent and child classes. 
The child class extends the methods and parameters of the parent. 
Basically, the child class can do whatever the parent can and can have new functions as well. 
In the example below, the child class extends from the parent class. So the child can use the methods in parent.
```js
class parent{
    constructor(a,b);
    age(a,b);
}

class child extends parent{
    constructor(a,b);
    super(a,b);
    
}
```
*__Polymorphism:__ A practice of allowing collections or lists to be made up of a mix of parent and child classes. 
While they share methods, they also may need their own versions. 
By using polymorphism it is possible to use these different classes together and not worry about types. 
Each class implements its own version of the method. 

*__Single Responsibility Principle:__ The practice of writing every function, so 
it does exactly one thing and one thing only. 
Even if a function only does one thing doesn't mean that one function can't call
 on several other functions as lng as they are needed for that one thing.
```js
function Product (a,b) {
    return a * b;
}
module.exports = Product;
```
*__Open-Closed Principle:__ The practice of making modules that are open to extension but closed to modification. 
This means another coder shouldn't have to open your module to extend your code. 
There should be existing functions that allow extensions the existing parameters within your module.
```js
let menu = ['meat', 'fish'];
let entree = {
  makeDinner(food) {
    if (menu.indexOf(food) > -1) {
      console.log('Great success. You now have dinner.');
    } else {
      console.log('Epic fail. No dinner for you.');
    }
  },
  addfood(food) {
    menu.push(food);
  },
};
export default makeDinner;
```
*__Liskov Substitution:__ The practice of making parent and child classes that can be interchanged and work correctly without any errors.

*__Interface Segregation Principle:__ The practice of making only the bare minimum required for modules. All other options should be optional. 
If you don't need it you shouldn't have to have it.

*__Dependency Inversion Principle:__ The practice of handig control from the function to the caller of the function.

