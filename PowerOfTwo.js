const isPowerOfTwo = (n) => {
    if (n <= 0) {
        return false;
    }
    
    let power = 1;

    while (power < n) {
        power *= 2;
    }

    return power === n;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
