
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
const newCar = {
color: "blue",
brand: "Toyota",
year: "2022",
// model: {
//     model2 : "Prius",
//     model3 : "Yaris"
// },
// myCar: function() {
//     return this.brand + " " + this.model.model2;
// }
}


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
const myArray =Object.values(newCar);

document.getElementById("one").innerHTML = myArray
//output: blue Toyota 2022