/**
 * Determines the winner of a Rock-Paper-Scissors game.
 *
 * @param player1 - The choice of player 1, represented as 'r' for rock, 'p' for paper, or 's' for scissors.
 * @param player2 - The choice of player 2, represented as 'r' for rock, 'p' for paper, or 's' for scissors.
 *
 * @returns {string} - A message indicating the result of the game:
 *                     - "Player 1 wins!" if player 1 wins,
 *                     - "Player 2 wins!" if player 2 wins,
 *                     - "It's a tie!" if both players choose the same option.
 *
 * @throws {Error} Will throw an error if the input choices are invalid.
 */
function determineWinner(player1: string, player2: string): string {
    const validChoices = ['r', 'p', 's'];

    // Validate the choices of both players
    if (!validChoices.includes(player1) || !validChoices.includes(player2)) {
        throw new Error("Invalid choice. Please use 'r' for rock, 'p' for paper, or 's' for scissors.");
    }

    // Determine the winner based on the choices
    if (player1 === player2) {
        return "It's a tie!";
    }

    if (
        (player1 === 'r' && player2 === 's') ||
        (player1 === 'p' && player2 === 'r') ||
        (player1 === 's' && player2 === 'p')
    ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

// Example usage of the determineWinner function
try {
    console.log(determineWinner('r', 's')); // Outputs: Player 1 wins!
    console.log(determineWinner('p', 'r')); // Outputs: Player 1 wins!
    console.log(determineWinner('s', 'p')); // Outputs: Player 1 wins!
    console.log(determineWinner('r', 'p')); // Outputs: Player 2 wins!
    console.log(determineWinner('s', 'r')); // Outputs: Player 2 wins!
    console.log(determineWinner('p', 's')); // Outputs: Player 2 wins!
    console.log(determineWinner('r', 'r')); // Outputs: It's a tie!
    console.log(determineWinner('p', 'p')); // Outputs: It's a tie!
    console.log(determineWinner('s', 's')); // Outputs: It's a tie!
    console.log(determineWinner('x', 's')); // Throws an error: Invalid choice.
} catch (error) {
    console.error(error.message);
}
