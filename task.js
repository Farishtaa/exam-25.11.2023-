//task 1 
function doubleChar (str) {
    return str.split("").map(elem => elem + elem).join("")
}
console.log(doubleChar("Helo"))


// task 2 
function sevenBoom (arr) {
    if (arr.toString().includes("7")) {
        return "Boom"
    } else {
        return "Not!"
    }
}
console.log(sevenBoom([1,2,3,4,5,8]))


//task 3 
function removesNum(str) {
    return str.replace(/[0-9]/g, '');
}
console.log(removesNum("mubashir7"))


//task 4 
function reverse (str) {
    return str.split("").reverse().join("")
}
console.log(reverse("Hello"))


//task 5 
function removeDoubleWord (str) {
    return str.split("").filter((item, index, arr) => {
        return arr.indexOf(item) === index
    }).join("")
}
console.log(removeDoubleWord("WEE!"))


//task 6  closure
function createCounter() {
    let count = 0;
    
    return function increment() {
        count++;
        return count;
    }
}

const counter2 = createCounter();
console.log(counter2());


//task 7  closure
function sumOfDigit() {
    
    return function SumOfDigit(number) {
        if (number < 10) {
            return number;
        } else {
            return number % 10 + SumOfDigit(Math.floor(number / 10));
        }
    }
}
const SumOfDigit = sumOfDigit();
console.log(sumOfDigit(12345));


//task 8 recursion
function sumOfCubes(n) {
    if (n === 1) {
        return 1;
    } 
    
    return Math.pow(n, 3) + sumOfCubes(n - 1);
}
console.log(sumOfCubes(7))

//task 9 recursion
function factorial(n) {
    
    if ( n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
function secondFact (num) {
    if (num === 1) {
        return 1;
    } else {
        return factorial(num) * secondFact(num - 1);
    }
}
console.log(secondFact(4)); 

//task 10
function longestWord (srt) {
    const words = srt.split(' ');
    const longest = words.reduce((acc, curr) => {
        return curr.length > acc.length ? curr : acc;
    });
  return longest;

}
console.log(longestWord("Saloom my bestie"));