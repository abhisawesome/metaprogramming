function myFunction(a, b) {
    if (a == b) {
        myFunction = () => 0
    }
    return a + b;
}

console.log(myFunction(1, 2)) // 3
console.log(myFunction(1, 3)) // 4
console.log(myFunction(1, 1)) // 2
console.log(myFunction(2, 3)) // 0
console.log(myFunction(2, 5)) // 0