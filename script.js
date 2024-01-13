function isPalindrome(str) {
  // Check if the given string is a palindrome
  return str === str.split('').reverse().join('');
}

function nextPalindrome(num) {
  // Increment the number and check if it is a palindrome
  while (true) {
    num++;
    if (isPalindrome(num.toString())) {
      return num;
    }
  }
}

// Example usage
const input = parseInt(prompt("Enter a palindrome number"));
alert(nextPalindrome(input));
