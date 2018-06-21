let Calculator = require('./calculator.js');

console.log("What calculation would you like to perform?");

process.stdin.on('data', (chunk) => {
    let calc = new Calculator();

    let userInput = chunk.toString().trim(); 
    let useArr = userInput.split(" ");

    let newArr = useArr.map(item => {
        if (!isNaN(+item)) {
            return +item;
        } else {
            return item;
        }
    });
    console.log('newArr: ', newArr);

    let i = 0;
    while (i < newArr.length) {
        while (typeof newArr[i] === "number") {
            console.log('i: ', i);
            console.log('newArr[i]: ', newArr[i]);
            calc.push(newArr[i]);
            console.log('stack: ', calc.value());
            i++;
        }
        let countBack = i - 1;
        while (typeof newArr[i] !== "number") {
            countBack--;
        }
        let numTop = newArr[countBack];
        let numNext = newArr[countBack - 1];
        calculate();
        i++;
    }

    console.log('value: ', calc.value());

    function calculate() {
        let operator = newArr[i];
        if (operator === '+') {
            console.log('let\'s add!');
            calc.plus();
            console.log('value: ', calc.value());
        } else if (operator === '-') {
            console.log('let\'s subtract!');
            calc.minus();
        } else if (operator === '/') {
            console.log('let\'s divide!');
            calc.divide();
        } else if (operator === '*') {
            console.log('let\'s multiply!');
            calc.times();
        }
    }

    console.log(calc.value());

    // calculate();

    // function calculate() {
    //     let item1 = useArr[useArr.length - 1];
    //     let item2 = +useArr[useArr.length - 2];
    //     let item3 = +useArr[useArr.length - 3];

    //     if (!isNaN(item2) && !isNaN(item3)) {
    //         calc.push(item3);
    //         calc.push(item2);
    //         if (item1 === '+') {
    //             calc.plus();
    //         } else if (item1 === '-') {
    //             calc.minus();
    //         } else if (item1 === '/') {
    //             calc.divide();
    //         } else if (item1 === '*') {
    //             calc.times();
    //         }
    //         console.log(calc.value());
    //         useArr.splice(-3, 3);
    //         console.log(useArr);
    //         if (useArr.length > 0) {
    //             calculate();
    //         }
    //     }
    // }
    
});


