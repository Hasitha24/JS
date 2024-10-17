
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
let text3 = "Hasitha is learning";
// document.getElementById("one").innerHTML = text3.repeat(3);
//output:HasithaHasithaHasitha (Create copies of a text)

//Replacing String Content
// document.getElementById("one").innerHTML = text3.replace("Hasitha","Newton");
//output:Newton is learning

// let text4 = "Hasitha is learning.Hasitha is alive.";
// document.getElementById("one").innerHTML = text4.replaceAll("Hasitha","Newton");
//output: Newton is learning.Newton is alive.

let text4 = "Hasitha is learning.Hasitha is alive.";
document.getElementById("one").innerHTML = text4.replace("Hasitha","Newton");
//Newton is learning.Hasitha is alive.

