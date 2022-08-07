//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
let array=[1,3,5,7,5]
let result ="false"
function addToZero() {
 for( i=0; i<array.length; i++){
 for (j=1; j<array.length; j++){

    if (array[i]+ array[j] === 0) {
        result = "true";
    } 
}}}
addToZero(array)
console.log(result)

// runtime = O(n^2)
//spacetime=O(1)


//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueCharacters(str) {
    let uniqueDict =new Set([]);
    for (let i=0; i<str.length; i++){
        uniqueDict.add(str[i])
    }
    return str.length === uniqueDict.size;
}
console.log(hasUniqueCharacters('moonday'))

//runtime: O(n)
//space:O(n)

//Write a function to check a sentence to see if it is a pangram or not. A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

function isPangram(str){
    let sentence= str.toLowerCase().split(' ').join("");
    console.log(sentence)
    let containsAtoZ = new Set([]); 
         for (let i=0; i<sentence.length;i++){
              containsAtoZ.add(sentence[i])
                console.log(containsAtoZ)
    } console.log(containsAtoZ.size)
    if (containsAtoZ.size === 27) {
        //26 letters+ closing puncutation on a sentence
       console.log('true')
    } else {
        console.log('false')
    }
}

isPangram("The quick brown fox jumps over the lazy dog!")

//runtime: O(n)
//space: O(n)

// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    console.log(longestWord)
    return longestWord;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");

//   runtime: O(n)
//Space:O(n)