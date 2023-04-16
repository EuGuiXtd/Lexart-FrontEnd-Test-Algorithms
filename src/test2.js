const numbers = [0, 50, 25];
console.log(numbers.reduce((result, number)=> {
    return result + number;
}))
const sum = (array) => {
    return array.reduce((result, number)=> {
        return result + number;
    }, 0)
};
const multiplication = (array) => {
    return array.reduce((result, number)=> {
        return result * number;
    }, 1)
};
const subtraction = (array) => {
    return array.reduce((result, number)=> {
        return result - number;
    }, 0)
};
const division = (a, b) => {
    if ( b === 0 ){
        return 'the division must not allow 0 dividend'
    }
    return a / b;
};
const calculator = {
    sum,
    multiplication,
    subtraction,
    division, 
};
console.log('sum:',calculator.sum(numbers));
console.log('multiplication:',calculator.multiplication(numbers));
console.log('subtraction:',calculator.subtraction(numbers));
console.log('subtraction:',calculator.division(10, 2));
console.log('subtraction:',calculator.division(10, 0));