const prompt = require('prompt-sync')();
console.log(`Math Brain Training`);
do {
    console.log(`\n1. Max score\n2. Three outs\n0. Quit\n`);
    let opt = Math.floor(Number(prompt(`Select game mode: `)));
    if (isNaN(opt) || opt < 0 || opt > 2) continue;
    else if (opt === 0) break;
    else {
        do {
            console.log(`\n1. Easy\n2. Medium\n3. Hard\n0. Back\n`);
            var difficulty = Math.floor(Number(prompt(`Select difficulty: `)));
        } while (isNaN(difficulty) || difficulty < 0 || difficulty > 3)
        if (difficulty === 0) continue;
    }
    let score = 0;
    if (opt === 2) var lives = 3;
    else var lives = -1;
    for (let questionNum = 1; questionNum <= 20; questionNum++) {
        do {
            if (difficulty === 1) var operator = Math.floor(Math.random() * 2);
            else var operator = Math.floor(Math.random() * 5);
            if (operator < 2) var num1 = Math.floor(Math.random() * 10 ** difficulty), num2 = Math.floor(Math.random() * 10 ** difficulty);
            else var num1 = Math.floor(Math.random() * 10 ** (difficulty - 1)), num2 = Math.floor(Math.random() * 10);
        } while (num2 === 0 && operator >= 3);
        if (operator === 0) var symbol = `+`, correct = num1 + num2;
        else if (operator === 1) var symbol = `-`, correct = num1 - num2;
        else if (operator === 2) var symbol = `*`, correct = num1 * num2;
        else if (operator === 3) var symbol = `/`, correct = num1 / num2;
        else var symbol = `%`, correct = num1 % num2;
        let answer = Number(prompt(`Question ` + questionNum + `: ` + num1 + ` ` + symbol + ` ` + num2 + ` = `));
        if (answer === correct) {
            console.log(`Correct! +10 points. Score:`, score += 10);
            continue;
        }
        else if (isNaN(answer)) console.log(`Skipped.`)
        else {
            if ((score -= 5) < 0) score = 0;
            console.log(`Incorrect. -5 points. Score:`, score);
        }
        if (--lives === 0) break;
        else console.log(lives, `chance(s) remaining.`);
    }
    console.log(`\nTest finished. Final score:`, score);
} while (true);