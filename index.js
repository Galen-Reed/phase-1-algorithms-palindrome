function isPalindrome(word) {
  // Write your algorithm here
  const newString = word.split("").reverse().join("");
  if (word === newString) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  use split to return new array
  reverse new array
  join array to string
  if string === new string backwards
  return true 
  else 
  return false
*/

/*
  Add written explanation of your solution here


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
