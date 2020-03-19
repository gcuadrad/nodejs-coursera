module.exports = (word, callback) => {
  setTimeout(() => {
    if (!word) {
      const message = `Word (${word}) is not a string.`;
      callback(new Error(message), false);
    } else {
      const reverseWord = word.split('').reverse().join('');
      const isPalindrome = word === reverseWord;

      callback(null, {
        reverse: reverseWord,
        isPalindrome: isPalindrome,
      })
    }
  }, 2000);
}