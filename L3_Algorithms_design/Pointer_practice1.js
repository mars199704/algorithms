// palindrome
function isPalindrome(str) {
  let left = 0,
    right = str.length - 1;

  while (left <= right) {
    if (str[left] == str[right]) {
      left++;
      right--;
    } else {
      console.log(str[left], str[right]);
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("catotac"));
console.log(isPalindrome("cattac"));
console.log(isPalindrome("cataaotac"));
