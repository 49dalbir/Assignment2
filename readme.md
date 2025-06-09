# Node.js ES Module Example Project

This project demonstrates how to use **ES Modules** in Node.js by separating logic across two JavaScript files:

- `main.js`: The entry point that starts the application and calls functions.
- `utils.js`: A utility module that defines and exports multiple functions.

---

## 📁 Project Structure

node-esmodule-app/
├── main.js # Entry point file (calls functions)
├── utils.js # Utility functions file (exports functions)
└── package.json # Sets module type to use ES module syntax


---

## ⚙️ Setup Instructions

1. Open a terminal in your project directory.
2. Create or update `package.json` and include the line `"type": "module"` to enable ES Modules in `.js` files:

```json
{
  "type": "module"
}

    Run the program using the Node.js command:

node main.js

    ⚠️ Make sure you're using Node.js version 14 or later.

📌 Function Descriptions
printWelcome(firstName, lastName)

    Prints a welcome message using the given names.

    Example Output:

    Welcome FirstName LastName to G@I College

convertMinutesToHours(minutes)

    Converts minutes into hours.

    Usage:

    convertMinutesToHours(90) // returns 1.5

calculateSqrtSum(a, b)

    Adds two numbers and returns the square root of the sum.

    Usage:

    calculateSqrtSum(9, 16) // returns 5

generateRandomPassword(length)

    Generates a random password with the specified length.

    Usage:

    generateRandomPassword(10) // e.g., "xY8@1aT#4Q"

✅ Sample Output

When you run main.js, the output might look like this:

Welcome FirstName LastName to G@I College
90 minutes is 1.5 hours
Square root of 9 + 16 is 5
Generated random password: xY8@1aT#4Q

🛠 Requirements

    Node.js v14 or higher

    No additional libraries required

🎯 Learning Outcome

This project helps you:

    Use ES Module syntax (import/export) in Node.js

    Organize code by separating logic into modules

    Practice basic input/output, math, and string manipulation in JavaScript