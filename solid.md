# OOP Design Patterns

## Singleton pattern 
The singleton pattern limits the number of instances of a particular object to just one.
This single instance is called the singleton.
Singletons are useful in situations where actions need to be coordinated from a single central place.

```
class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    this._data = data;
    Database.instance = this;
    Database.exists = true;
    return this;
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

// usage
const mongo = new Database('mongo');
console.log(mongo.getData()); // mongo

const mysql = new Database('mysql');
console.log(mysql.getData()); // mongo

```

## Adapter pattern 
A structural pattern where the interface of different classes can be translated into another. 
This lets classes work together that could not otherwise because of incompatible interfaces. 
This is useful when working between different versions like the example which shows an old calculator class and a new calculator class. 
This adapter class wraps the New Calculator to add the operation method to the public interface. 
```class OldCalculator {
     constructor() {
       this.operations = function(term1, term2, operation) {
         switch (operation) {
           case 'add':
             return term1 + term2;
           case 'sub':
             return term1 - term2;
           default:
             return NaN;
         }
       };
     }
   }
   
   // new interface
   class NewCalculator {
     constructor() {
       this.add = function(term1, term2) {
         return term1 + term2;
       };
       this.sub = function(term1, term2) {
         return term1 - term2;
       };
     }
   }
   
   // Adapter Class
   class CalcAdapter {
     constructor() {
       const newCalc = new NewCalculator();
   
       this.operations = function(term1, term2, operation) {
         switch (operation) {
           case 'add':
             // using the new implementation under the hood
             return newCalc.add(term1, term2);
           case 'sub':
             return newCalc.sub(term1, term2);
           default:
             return NaN;
         }
       };
     }
   }
   
   // usage
   const oldCalc = new OldCalculator();
   console.log(oldCalc.operations(10, 5, 'add')); // 15
   
   const newCalc = new NewCalculator();
   console.log(newCalc.add(10, 5)); // 15
   
   const adaptedCalc = new CalcAdapter();
```
## Chain of responsibility 
A behavioural design pattern that provides a chain of loosely coupled objects.
A good example of how it can be ued is with cumulative sum. 
It allows a single instruction to be chained together. 
Useful for acting or handling requests of the client. A common pattern, where almost any method call on a object returns a object so that method calls can be chained together.
```class CumulativeSum {
     constructor(intialValue = 0) {
       this.sum = intialValue;
     }
   
     add(value) {
       this.sum += value;
       return this;
     }
   }
   
   // usage
   const sum1 = new CumulativeSum();
   console.log(sum1.add(10).add(2).add(50).sum); // 62
   
   
   const sum2 = new CumulativeSum(10);
   console.log(sum2.add(10).add(20).add(5).sum); // 45
```


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

