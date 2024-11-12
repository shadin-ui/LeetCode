function checkPerfectNumber(num) {
    if (num <= 1) return false;

    let sum = 0;
    
    for (let i = 1; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));
