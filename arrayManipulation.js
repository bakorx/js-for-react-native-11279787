function processArray(numbers) {
    return numbers.map(num => {
      if (num % 2 === 0) {
        return num * num; 
      } else {
        return num * 3; 
        
      }
    });
  }
  
 
  const takeArray = [8, 2, 7, 4, 6, 5, 3, 2, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
  const finaltArray = processArray(takeArray);
  console.log(finaltArray); 

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

const stringsArray = ["Bakor", "Universe", "GangHub", "Tracy"];
const formattedArray = formatArrayStrings(stringsArray, finaltArray);
console.log(formattedArray);
  