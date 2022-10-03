/**
 * What is the output and why ?
 */

function greeting () {
    throw "Hello World";
}

function sayHi () {
    try {
        const data = greeting ();
        console.log('It Worked', data);
    } catch (e) {
        console.log('Oh no an error: ' + e);
    }
}

sayHi();