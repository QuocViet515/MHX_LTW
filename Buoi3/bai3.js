const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Nhập mảng numbers (các số cách nhau bởi dấu cách): ", function(input) {
    // Chuyển chuỗi thành mảng số nguyên
    let numbers = input.split(' ').map(Number);

    // 1. In ra các số chẵn
    let evenNumbers = numbers.filter(n => n % 2 === 0);
    console.log("Các số chẵn:", evenNumbers);

    // 2. Tìm số lớn nhất
    let max = Math.max(...numbers);
    console.log("Số lớn nhất:", max);

    // 3. Mảng mới chứa các số > 0
    let positiveNumbers = numbers.filter(n => n > 0);
    console.log("Các số lớn hơn 0:", positiveNumbers);

    rl.close();
});
