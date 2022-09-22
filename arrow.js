// function doubleIt(num){
//     return num *  2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }

                //single line arrow function
//single parameter
const doubleIt = num => num * 2;
const result = doubleIt(50);
console.log(result);

//more than one parameter
 const add = (num1 , num2) => num1 + num2;
 const result1 = add(50 , 19);
 console.log(result1);

//no parameter
 const give5 = () => 5;
 const result2 = give5();
 console.log(result2);


 //more line arrow function

 const doMath =(x , y)=> {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
 }
var result3  = doMath(7 ,5);
console.log(result3);


