
//1. How would you define a function that takes two numbers as parameters and returns their sum?
function sumOfTwoNumbers(a, b) {
    return (a + b);
}
var sumResult = sumOfTwoNumbers(6, 11) ;
console.log(sumResult);



//2. If you define a function that accepts a string as a parameter, how would you modify it to print the string in uppercase?
function stringUpperCase(str) {
    console.log(str.toUpperCase())
}
stringUpperCase("javascript")



//3. In JavaScript, what happens if you pass an undefined value as an argument to a function that expects a parameter?
function undefinedArugument(javascript) {
    console.log(javascript)
}
undefinedArugument()




//4. Suppose you have a function that takes an array as a parameter. How would you check inside the function if the array is empty?
function arrayParameter(arr) {
    console.log(arr)
}
arrayParameter([])



// or

function arrayParameter(arr) {
    if (arr.length === 0) {
        console.log("The array is empty.");
    } else {
        console.log("The array is not empty.");
    }
}



//5. write a function that takes two numbers as parameters and returns their difference.
function  differenceTwoNum(a,b) {
   return (a-b)
}
var diffResult=differenceTwoNum(40,50)
console.log("The difference between two numbers:"+diffResult)



//6. Define a function that accepts a name and age as parameters, and returns a string with a greeting like "Hello, [name]! You are [age] years old."
function someSentence(name,age) {
    return `Hello, ${name}! You are ${age} Years old`
}
var nameAge=someSentence("Tejaswini",23)
console.log(nameAge)






//7. Write a function that takes a number as a parameter and returns true if the number is a even number, otherwise false.
function evenOrNot(a) {
    return(a%2===0)
}
var checkNum=evenOrNot(7)
console.log(checkNum)


// or

function evenOrNot(a) {
    if (a % 2 === 0) {
        return true;  // [even] 
    } else {
        return false;  //[odd]
    }
}

var checkNum = evenOrNot(7);
console.log(checkNum);  









function table(a) {
    for (var i=1; i<=10; i++) {
      return `a*${i}=${a*i}`
    }
}
var fiveTable=table(5)
console.log(fiveTable)





function table(a) {
    for (var i=1; i<=10; i++) {
      return `${a}*${i}=${a*i}`
    }
}
console.log(table(5))







function table(a) {
    for (var i=1; i<=10; i++) {
      console.log(a*i)
    }
}
table(5)








function table(a) {
    let result = ''; 
    for (var i = 1; i <= 10; i++) {
        result += `${a} * ${i} = ${a * i}\n`; 
    }
    return result; 
}
console.log(table(5));













function table(a) {
    for(var i=0; i<10; i++) {
        result=`${a}*${i}=${a*i}`
        b=console.log(result)
        
    }
    return b
}
table(4)
// console.log(table(5))














function table(a) {
    for(var i=1;i<=10; i++) {
        console.log(`${a}*${i}=${a*i}`)
    }
}
console.log(table(9))



function show() {
    var str=`The wind is strong`
    return str.split(',')
}
console.log(show()[1])