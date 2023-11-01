// condition statement 

// 1. if else 
// 2. switch

// if else

// syntax 

// if (conditions){
//         statement 1
//     } else {

//      statement 2
//     }

// Q1. find user age is greater then 19 or Not.

// var userage =20;


// if (userage > 19) {
//     console.log( "your allowed for D.L")
// } else {
//     console.log( "your not allowed for D.L")  
// }


// Q2.  Find user age is greter than 19 and lesser than 90 or not . 

// var userage = 30;

// if(userage > 19 && userage < 90 ){
//       console.log("Your age is greter tnhan 19 and lesser than 90. You are allow.")

// } else {
//     console.log("Your age is might be lesser than 19 or more than 90.")
// }


// Q  3. Find user age is greter than 19 and lesser than 90  then "allow for dl" ,
//          if age is lesser than 19 then return "you are under age" ,
//         if age more than 90, then return "You are over age.",
//         if age is 19 then return " you are allow for LL." . 

// var userage = 18;

// if(userage > 19 && userage < 90){
//      console.log("your allow.")
// }else if(userage < 19){
//     console.log("you are under age")
// }
// else if (userage >= 90){
//     console.log("your are over age. ")
// } 
// else {
//     console.log("you are allow for LL.")

// }


// Switch
// switch ("value2") {
//     case "value1":
//         console.log("hji")
//         break;

//     case "value2":
//         console.log("hji")
//         break;

//     case "value3":
//         console.log("hji")
//         break;

//     default:
//         console.log("hji")
//         break;
// }


// var material = "copper";

// switch (material) {
//     case "steel":
//         console.log("Material is steel")
//         break;
//     case "copper":
//         console.log("Material is copper")
//         break;
//     case "plastic":
//         console.log("Material is plastic")
//         break;
//     default:
//         console.log("Material is not defined.")
//         break;
// }


// Datatype String, number, boolean , 
// undefined


// var myName 
// console.log(myName)
// console.log(typeof myName)


// array 


// syntax[]

var mydata = [ "akash", "sky",4567, "hello",true,[2,3,4,5] ]
console.log(mydata)
console.log(mydata.length)
console.log(mydata[0])
console.log(mydata[1])
console.log(mydata[2])
console.log(mydata[3])
console.log(mydata[4])
console.log(mydata[5])
console.log(mydata[5][0])



var students = ['jay', 'raj', 'abc'];

console.log(students)

students.push("xyz") // add the element at the end of array

console.log(students)


var number = [1, 2, 4, 5]
number.pop(); // remove last element
number.pop();
number.pop();
console.log(number)



