const lengthOfLastWord = (s) => {
    const words = s.trim().split(' ');
    return words[words.length - 1].length;
  };
  console.log(lengthOfLastWord("Hello World")); 
  console.log(lengthOfLastWord("   fly me   to   the moon  ")); 
  console.log(lengthOfLastWord("luffy is still joyboy")); 
  