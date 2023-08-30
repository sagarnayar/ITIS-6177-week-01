function printLargestNumbers(numbers, count) {
    if (numbers.length === 0 || count <= 0) {
        console.log("Invalid input.");
        return;
    }

    numbers.sort((a, b) => b - a); // Sort the numbers in descending order
    const largestNumbers = numbers.slice(0, count);

    console.log(`The ${count} largest numbers are: ${largestNumbers.join(', ')}`);
}

const numberList = [45, 67, 23, 89, 12, 56, 98, 34];
const numberOfLargest = 3;

printLargestNumbers(numberList, numberOfLargest);