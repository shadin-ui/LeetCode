function firstPalindrome(words) {
    for (let word of words) {
        if (word === word.split('').reverse().join('')) {
            return word;
        }
    }
    return "";
}

const words1 = ["abc", "car", "ada", "racecar", "cool"];
console.log(firstPalindrome(words1));  

const words2 = ["notapalindrome", "racecar"];
console.log(firstPalindrome(words2));

const words3 = ["def", "ghi"];
console.log(firstPalindrome(words3));
