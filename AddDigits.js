const addDigits = (num) => {
    if (num === 0) return 0;
    return num % 9 === 0 ? 9 : num % 9;
  };
  

  console.log(addDigits(38)); 
  console.log(addDigits(0));  
  