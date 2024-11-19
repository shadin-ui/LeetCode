const hasZero = (num) => num.toString().includes('0');

const getNoZeroIntegers = (n) => {
  for (let a = 1; a < n; a++) {
    let b = n - a;
    if (!hasZero(a) && !hasZero(b)) {
      return [a, b];
    }
  }
};

console.log(getNoZeroIntegers(2));  
console.log(getNoZeroIntegers(11));
