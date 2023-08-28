/*
undefined and null
*/

let FirstName
console.log("Before assign a value:-"+(typeof FirstName));
FirstName="roshan";
console.log("After assign value:-"+(typeof FirstName));

//
let FirstName1=null;
console.log(FirstName1);

let mynumber=12345858858;
console.log(Number.MAX_SAFE_INTEGER);
console.log(mynumber);

let decimal1=10.5;
console.log(decimal1);
console.log(typeof decimal1);

// BigInt 

let n1=123n;
let n2=BigInt(10);
console.log(n1+n2);

/*

Using const can not possible

const f_name; 
console.log(typeof f_name);
*/
