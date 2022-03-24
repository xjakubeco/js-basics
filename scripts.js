let age = 31;
let ww2 = 1945-1939;
let tesla = 999*76;
let secondsOfDay = 24*60*60;
let hungarians = 9750000/7900000000;
let bigger = 1402000000/10700000;
let participants = 654 % 7;

let charCount = "Hello".length;
console.log(charCount);

let name = "David";
let greeting = "Hello " + name;

console.log(greeting);

let charCount2 = "Hello world".length;
console.log(charCount2);

let trueOrFalse = 3 < 4 && (5 > 6 || 7 < 8);
console.log(trueOrFalse);

let myArray = [3, 5, 6, 2, 22];
console.log(myArray[0]);

let names = ["Martin", "Silvia", "Dano", "Katarina"];

console.log(names[2].length > 5);

names.push("Dag");

console.log(names);

names[0] = "Oliver";

console.log(names);

console.log(names.length>4);


let Object = {
    colors: ["red", "green", "yellow", "black"],
    hasManyColors:[],
}


if (Object.colors.length>3) {
    Object.hasManyColors = "True"
} else {
    Object.hasManyColors = "False"
}


console.log(Object.hasManyColors);