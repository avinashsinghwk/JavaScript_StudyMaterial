
// console.log("In this lecture we will be studying about Loops for Arrays and Map, Filter and Reduce");

// let num = [4, 5, 6343, 53, 32];

// For Loops for Arrays
// for(let i = 0; i < num.length; i++){
//     console.log(num[i]);
// }

// For Each Loop
// num.forEach((value, index, array) => {
//         console.log((value + 1), " : ", index, " : ", array);
// });

// Array From
// let name = "Avinash";
// let arrayFrom = Array.from(name);
// console.log(arrayFrom);
// It is used to make a array from a object or a string

// For of Loop
// for(let i of num){
//     console.log(i);
// }

// For in Loop
// for(let j in num){
//     console.log(num[j]);
// }
// For in loop gives keys and in Arrays the keys are index i.e 0, 1, 2, 3, 4....

// ----- Map Filter and Reduce (Lecture - 20 starts from here) -----


// map()

// let map = num.map((value, index, arr) => {
//         console.log(value, " : ", index, " : " + arr)
//         return arr
// });
// console.log(map)
// It is same as forEach() but the only difference is that it returns an array and it not important to necessorily use all the three parameters 

// filter()
// let arr = [21, 87, 9, 0, 4, 6, 11]
// let filter = arr.filter((a) => {
//         if(a % 2 == 0){
//                 return a
//         }
// })
// console.log(filter)

// reduce()
// let arr = [21, 87, 9, 0, 4, 6, 11]
// let fun = (a, b) =>{
//         return a + b
// }

// let reduce = arr.reduce(fun)
// console.log(reduce)