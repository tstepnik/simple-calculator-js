const defaultResult = 0;
let currentResult = defaultResult;
// let logEntries = [];
let firstNumber = usrInput.value;
let calculation = 'x';

// Gets input from input field
function getUserNumberInput() {
    return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, firstPressedNumber, secondPressedNumber) {
    const calcDescription = `${firstPressedNumber} ${operator} ${secondPressedNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

// function writeToLog(
//     operationIdentifier,
//     prevResult,
//     operationNumber,
//     newResult
// ) {
//     const logEntry = {
//         operation: operationIdentifier,
//         prevResult: prevResult,
//         number: operationNumber,
//         result: newResult
//     };
//     logEntries.push(logEntry);
//     console.log(logEntries);
// }

function calculateResult() {
   let calculationType = calculation;
    let mathOperator = '';


    if (calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
    firstNumber === 0 ) {
        firstNumber = getUserNumberInput();
        createAndWriteOutput(mathOperator, firstNumber, '');
        return
    }

    const secondNumber = getUserNumberInput();


    if (calculationType === 'ADD') {
        currentResult = firstNumber + secondNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult = firstNumber - secondNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY'){
        currentResult = firstNumber * secondNumber;
        mathOperator = '*';
    } else if (calculationType ==='DIVIDE') {
        currentResult = firstNumber / secondNumber;
        mathOperator = '/';
    }


    createAndWriteOutput(mathOperator, firstNumber, secondNumber);
    // writeToLog(calculationType, firstNumber, secondNumber, currentResult);
}

function add() {
    calculation = 'ADD';
}

function subtract() {
    calculation = 'SUBTRACT';
}

function multiply() {
    calculation = 'MULTIPLY';
}

function divide() {
    calculation = 'DIVIDE';
}

// usrInput.querySelector("#input-number").onchange=calculateResult(calculation);

usrInput.addEventListener('click',calculateResult);

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
