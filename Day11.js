/**
 * What would be the output of the following
 */

const items = new Set();

items.add('ball');
items.add('bat').add('shoes').add('gloves');
console.log(items.has('bat'));

items.delete('gloves');

for(const x of items) {
    console.log(x);
}
