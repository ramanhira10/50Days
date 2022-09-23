/**
 * Write a function which returns a list of elements which contains at least one character as a digit.
 */


const numInStr = inputArr => {

    if (inputArr.length <= 0) {
        return [];
    }
    
    return inputArr.filter(item => item.search(/[0-9]/) !== -1);
};

console.log(numInStr(['1a', 'a', '2b', 'b']));

console.log(numInStr(['abc', 'abc10']));

console.log(numInStr(['abc', 'ab10c', 'a10c', 'bcd']));

console.log(numInStr(['this is a test', 'test1']));