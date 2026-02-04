/** @jest-environment jsdom */

/* 
 * CS 341: Homework 3
 * Purpose: First unit test file. This is just a basic script that adds two numbers
 * File type: .test.js file
 * Author: Sean Yang
*/
const sum = require('../public/javascripts/sum.js');
test('adds 1 + 2 to equal 3', () => {
expect(sum(1, 2)).toBe(3);
});