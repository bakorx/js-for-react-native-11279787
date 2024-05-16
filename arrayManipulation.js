function processArray(numbers) {
    return numbers.map(num => {
      if (num % 2 === 0) {
        return num * num; 
      } else {
        return num * 3; 
        
      }
    });
  }
  
 
  const inputArray = [8, 2, 7, 4, 6, 5, 3, 2, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
  const resultArray = processArray(inputArray);
  console.log(resultArray); 
  