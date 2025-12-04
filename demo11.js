#!/usr/bin/env node
'use strict';

// Simple beginner examples: variables, function, array, object, loop, async

console.log('Welcome to beginner.js — simple JavaScript examples\n');

// 1) Variables & template strings
const name = 'Friend';
console.log(`Hello, ${name}!\n`);

// 2) Function
function add(a, b) {
    return a + b;
}
console.log('2 + 3 =', add(2, 3), '\n');

// 3) Arrays and map
const numbers = [1, 2, 3, 4];
console.log('Numbers:', numbers);
const doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled, '\n');

// 4) Object
const person = { name: 'Alex', age: 25 };
console.log('Person:', person.name, 'age', person.age, '\n');

// 5) Loop
console.log('Looping through numbers:');
for (const n of numbers) {
    console.log('-', n);
}

// 6) Simple async (non-blocking)
console.log('\nWaiting 1 second...');
setTimeout(() => {
    console.log('Done waiting — this ran asynchronously.');
}, 1000);