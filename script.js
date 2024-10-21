
//object
// const box ={color:"blue", width:10, height:10};
// document.getElementById("one").innerHTML = "Color of this box is " + box.color + " and " + "The width of this box is " + box.width;
// document.getElementById("one").innerHTML = "The width of this box is " + box.width;


// const person = new Object();

// person.name = "Hasitha";
// person.lastname = "Kapugamage";
// person.age = 38;
// person.address = "Bandaragama";

// document.getElementById("one").innerHTML = "The new member of the team is "+ person["name"] +". She is "+ person.age +" years old." ;
// person.fullname = function() {return this.name + " "+ this.lastname};
// document.getElementById("one").innerHTML = "The full name is "+ person.fullname();

//Adding new property
// person.id =12;
// document.getElementById("one").innerHTML = "The ID of the member is "+ person.id;
//output: The ID of the member is 12

//Deleting a property
// delete person.address
//delete person ["address"];
// document.getElementById("one").innerHTML = "The address of the member is "+ person.address;
//output: The address of the member is undefined

//Nested Objects
//Declaration of nested objects
// const car = {
//     brand: "Toyota",
//     year: 2022,
//     models : {
//         model1 : "Corolla",
//         model2 : "Prius",
//         model3 : "Yaris"
//     }
// };

//Accessing nested objects
//document.getElementById("one").innerHTML = "Her favourite car model is " + car.models.model2;
//Output: Her favourite car model is Prius
// document.getElementById("one").innerHTML = "Her favourite car model is " + car.models["model1"];
//Her favourite car model is Corolla

//JS Object Methods
// const newCar = {
// color: "blue",
// brand: "Toyota",
// year: "2022",
// model: {
//     model2 : "Prius",
//     model3 : "Yaris"
// },
// myCar: function() {
//     return this.brand + " " + this.model.model2;
// }
// }


//document.getElementById("one").innerHTML = "My car is "+ newCar.myCar();

//Adding a method to an object
// newCar.spec = function(){
//     return this.myCar() + " " + this.year+ " "+ this.color;
// };

//document.getElementById("one").innerHTML = "My brand new car is " + newCar.spec();

//JS Display objects
//Displaying a JavaScript object will output [object Object]
//document.getElementById("one").innerHTML = newCar;
//output:[object Object]

//Displaying Object Properties
//document.getElementById("one").innerHTML = newCar.color;
//output:blue

//Displaying Properties in a Loop
// let displayText = " ";
// for (let i in newCar)
// {
//       displayText += newCar[i] + " ";
        
// }
// document.getElementById("one").innerHTML = displayText;
//output:blue Toyota 2022

//Can display by using an array
// const myArray =Object.values(newCar);

// document.getElementById("one").innerHTML = myArray
//output: blue Toyota 2022


//Using Object.entries() 
// let displayText = "";
// for (let [car,value] of Object.entries(newCar)){

//     displayText += car + ":" + value + "<br>";
// }

// document.getElementById("one").innerHTML = displayText;
//output: color:blue
//        brand:Toyota
//        year:2022

//Using JSON.stringify()
//JavaScript objects can be converted to a string with JSON method JSON.stringify().
// let myString = JSON.stringify(newCar);

// document.getElementById("one").innerHTML =myString;
//output: {"color":"blue","brand":"Toyota","year":"2022"}

//<---------Object Constructor Functions----------->
// Object constructor functions in JavaScript are used to create multiple objects with the same structure (properties and methods). 
//You can think of them like templates or blueprints for creating similar objects, where each object will have its own values for properties
// but share the same structure and behavior.

//Let's say the car manufacturing plant is using this blurprint to make all the cars.The cars may have different features, but they follow
//the same blueprint as mentioned follows
// function Car(make,model,year,color){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color =color;
// }


//The above mentioned blurprint can be used to create many car types
// const carModel1 = new Car("Toyota","Corolla",2020,"Red",true);
// const carModel2 = new Car("Ford","Mustang",2021,"Blue",false);
// const carModel3 = new Car("Tesla","Model S",2022,"White",true);

//document.getElementById("one").innerHTML = carModel1.year;
//output: 2020


// const carModel1 = new Car("Toyota","Corolla",2020,"Red");
// const carModel2 = new Car("Ford","Mustang",2021,"Blue");
// const carModel3 = new Car("Tesla","Model S",2022,"White");

//Adding a Property to an Object
// carModel2.country = "Japan";
// document.getElementById("one").innerHTML = carModel2.country;
//output:Japan

//Adding a Property to a Constructor
//We can NOT add a new property to an object constructor

/* Prototypes are useful when you want to add properties
 or methods to all instances of an object without having to define them inside the constructor itself. This is memory-efficient
 because all instances share the same property or method via the prototype rather than each object having its own copy.

Here, the AutonomousMode property is shared across all car objects, so all 3 models would have the AutonomousMode set to "YES".
*/
// Car.prototype.AutonomousMode = "YES";
// document.getElementById("one").innerHTML = carModel3.AutonomousMode;

//<-----------JS Events------------------>
// In index.html page we add  <button onclick ="document.getElementById('one').innerHTML= Date()">What is the time?  </button>
//output:Mon Oct 14 2024 23:27:36 GMT+0530 (India Standard Time)


//using JS function
// function displayDate(){
//     document.getElementById("one").innerHTML = Date();
// }

//JavaScript Strings
// let text = "Hasitha";
// document.getElementById("one").innerHTML = text;
//output: Hasitha

// let carName1 = "Prius";
// let carName2 = 'Kelisa';
// document.getElementById("one").innerHTML = carName1 + " and "+ carName2;
//output: Prius and Kelisa

//Quotes Inside Quotes
// let carName1 = "'Prius'";
// let carName2 = '"Kelisa"';
// document.getElementById("one").innerHTML = carName1 + " and "+ carName2;
//output:'Prius' and "Kelisa"

//Template Strings
// let sentence = `She's well known as "Hasi"`;
// document.getElementById("one").innerHTML = sentence;
//output: She's well known as "Hasi"

//String Length
// let sentence2 = "This is true";
// let Length = sentence2.length;
// document.getElementById("one").innerHTML = sentence2.length;
//output: 12 (including 2 spaces)

//Escape Characters
// let sentence3 = "Her name is \"Hasitha\", not \"Hasi\"";
// document.getElementById("one").innerHTML = sentence3;
//output:Her name is "Hasitha", not "Hasi"

//Template Strings
//Templates are strings enclosed in backticks (`This is a template string`).
//Templates allow multiline strings:
// let text = `The dog
// climed the hill
// and reached home`;
// document.getElementById("one").innerHTML = text;
// output:The dog climed the hill and reached home

//JavaScript Strings as Objects
//JS strings can be defined as objects with the keyword new as well:
// let name1 = "Hasiha";
// let name2 = new String("Kapugamage");

//document.getElementById("one").innerHTML = name1;
//output: Hasitha
// document.getElementById("one").innerHTML = name2;
//output: Kapugamage

//document.getElementById("one").innerHTML = (name1 == name2);
//output: false

//document.getElementById("one").innerHTML = (name1 === name2);
//output: false (reason: Comparing two JavaScript objects always returns false.)

//Extracting String Characters
// let char = name2.charAt(2);
// document.getElementById("one").innerHTML = char;
//output: 2 (counting started from 0)

//JavaScript String charCodeAt()
// let char = name2.charCodeAt(2);
// document.getElementById("one").innerHTML = char;
//output: 112 (method returns the code of the character at a specified index in a string)

//JavaScript String at()
//let letter = name2.at(4);
//document.getElementById("one").innerHTML = letter;
//output: g (index starting from 0)

//to get the 3rd letter of the name
//let letter =name2[2];
//document.getElementById("one").innerHTML = letter;
//output: p

//---------------------------------------
//at() is an ES2022 feature.
//Property Access [ ]
// let char = name2[1];
// document.getElementById("one").innerHTML = char;
//output: a

// name2[2] = "o";
//document.getElementById("one").innerHTML = name2;
//output: Kapugamage
//It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!)

//Extracting String Parts
//There are 3 methods for extracting a part of a string:

//slice(start, end)
// let slicePart = name2.slice(4,8);
// document.getElementById("one").innerHTML = slicePart;
//output:gama

// let slicePart = name2.slice(4);
// document.getElementById("one").innerHTML = slicePart;
//output:gamage (the method will slice out the rest of the string)

// let slicePart = name2.slice(-2);
// document.getElementById("one").innerHTML = slicePart;
//output:ge (If a parameter is negative, the position is counted from the end of the string)


// let slicePart = name2.slice(-5,-3);
// document.getElementById("one").innerHTML = slicePart;
//output:am (this slices out a portion of a string from position -5 to position -3)

//substring(start, end)
// let subPart = name2.substring(2,4);
// document.getElementById("one").innerHTML = subPart;
//output:pu (startting from 2n position to 4th)

// let subPart = name2.substring(4);
// document.getElementById("one").innerHTML = subPart;
//output: gamage (if omitted the second parameter, substring() will slice out the rest of the string)

// let subPart = name2.substring(-4);
// document.getElementById("one").innerHTML = subPart;
//output: Kapugamage
//The difference in slice() and substring() is that start and end values less than 0 are treated as 0 in substring()


//------------------------------------
//substr(start, length)
// let subStrPart = name2.substr(1,4);
// document.getElementById("one").innerHTML = subStrPart;
//output: apug (The difference between slice() and substring() is that in substr() the second parameter specifies the length of the extracted part)

//  let subStrPart = name2.substr(4);
//  document.getElementById("one").innerHTML = subStrPart;
//output:gamage ( If omitted the second parameter, substr() will slice out the rest of the string.)

// let subStrPart = name2.substr(-2);
// document.getElementById("one").innerHTML = subStrPart;
//output: ge (If the first parameter is negative, the position counts from the end of the string.)

// To Upper Case and Lower Case
// document.getElementById("one").innerHTML = name2.toUpperCase();
//output: KAPUGAMAGE

// let name3 = "HasiTha";
// document.getElementById("one").innerHTML = name3.toLowerCase();
//output:hasitha

//JavaScript String concat()
// let text = "        She is      ";
// document.getElementById("one").innerHTML = text.concat(" "+name1);
//output:She is Hasiha

//JavaScript String trim()
//The trim() method removes whitespace from both sides of a string
// let newText = text.trim();
// document.getElementById("one").innerHTML = newText.length ;
//output:6

// let newText = text.trimStart();
// document.getElementById("one").innerHTML = newText.length ;
//output:12
//The trimStart() method removes whitespace from start of a string

// document.getElementById("one").innerHTML = text.trimEnd();
// let newText = text.trimEnd();
// document.getElementById("one").innerHTML = newText.length ;
//output:14

//JavaScript String Padding
// let text = "2"
// text = text.padStart(3,"0");
// document.getElementById("one").innerHTML = text;
//output 002  (It pads a string with another string (multiple times) until it reaches a given length.)

// let text = "Code"
// text = text.padStart(3,"0");
// document.getElementById("one").innerHTML = text;
//output:Code

// let text = "4"
// text = text.padStart(3,"e");
// document.getElementById("one").innerHTML = text;
//output:ee4

// let number = 5;
// let text2 =number.toString();
// text2 = text2.padStart(4,"0");
// document.getElementById("one").innerHTML =text2;
//output: 0005

// let number = 5;
// let text2 =number.toString();
// text2 = text2.padEnd(4,"0");
// document.getElementById("one").innerHTML =text2;
//output: 5000

//String Repeat
//let text3 = "Hasitha is learning";
// document.getElementById("one").innerHTML = text3.repeat(3);
//output:HasithaHasithaHasitha (Create copies of a text)

//Replacing String Content
// document.getElementById("one").innerHTML = text3.replace("Hasitha","Newton");
//output:Newton is learning

// let text4 = "Hasitha is learning.Hasitha is alive.";
// document.getElementById("one").innerHTML = text4.replaceAll("Hasitha","Newton");
//output: Newton is learning.Newton is alive.

// let text4 = "Hasitha is learning.Hasitha is alive.";
// document.getElementById("one").innerHTML = text4.replace("Hasitha","Newton");
//Newton is learning.Hasitha is alive.

//Converting a String to an array
//text.split(",")    // Split on commas
//text.split(" ")    // Split on spaces
//text.split("|")    // Split on pipe

//JavaScript String split()
// let myString = "cat,dog,giraffe,hen";
// const myArray = myString.split(",");
// document.getElementById("one").innerHTML = myArray[2];
//output:giraffe

// let myString = "cat,dog,giraffe,hen";
// const myArray = myString.split(" ");
// document.getElementById("one").innerHTML = myArray[3];
//output: undefined

// let myString = "cat dog giraffe hen";
// const myArray = myString.split(" ");
// document.getElementById("one").innerHTML = myArray[3];
//output: hen

// let myString = "cat dog giraffe hen";
// const myArray = myString.split("|");
// document.getElementById("one").innerHTML = myArray[3];
//output: undefined

// let myString = "cat|dog|giraffe|hen";
// const myArray = myString.split("|");
// document.getElementById("one").innerHTML = myArray[3];
//output: hen

//JS String Search
//JavaScript String indexOf()
//The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found
// let textString ="Find where the name is";
// document.getElementById("one").innerHTML = textString.indexOf("where");
//output: 5

// let textString ="Find where the name is where";
// document.getElementById("one").innerHTML = textString.lastIndexOf("where");
//output:23
//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string

// let textString ="Find where the name is where";
// document.getElementById("one").innerHTML = textString.lastIndexOf("Hasitha");
//output: -1 (Both indexOf(), and lastIndexOf() return -1 if the text is not found)

// let textString ="Find where the name is where";
// document.getElementById("one").innerHTML = textString.indexOf("where",3);
//output:5

//let textString ="Find where the name is where";
// document.getElementById("one").innerHTML = textString.indexOf("where",8);
//output: 23 (Both methods accept a second parameter as the starting position for the search)
//The lastIndexOf() methods searches backwards (from the end to the beginning), 
//meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

//JavaScript String search()
// document.getElementById("one").innerHTML = textString.search("where");
//output: 7 (The search() method searches a string for a string (or a regular expression) and returns the position of the match)

// document.getElementById("one").innerHTML = textString.search(/where/);
//output:5

//The indexOf() and search() methods are NOT equal. These are the differences:
//The search() method cannot take a second start position argument.
//The indexOf() method cannot take powerful search values (regular expressions).

//JavaScript String match()
//The match() method returns an array containing the results of matching a string against a string (or a regular expression).
// const myArr = textString.match("ere");
// document.getElementById("one").innerHTML = myArr.length;
//output: 1

// const myArr = textString.match(/ere/);
// document.getElementById("one").innerHTML = myArr.length;
//output:1

// const myArr = textString.match(/ere/g);
// document.getElementById("one").innerHTML = myArr.length;
//output: 2

//let text4 = "Where means where you live";
// const myArr = text4.match(/ere/gi);
// document.getElementById("one").innerHTML = myArr.length;
//output:2
//If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.

//JavaScript String matchAll()
// document.getElementById("one").innerHTML = text4.matchAll("ere");
//output:[object RegExp String Iterator]
//This gives error because matchAll() returns an iterator, 
//and here I was trying to display that iterator directly in the HTML, which converts it to a string showing the type of object.

//solution:
// 1. Use a regular expression as the argument. You can create a regex from the string "ere" by writing /ere/g.
// 2. Convert the iterator into an array or extract the matches in a loop to display them properly.
//const matches = text4.matchAll(/ere/g);
// document.getElementById("one").innerHTML = Array.from(matches);
//output: ere,ere
//If you want to search case insensitive, the insensitive flag (i) must be set:

//JavaScript String includes()
// document.getElementById("one").innerHTML = text4.includes("ere");
//output: true
//The includes() method returns true if a string contains a specified value.

// document.getElementById("one").innerHTML = text4.includes("ere",18);
//false (Check if a string includes "ere". Start at position 18)

//JavaScript String startsWith()
// document.getElementById("one").innerHTML = text4.startsWith("Where");
//output:true (The startsWith() method returns true if a string begins with a specified value.)

// document.getElementById("one").innerHTML = text4.startsWith ("you");
//output: false

//A start position for the search can be specified:
// document.getElementById("one").innerHTML = text4.startsWith ("you",18);
//output: true

// document.getElementById("one").innerHTML = text4.startsWith ("you",6);
//output: false

//JavaScript String endsWith()
// document.getElementById("one").innerHTML = text4.endsWith ("you");
//output: false

//document.getElementById("one").innerHTML = text4.endsWith ("you",21);
//output: true

//Template Strings
//Template strings allow both single quotes and double quotes to be insterted
// let name = `My Father's name is "Cyril"`;
// document.getElementById("one").innerHTML = name;
//output: My Father's name is "Cyril"

//Variable Substitutions
// let firstName = "Hasitha";
// let lastName = "Kapugamage";
// document.getElementById("one").innerHTML = `Her name is ${firstName}  ${lastName}`;
//output:Her name is Hasitha Kapugamage

//----------------------------------------------

//JavaScript Arrays
// const vehicles = ["car","van", "bus","bicycle"];
//document.getElementById("one").innerHTML = vehicles[2];
//output: bus

// vehicles[2] = "lorry";
// document.getElementById("one").innerHTML = vehicles[2];
//output: lorry

//Converting an Array to a String
// document.getElementById("one").innerHTML = vehicles.toString();
//output:car,van,lorry,bicycle

//Access the Full Array
//document.getElementById("one").innerHTML = vehicles;
//output:car,van,lorry,bicycle

//Array Elements Can Be Objects.They can either be objects, functions or another array

//length property
//document.getElementById("one").innerHTML = vehicles.length;
//output:4

//accessing first array element
//document.getElementById("one").innerHTML = vehicles[0];
//output: car

//accessing last element of the array
//document.getElementById("one").innerHTML = vehicles[vehicles.length-1];
//output: bicycle

//Looping Array Elements

// for (i=0; i< vehicles.length ; i++)
// {
//     arrayElement = vehicles[i];
// }
// document.getElementById("one").innerHTML = arrayElement;
//gives an error as variable arrayElement is defined inside the for loop.When the loop finishes,
//the variable arrayElement is no longer accessible.Therefore gives an error

//Correct method
// let arrayElement = "";
// for (i=0; i< vehicles.length ; i++)
//     {
//         arrayElement += vehicles[i] + "<br>";
//     }
//     document.getElementById("one").innerHTML = arrayElement;
//output
// car
// van
// lorry
// bicycle

// let arrayElement = "";
// vehicles.forEach(myFunction);
// arrayElement += " ";

// function myFunction(value){
//     arrayElement += value + "<br>" ;
// }
// document.getElementById("one").innerHTML = arrayElement ;
//output
// car
// van
// lorry
// bicycle

//Adding array element
// vehicles.push("helicopter");
// document.getElementById("one").innerHTML = vehicles;
//output:car,van,lorry,bicycle,helicopter

// vehicles[3] = "rocket";
// document.getElementById("one").innerHTML = vehicles;
//car,van,lorry,rocket,helicopter(it has removed the existing element-bicycle of the array)

// vehicles[6] = "bike";
// document.getElementById("one").innerHTML = vehicles;
//output:car,van,lorry,rocket,helicopter,,bike

//Associative array- should be continued--------------------------------------------
//JavaScript does not support arrays with named indexes.Instead in JavaScript, arrays always use numbered indexes.  

// const Person= [];
// Person[0] = "Hasitha";
// Person[1] = "Gesha";
// Person[2] = "Obama";

// document.getElementById("one").innerHTML = Person.length;
//output:3

//Nested Arrays and Objects
// const myObj = {
//     name: "Hasitha";
//     age: 30;
//     cars :[
//         {name:"Ford", models: ["one","two","three"]},
//         {name: "BMW",models:["four","five","six"]},
//         {name: "Toyota", models:["seven","eight","nine"]}
//     ]
// }

//JavaScript Array join()
const flowers = ["rose","jasmine","shoe flower","petunia"];
//document.getElementById("one").innerHTML =flowers.join("-");
//output:rose-jasmine-shoe flower-petunia

//JavaScript Array pop()
//document.getElementById("one").innerHTML =flowers.pop();
//output: petunia

//JavaScript Array push()
// flowers.push("Anthurium");
//document.getElementById("one").innerHTML =flowers[4];
//output:Anthurium


//JavaScript Array shift().The shift() method removes the first array element and "shifts" all other elements to a lower index.
// flowers.shift();
// document.getElementById("one").innerHTML =flowers[0];
//output:jasmine

//JavaScript Array unshift().The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
// flowers.unshift("no flower");
// document.getElementById("one").innerHTML =flowers[0];
//output:no flower

//JavaScript Array delete()
// Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead.
delete flowers[0];
document.getElementById("one").innerHTML =flowers[1];
//output:jasmine



//JavaScript Math Object
//The JavaScript Math object allows you to perform mathematical tasks on numbers.
// document.getElementById("one").innerHTML = Math.PI;
//output: 3.141592653589793

// Unlike other objects, the Math object has no constructor.
// The Math object is static.
// All methods and properties can be used without creating a Math object first.

//Math Methods
//Number to Integer
//let newNumber =234.56;
// document.getElementById("one").innerHTML = Math.round(newNumber);
//output:235 (Returns x rounded to its nearest integer)

// document.getElementById("one").innerHTML = Math.floor(newNumber);
//output:234 (Returns x rounded down to its nearest integer)

// document.getElementById("one").innerHTML = Math.ceil(newNumber);
//output:235 (Returns x rounded up to its nearest integer)

//document.getElementById("one").innerHTML = Math.trunc(newNumber);
//output:234 (Returns the integer part of x)

//Math.sign()
//document.getElementById("one").innerHTML = Math.sign(newNumber);
//output:1 (returns if x is negative, null or positive)

//Math.pow()
// let newNumber2 = 6;
// let newNumber3 = 4;
//document.getElementById("one").innerHTML = Math.pow(newNumber2,newNumber3);
//output: 1296 (Math.pow(x, y) returns the value of x to the power of y)

//Math.sqrt()
//document.getElementById("one").innerHTML = Math.sqrt(newNumber2,newNumber3);
//output:2.449489742783178

//Math.abs()
//document.getElementById("one").innerHTML = Math.abs(newNumber2,newNumber3);
//output: 6

//Math.min() 
//document.getElementById("one").innerHTML = Math.min(5,9,123,-56,-3);
//output: -56

//Math.max()
//document.getElementById("one").innerHTML = Math.max(5,9,123,-56,-3);
//output: 123


//JavaScript Functions
// function myFunction(a,b){
//     return a+b;
// }

//let result = myFunction(4,5);
//document.getElementById("one").innerHTML = result;
//output:9

// document.getElementById("one").innerHTML = "The output result is "+ myFunction(3,5);
//output:The output result is 8

//Variables declared within a JavaScript function, become LOCAL to the function.
//Local variables can only be accessed from within the function.
//Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
//Local variables are created when a function starts, and deleted when the function is completed.

//defining a function using expression
// const x = function (x,y){return x/y};
// document.getElementById("one").innerHTML = x(5,8);
//output: 0.625

//The Function() Constructor
// const myFunction = new Function("t", "h","return t+h");
// let newAmount = myFunction(5,10);
// document.getElementById("one").innerHTML = newAmount;
//output:15

// const calcAge = new Function("year","return 2024-year");
// let age = calcAge(1986);
// document.getElementById("one").innerHTML = age;
//output:38

// A function defined as the property of an object, is called a method to the object.
// A function designed to create new objects, is called an object constructor.

//Arrow Functions
// const x = (x, y) => x * y;

// const sum = (a,b) => a+b;
// document.getElementById("one").innerHTML = sum(4,6);
//output: 10

//Age Calculator
// const age =(birthYear) => 2024-birthYear;
// document.getElementById("one").innerHTML = age(1994);
//output:30

//JS Discount Calculator
// const disPrice =(oriPrice,disPercent) =>(oriPrice-(oriPrice*(disPercent/100)));
// document.getElementById("one").innerHTML = disPrice(4530,10);
//output:4077

//--------------------Should complete this
// //JS Classes
// class Car {
//     constructor (name,year){
//         this.name = name;
//         this.year = year;
//     }
// }

// const car1 = new Car("Audi","2018");

