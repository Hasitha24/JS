
//object
const box ={color:"blue", width:10, height:10};
document.getElementById("one").innerHTML = "Color of this box is " + box.color + " and " + "The width of this box is " + box.width;
// document.getElementById("one").innerHTML = "The width of this box is " + box.width;


const person = new Object();

person.name = "Hasitha";
person.lastname = "Kapugamage";
person.age = 38;
person.address = "Bandaragama";

document.getElementById("one").innerHTML = "The new member of the team is "+ person["name"] +". She is "+ person.age +" years old." ;
person.fullname = function() {return this.name + " "+ this.lastname};
document.getElementById("one").innerHTML = "The full name is "+ person.fullname();