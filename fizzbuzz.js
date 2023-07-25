//function fizzbizz with a parameter(n)
function fizzBuzz(n) {
    const answer = [];
//using conditional statement within the loop to check the conditions
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0){ //'i'is divisible by 3 and 5 
       answer.push("FizzBuzz");//let the output be Fizzbuzz
      } else if (i % 3 === 0) {// ‘i’ is divisible by 3
        answer.push("Fizz");//let the output be fizz
      } else if (i % 5 === 0) {//'i' is divisible by 5
        answer.push("Buzz");//let the output be buzz
      } else {
        answer.push(i.toString());//if none of the above conditions are true
      }
    }
    return answer;
  }
  
  // Test cases
  console.log(fizzBuzz(3)); // Output: ["1", "2", "Fizz"]
  console.log(fizzBuzz(5)); // Output: ["1", "2", "Fizz", "4", "Buzz"]
  console.log(fizzBuzz(15)); // Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
  