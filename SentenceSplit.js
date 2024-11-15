const mostWordsFound = (sentences) => {
    let maxWords = 0;
  
    sentences.forEach(sentence => {
      const wordCount = sentence.split(" ").length;
      maxWords = Math.max(maxWords, wordCount);
    });
  
    return maxWords;
  };
  
  const sentences1 = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
  console.log(mostWordsFound(sentences1)); 
  
  const sentences2 = ["please wait", "continue to fight", "continue to win"];
  console.log(mostWordsFound(sentences2)); 
  