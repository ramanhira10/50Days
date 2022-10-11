/**
 * What is the output ?
 */

const myLifeSummedUp = ['tea', 'work', 'Juices', 'documents'];

for (let item in myLifeSummedUp) {
    console.log(item);
}

for (let item of myLifeSummedUp) {
    console.log(item);
}