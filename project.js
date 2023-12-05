// 1. Deposit some money
// 2. Determine number of lines to bet
// 3. Collect bet amount
// 4. Spin the slot machine
// 5. Determine winner
// 6. Pay out winnings
// 7. Play again
const prompt = require('prompt-sync')();

// Function:    Prompts the user to enter a deposit amount
// Returns:     Deposit amount from the user
const deposit = () => {
    // Read in deposit amount from user and convert to float
    const depositAmount = prompt('Enter a deposit amount: ');
    const numberDepositAmount = parseFloat(depositAmount);

    // Check if value is float
    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log('Invalid deposit amount, please try again');
        deposit();
    }
    return numberDepositAmount;
};

// Function:    Prompts the user to the number of lines they would like to bet
// Returns:     Number of lines from user to bet
const getNumberOfLines = () => {
    // Read in number of lines from user and convert to integer
    const lines = prompt('Enter number of lines you would like to bet: ');
    const numberOfLines = parseInt(lines);

    // Check if value is an integer
    if(isNaN(numberOfLines) || numberOfLines < 1 || numberOfLines > 3){
        console.log('Invalid number of lines, please choose a number between 1 and 3');
        getNumberOfLines();
    }
    return numberOfLines;
};

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();