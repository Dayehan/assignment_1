
const SIGNS = [
    'ADD',
    'MINUS',
    // 'MULTIPLY',
    // 'DIVIDE'
];
const getRandomSign = () => {
    const randomNumber = Math.floor(Math.random() * SIGNS.length);
    // yconsole.log("randomNumber" , randomNumber);
    return SIGNS[randomNumber];
};


export const performOperation = (number1, number2) => {
    const operator = getRandomSign();
    //  console.log(operator);
    switch (operator) {
        case 'ADD':
            return {result: number1 + number2, sign: "+"};
        case 'MINUS':
            return {result: number1 - number2, sign: "-"};
        case 'MULTIPLY':
            return {result: number1 * number2, sign: "*"};
        case 'DIVIDE':
            return {result: number1 / number2, sign: "/"};
    }
};

