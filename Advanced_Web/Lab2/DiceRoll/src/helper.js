const NUMBER_ARRAY = ["one", "two", "three", "four", "five", "six"];

const randomDice = () => {
    return Math.floor(Math.random() * NUMBER_ARRAY.length) +1;
}

export { randomDice, NUMBER_ARRAY };