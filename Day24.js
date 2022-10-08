const animals = {};

const dog = {emoji: 'DOG'};
const cat = {emoji: 'CAT'};

animals[dog] = {...dog, name: 'Mara'};
animals[cat] = {...dog, name: 'Sara'};

console.log(animals[dog]);