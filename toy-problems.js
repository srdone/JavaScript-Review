/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

function plusOneSum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i] + 1;
  }
  return total;
}

console.log(plusOneSum([1,2,3,4]));

/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/

function flatten(arr, newArr) { // we include 'newArr' so we can call flatten recursively and add to the final array.
  newArr = typeof newArr !== 'undefined' ? newArr : []; // set the default value of newArr
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], newArr); // calling flatten on each array contained in the array recursively.
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, [3, [4], 5, 6], 7])); // [1, 2, 3, 4, 5, 6, 7]

/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/

Array.prototype.shuffle = function() {
  var randIdx = Math.floor(Math.random() * this.length);
  for (var i = 0; i < this.length; i++) {
    this.splice(randIdx, 0, this.shift());
  }
  // why do we have to return this? arent we operating directly on the array?
  return this;
};

Array.prototype.deleteRandom = function() {
  var randIdx = Math.floor(Math.random() * this.length);
  delete this[randIdx];
};

// finds the values in originalArr that are not in newArr and returns a unique list.
function findMissingValues(originalArr, newArr) {
  var result = [];
  for (var i = 0; i < originalArr.length; i++) {
    // check if in original array and then add if not in the result set already
    if (newArr.indexOf(originalArr[i]) === -1 && result.indexOf(originalArr[i]) === -1) {
      result.push(originalArr[i]);
    }
  }
  return result;
}

array1 = [1, 2, 3, 4, 5];
array2 = array1.slice(0).shuffle();
array2.deleteRandom();
console.log(findMissingValues(array1, array2));

/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/

function longestWords(string) {
  string = string.toLowerCase();
  var sentenceArray = string.split(' ');

  // sort longest length word to highest index
  sentenceArray.sort(function(a,b) {
    if (a.length > b.length) return -1;
    if (a.length < b.length) return 1;
    if (a.length === b.length) return 0;
  });

  // create a function to remove duplicates
  function deDup(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
    }
    return result;
  }

  // build the result by pulling the first item and the next few with the same length.
  var result = [];
  var i = 0;
  do {
    result.push(sentenceArray[i++]);
  } while (i < sentenceArray.length && sentenceArray[i].length === sentenceArray[0].length); // do for the first elements with the same lenght - check for existence of next element first

  // remove duplicates
  result = deDup(result);

  return result;
}

console.log(longestWords("I gave a present to my parents"));

console.log(longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo")); // ["buffalo"] or ["Buffalo"]

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

//limit is non-inclusive
function sumMultiples(divisors, limit) {
  Number.prototype.isMultiple = function(nums) {
    var result = false;
    for (var i = 0; i < nums.length; i++) {
      if (this % nums[i] === 0) {
       result = true;
       break;
      }
    }
    return result;
  };

  var sum = 0;
  for (var i = 1; i < limit; i++) { // start at 1 (no sense adding 0)
    if (i.isMultiple(divisors)) sum += i;
  }

  return sum;
}

console.log(sumMultiples([3,5], 10));
console.log(sumMultiples([3,5], 1000));

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/

function rmDupedLtrs(string) {
  var result = '';

  for (var i = 0; i < string.length; i++) {
    // concatenate the letter to the result if it is not already in the result.
    if (result.indexOf(string[i]) === -1) result += string[i];
  }

  return result;
}

console.log(rmDupedLtrs('tree traversal'));

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
