function reverseString(s) {
    let n = s.length;
    for (let i = 0; i < n / 2; i++) {
      let temp = s[i];
      s[i] = s[n - 1 - i];
      s[n - 1 - i] = temp;
    }
  }
  
  let s1 = ["h", "e", "l", "l", "o"];
  reverseString(s1);
  console.log(s1);
  
  let s2 = ["H", "a", "n", "n", "a", "h"];
  reverseString(s2);
  console.log(s2);
  