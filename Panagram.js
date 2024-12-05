function checkIfPangram(sentence) {
    return new Set(sentence).size === 26;
}


const sentence1 = "thequickbrownfoxjumpsoverthelazydog";
console.log(checkIfPangram(sentence1)); 

const sentence2 = "leetcode";
console.log(checkIfPangram(sentence2)); 
