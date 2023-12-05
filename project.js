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
    const lines = prompt('Enter number of lines you would like to bet (1-3): ');
    const numberOfLines = parseInt(lines);

    // Check if value is an integer
    if(isNaN(numberOfLines) || numberOfLines < 1 || numberOfLines > 3){
        console.log('Invalid number of lines, please try again');
        getNumberOfLines();
    }
    return numberOfLines;
};

// Function:    Prompts the user to enter the amount they would like to bet per line
// Returns:     Amount to bet per line
const getBet = (balance, lines) => {
    // Read in number of lines from user and convert to integer
    const bet = prompt('Enter the total bet amount per line: ');
    const numberBet = parseFloat(bet);

    // Check if value is an integer
    if(isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)){
        console.log('Invalid bet amount, please try again');
        getBet(balance, lines);
    }

    
    return numberBet;    
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const betAmount = getBet(balance, numberOfLines);