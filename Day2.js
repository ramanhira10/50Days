/**
 * Write a program to reverse a string (with/without using built in methods)
 */

const reverseString = str => {

    if (str.length > 1) {
        //return str.split('').reverse().join('');

        const splittedStr = str.split('');

        const reverStrArr = [];

        for(let i=splittedStr.length;i>=0;i--) {
            reverStrArr.push(splittedStr[i]);
        }

        return reverStrArr.join('');

    }

    return str;
};

console.log(reverseString('abc'));