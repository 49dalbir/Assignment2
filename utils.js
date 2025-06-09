// utils.js

// 1. Print welcome message
export function printWelcome(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// 2. Convert minutes to hours
export function convertMinutesToHours(minutes) {
  return minutes / 60;
}

// 3. Calculate square root of sum of two numbers
export function calculateSqrtSum(a, b) {
  return Math.sqrt(a + b);
}

// 4. Advanced: Generate a random password of given length
export function generateRandomPassword(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}
