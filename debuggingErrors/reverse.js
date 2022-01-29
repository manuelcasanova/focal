var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse(original) {
  return original.split('').reverse().join(''); 
  //original instead of orignal
  //reverse instead of reverseList. Is not a function, is a method.
}

//Split method separete a string into an array of substrings
//join method returns the array as a string (we can define a separator)

