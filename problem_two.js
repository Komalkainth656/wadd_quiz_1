const array = ['apple', 'pear', 'bananas', 'watermelon', 'mango', 'pear', 'apple', 'bananas', 'pear', 'strawberry', 'pineapple'];
function getWordLengths(sentence) {// this returns the numbers of characters in string
    const words = sentence
    const wordLengths = {}
    for (let word of words) {
        wordLengths[word] = word.length //find length of a string
    }
    return wordLengths//returns the number of characters in the string
  }
  console.log(getWordLengths(array))//will help to show the output