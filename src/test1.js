const array =  [ 'a', 10, 'b', 'hola', 122, 15];

const getElementsFromArray = (array) => {
    const arrayOfNumber = [];
    const arrayOfString = [];
    let maxNumber = 0;
    array.forEach(element => {
        if (typeof element === 'number'){
            arrayOfNumber.push(element);
            if (element > maxNumber){
                maxNumber = element
            }
        };
        if (typeof element === 'string'){
            arrayOfString.push(element);
        };
    });
    return { 
        arrayOfNumber,
        arrayOfString,
        maxNumber,
    };
}
console.log(getElementsFromArray(array));