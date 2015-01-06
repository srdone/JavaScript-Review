var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here

  console.log('Question 1');
  function last(arr) {
    return arr[arr.length - 1];
  }
  var lastItem = last(threeItems);
  console.log(lastItem);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here
  console.log('\nQuestion 2');
  // should start from end of the array instead of the beginning to avoid missing values
  // We are acting directly on the array - we did not make a copy (may not be best practice depending on situation);
  function removeOdds(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] % 2 !== 0) {
        arr.splice(i,1); // why did I use i instead of 1?
      }
    }
  }
  removeOdds(evenArray);
  console.log(evenArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
  var getRandomArbitrary = function() {
    return Math.floor(Math.random() * (30 - 0) + 0);
  };
  var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here
  console.log('\nQuestion 3');
  function alertInRandomArray(arr) {
    var rnum = getRandomArbitrary();
    var result = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === rnum) {
        result = true;
      }
    }
    console.log('The random number' + ' ' + rnum + ' ' + (result ? 'is in' : 'is not in') + ' ' + 'the array.');
  }

alertInRandomArray(randomArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var a = 1;
var first = [a,2,3,4,5];
var second;

  //code here
  console.log('\nQuestion 4');

  //shallow copy
  second = first.slice(0);
  second.push(6,7);

  console.log(first); //[1,2,3,4,5];
  console.log(second);  //[1,2,3,4,5,6,7];

  //with the shallow copy the following should result in both arrays containing 'last', right?
  second[0] = 'last';
  console.log("If this is truly a shallow copy, then 'last' should be the first object in both arrays, right?");
  console.log(first);
  console.log(second);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best";

  //code here
  function longest(sentence) {
    var splitSentence = sentence.split(' ');
    var longestLength = 0;
    var longestWordIdx = 0;
    for (var i = 0; i < splitSentence.length; i++) {
      if (splitSentence[i].length > longestLength) {
        longestLength = splitSentence[i].length;
        longestWordIdx = i;
      }
    }
    return(splitSentence[longestWordIdx]);
  }

  console.log('\nQuestion 5');
  console.log('The sentence:' + ' ' + sentence);
  console.log('The longest word:' + ' ' + longest(sentence));


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word
var myPoem = 'What is a jQuery but a misunderstood object?';
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here
  //Capitalizes the first letter of every word in the sentence
  function proper(sentence) {
    var result = [];
    var splitSentence = sentence.split(' ');
    //Is the following syntax OK, or should I use standard var i = 0 etc. looping?
    for (var i = 0; i < splitSentence.length; i++) {
      //Take the first letter of each word, capitalize it, and make a new word
      var word = splitSentence[i][0].toUpperCase() + splitSentence[i].slice(1);
      result.push(word);
    }
    return result.join(' ');
  }
  console.log('\nQuestion 6');
  console.log(proper(myPoem));


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string

  //code here
  function vowelCounter(string) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelCount = 0;
    for (var i = 0; i < string.length; i++) {
      //Check to see if the current letter is in the list of vowels by finding it's index. -1 index means it isn't there.
      if(vowels.indexOf(string[i]) !== -1) vowelCount++;
    }
    return vowelCount;
  }

  console.log('\nQuestion 7');
  console.log('The sentence:' + ' \'' + theOdyssey + '\'');
  console.log('The number of vowels in the sentence is:' + ' ' + vowelCounter(theOdyssey));
