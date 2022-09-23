/**
 * What is the output of the followin gand why?
 */

bar();
(function abc () {
    console.log('something');
})();

function bar() {
    console.log('bar got called');
}