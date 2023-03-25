

const sumFirst20Odd = (oddLimitNumber) => {
    let sum = 0;
    for (let i = 1; i < oddLimitNumber; i += 2) {
        // sum = sum + i;
        sum += i;
    }
};

const sumOddFirstV2 = (firstOddNumbers) => {
    let sum = 0;
    for (let i = 1; i < firstOddNumbers; i++) {
        let nextOddNumber = i * 2 + 1;
        sum += nextOddNumber;
    }
    return sum;
};

let resultado1 = sumFirst20Odd(20);

console.log("The result is:", resultado1);

let resultado2 = sumOddFirstV2(20);

console.log("The result is:", resultado2);
