# JavaScript Calculator

A sleek, responsive JavaScript calculator built with **React** and **TypeScript** using **Vite** as the build tool. This calculator app is designed to emulate a real calculator, performing basic arithmetic operations with support for decimal values and chained calculations. It includes a clean, modern UI inspired by traditional calculator designs.

## Demo

[Link to Live Demo](https://bakdavid.github.io/react-calculator)

## Project Overview

This project is a **JavaScript Calculator** that fulfills all user stories and passes all tests as specified by [FreeCodeCamp's JavaScript Calculator project](https://javascript-calculator.freecodecamp.rocks/). Users can perform basic arithmetic operations, handle multiple decimal places, and execute continuous operations in one sequence.

## Features

-   **Basic Arithmetic**: Addition, Subtraction, Multiplication, and Division
-   **Decimal Support**: Handles decimal inputs and outputs with precision
-   **Chained Calculations**: Ability to input a sequence of operations without resetting
-   **Clear Functionality**: Reset the calculator back to its initial state with a single button
-   **Responsive Design**: Suitable for both desktop and mobile use

## User Stories

This calculator was built to meet the following user stories:

1. Contains a clickable element with `id="equals"` for the `=` (equal sign).
2. Has clickable number buttons with IDs `zero` through `nine`.
3. Contains buttons for primary mathematical operations: `+`, `-`, `*`, and `/`, with corresponding IDs `add`, `subtract`, `multiply`, and `divide`.
4. Has a decimal point button with `id="decimal"`.
5. Contains a clear button with `id="clear"` that resets the calculator.
6. Displays values in an element with `id="display"`.
7. The clear button resets the calculator to its initial state, showing `0` in the display.
8. User input is displayed in the display area.
9. Supports chaining multiple operations together.
10. Prevents a number from starting with multiple zeros.
11. Ensures only one decimal point per number.
12. Allows calculations with decimal-containing numbers.
13. If multiple operators are entered consecutively, the last operator is used (excluding `-` for negative numbers).
14. After pressing `=`, new calculations can be performed based on the result.
15. Rounds results to a reasonable precision for calculations.

## Technologies Used

-   **React** with **TypeScript** - for building a modular, maintainable UI.
-   **Vite** - a fast build tool for modern front-end development.
-   **CSS Modules** - for scoped and organized styling.
-   **FreeCodeCamp Test Suite** - for verifying that all project requirements are met.

## Project Structure

```
calculator-app/
├── src/ │
| ├── components/
| │ ├── Calculator.tsx # Main calculator component
| │ ├── Display.tsx # Display component for showing output
| │ ├── Button.tsx # Button component for calculator keys
| │ └── Calculator.css # CSS styling for calculator layout
| ├── App.tsx # Main app component
| ├── main.tsx # App entry point
| ├── index.css # App global css
| └── README.md
```

## Installation and Setup

To run the project locally:

1. **Clone the repository**:

```
git clone https://github.com/bakdavid/react-calculator.git
```

2. **Navigate into the project folder**:

```
cd javascript-calculator
```

3. **Install dependencies**:

```
npm install
```

4. **Start the development server**:

```
npm run dev
```

5. Open your browser and go to `http://localhost:5173` to see the calculator in action.

## Usage

-   AC: Clears the display and resets the calculator.
-   Operators (+, -, \*, /): Performs respective arithmetic operations.
-   Equal (=): Calculates the result of the entered expression.
-   Decimal (.): Allows entering decimal values.

### Layout Structure

-   The layout follows a 5-row grid structure to emulate a physical calculator:
    -   Row 1: `AC`, Divide `/`, Multiply `x`
    -   Row 2: `7`, `8`, `9`, Subtract `-`
    -   Row 3: `4`, `5`, `6`, Add `+`
    -   Row 4: `1`, `2`, `3`, Equal `=` (spanning two rows)
    -   Row 5: 0 (spanning two columns), `.` (decimal)

## CSS Customization

For styling, we've used CSS to give a lively, modern look with visual feedback. The `Button` component includes dynamic classes for adjusting button width (for `0` and `AC`) and height (for `=`).

### Colors

Feel free to customize colors and layout by modifying the `Calculator.css` file:

```
.calculator {
    /* Adjust calculator body styles */
}

.button {
    /* Adjust individual button styles */
}
```

## Future Improvements

-   Keyboard Support: Allow keyboard input for calculator operations.
-   Memory Functionality: Add memory operations (M+, M-, MR, MC).
-   Dark Mode: Provide a toggle for dark/light themes.

## License

This project is licensed under the MIT License.
