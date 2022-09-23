/**
 * Write a program to achieve sum(2)(3)
 */

const curry = function(fn) {
    return function curried (...args) {

        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
};

const sum = (a, b) => a + b;

const curriedTotal = curry(sum);

console.log(curriedTotal(2, 3));
console.log(curriedTotal(2)(3));