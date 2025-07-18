const readline = require('readline');

function Isprime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Nhập n: ", (input) => {
    const n = parseInt(input);
    if (isNaN(n)) {
        console.log("Vui lòng nhập một số hợp lệ.");
    } else {
        console.log(Isprime(n) ? "True" : "False");
    }
    rl.close();
});
