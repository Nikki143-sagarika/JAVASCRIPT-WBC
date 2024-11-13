JAVASCRIPT :- 

- Javascript is used for building logics of a web page. 
- javascript is a high level programming language, used in both client side as well as server side. 
- javascript comes from echma script so we see the latest version of javascript in the form of echma script. 
- Now we used javascript version 6 i.e ES6 (echma script 6)
- In another way we called ES6 as the vanilla Javascript.
- Node JS is the run time environment of javascript. 

Variable :- 

- variable is a container to store some data.
- in javascript there are 3 types of variable are there...

1. var :-

- var is a type of variable which is used for changing the variable in later stage. 
- var is used in oldest browser so now a days we are don't use var most of the cases. 

2. let :- 

- let is a type of variable which is also used for changing the variable in later stage.
- Now these days, most of the cases we used let for changing the variable.
- let is a block scope code so we have been used let in most cases. 

3. const :- const means constant. 

Rules for creating variable name :- 

- variables names are case sensative "a" & "A" is different.
- Only letter, digits, underscore & special character is allowed. (do not keep white space over here).
- only letter, underscore or special character should be the 1st character only. 
- reserved words cannot be a variable name. 
ex. for, while, var , let, this, boolean etc... 

Datatype in Javascript :- 

- datatypes is an attributes associated with a peice of data that tells a computer system how to interprit its value. 
- in datatype we used "typeof" operator to know what type of data it is. 
- mainlly in javascript there are 2 type of datatypes are there. 

1. primitive Datatype :- 

- in javascript there are 7 types of primitive datatypes are there like..

1. Number - Numbera re the type of datatypes those it contains some numerical values
2. Boolean - in boolean datatype we got boolean value like true/false
3. Undefiend - data is not define
4. Null - in this datatype we got null for the value means nothing
5. bigInt - in bigint we will get the big integer value (-999999999 to +999999999) on the above.
6. String - string is a type of datatype that can hold some character like names or words etc.. 
7. Symbol - in symbol we got one symbol of more than one value.

2. Reference Datatype

- reference datatypes are the type of datatype which can hold multiple element in a single frame.
- reference datatypes are -> array, object, function

1. Array :- 

- Array is a coolection of similar type of datatype which can hold contigious memory location. 
- array indexing start from "0".

ex. let arr = ["hari", "sita", "ram"]
                 0        1       2

2. Object :- 

- object is a reference type of datatype where we can store more then one element is a single frame. 
- mainly object are working on (key:value) pair.

ex:- 

let hari = {
    "name" : "hari bandu sahoo",
    "phone no" : 56789032,
    "address" : "bhubaneswar",
    "carrier" : "good"
}

- in the above example left side element are the keys & right side elements are the values of that key.

variable.js 

const accountId = 1234 

// const - variable, accountId - varaible name, 1234 - variable value.
let accountEmail = "web.bocket@gmail.com"
var accountPassword = "12345"
accountCity = "bhubaneswar"
let accountState; // it will execute but give the ans -> undefined

console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.log(accountState)


# JAVASCRIPT-WBC
Array methods in javascript:-

1.push
2.pop
3.toString
4.concat
5.unShift
6.shift







FUNCTION:-

-It is a block of code that performed a specific task,can be invocked whenever we need.
-ex.(in-built function)
-console.log("hello World")->in that code log() is a function
-"abc".toUppercase()->in this case code toUppercase is afunctin
-there are two types of functions in javascript
1.normal function

//function creation
function functionName(){
    do some work
}
//function calling
functionName()




2.arrow function

-it is a compact way of writing a functin
-it uses map function to retrive the backend data,filter function for filterised our data..
const functionName=(parameter..){
    do some work
}

//functino calling
functionName()


MAP METHOD:-
-create a new array with the result of some operation.the value its callback returns are the usedto from a new array.Normally we create a new array by calling the function in every array element.
-map does not change the original array.
-it does not execute the function for empty array/element.
-syntax->arr.map(callbackFnx(value,index,array))

ex.
let newArr=arr.map((val)=>{
    return val*2
})
task-
for a given array of number ,print the square of each value using foreach loop

Filter Method:-
-create a new array of element that gives true for a codition/filter
-ex-all even number

let newArr=arr.filter((val)=>{
    return val%2===0;
})


