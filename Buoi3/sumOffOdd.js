const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function sumodd(n)
{
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}
rl.question("Nhập n: ", (input) => {
    const n = parseInt(input);
    if (isNaN(n)) {
        console.log("Vui lòng nhập một số hợp lệ.");
    } else {
        console.log("Tổng các số lẻ từ 1 đến " + n + " là: " + sumodd(n));
    }
    rl.close();
});