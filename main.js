// main.js

// Import functions
import {
  printWelcome,
  convertMinutesToHours,
  calculateSqrtSum,
  generateRandomPassword
} from './utils.js';

// Call all functions
printWelcome("Dalbir", "Singh");

const hours = convertMinutesToHours(90);
console.log(`90 minutes is ${hours} hours`);

const sqrtSum = calculateSqrtSum(9, 16);
console.log(`Square root of 9 + 16 is ${sqrtSum}`);

const password = generateRandomPassword(10);
console.log(`Generated random password: ${password}`);
