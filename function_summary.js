console.log("===============| function syntax |===============")

function fanOff() {
    console.log("Click the switch to off the fan.")
}
fanOff()


function doSum() {
    console.log("Take note book and pen.")
    console.log("Do Sum.")
}
doSum()




// Animated video
console.log("=============| function parameter |=============")

function square(number) {
    console.log(number)
    const square_value = number ** 2;
    console.log("Square value is :", square_value)
}

square(4);
square(12)


function addNumber(num_1, num_2) {
    console.log(num_1, num_2)
    const sum = num_1 + num_2;
    console.log("Summation is :", sum)
}

addNumber(10, 20);
addNumber(55, 50)



function addAll(a, b, c, d, e) {
    console.log(a, b, c, d, e)      // 10 20 30 undefined undefined
    const total = a + b + c + d + e;
    console.log("Total :", total)   //Total : NaN
}

addAll(10, 20, 30);
addAll(5, 10, 15, 20, 25)
