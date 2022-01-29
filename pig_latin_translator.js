var originalWords = process.argv.slice(2);
var pigLatinWords = [];

// console.log("originalWords is", originalWords);
// console.log("pigLatinWords is", pigLatinWords); THE BUG IS NOT HERE. SO I REMOVE THE CONSOLE.LOGS

for (var i = 0; i < originalWords.length; i++) { //With the console.log in line 8 we realize there' s one word missing, because we have started to iterate on 1 instead of 0
  //console.log(originalWords[i]); //Check if we are iterating over the correct strings
  //console.log(translateToPigLatin(originalWords[i])); //check if we are translating properly. we are not so there' s a problem in the function
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));

function translateToPigLatin(word) {
  // console.log("Word", word);
  // console.log("First letter", word[0]);
  // console.log("Rest of the word", word.slice(2, word.length)); //we are missing the first letter of the rest of the word. Because we are starting on 2, instead of on 1
  return word.slice(1, word.length) + word[0] + "ay";
}