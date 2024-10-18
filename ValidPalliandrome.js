const isPalindrome = (s) => {
    const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanedStr === cleanedStr.split("").reverse().join("");
  };
  
  console.log(isPalindrome("A man, a plan, a canal: Panama"));
  console.log(isPalindrome("race a car"));
  console.log(isPalindrome(" "));
  