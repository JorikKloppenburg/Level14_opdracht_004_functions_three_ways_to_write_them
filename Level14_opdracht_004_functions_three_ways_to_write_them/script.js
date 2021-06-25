

//Function declarations
function calculate1(number1, number2) {
    return ((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2));
}

const result1 = calculate1(10, 20);
console.log(result1);

//Function expressions
const calculate = function (number1, number2) {
    return ((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2));
};

const result = calculate(10, 20);
console.log(result);

//Arrow functions
const calculate2 = (number1, number2) => {
    return ((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2));
};

const result2 = calculate2(10, 20);
console.log(result2);