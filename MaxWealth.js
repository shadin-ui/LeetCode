function maximumWealth(accounts) {
    let maxWealth = 0;
    for (let customer of accounts) {
        let currentWealth = customer.reduce((sum, bank) => sum + bank, 0);
        if (currentWealth > maxWealth) {
            maxWealth = currentWealth;
        }
    }
    return maxWealth;
}

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));
console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]));
