//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
  function Animal(species, name, legs, color, food) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
  }

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
  function person(name, age, height, gender) {
    var pers = {};
    pers.name = name;
    pers.age = age;
    pers.height = height;
    pers.gender = gender;
    return pers;
  }


//Create a animal array and a person array.

  //code here
  var animalArray = [];
  var personArray = [];


//Create two instances of Animal and push those into your animal array

  //code here
  animalArray.push(new Animal('cat', 'Pepper', 4, 'green', ['milk', 'meat', 'MeowMix']));
  animalArray.push(new Animal('dog', 'Lassie', 4, 'yellow', ['cats', 'meat', 'dog biscuits']));

//Create two instances of person and push those into your person array.

  //code here
  personArray.push(person('Fred', 30, 64, 'M'));
  personArray.push(person('Wilma', 29, 55, 'F'));

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
  Animal.prototype.eat = function() {
    var foodEatenIdx = Math.floor(Math.random() * this.food.length);
    console.log(this.name + ' ' + 'ate' + ' ' + this.food[foodEatenIdx]);
  };

  animalArray[0].eat();

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
  // No - because we didn't use the new keyword or a constructor function, there is no prototype object for the new object (except the Object.prototype object, but that isn't specific to our new object). Therefore, there is no prototype to add the new item to and we won't therefore have a way to give something to all instances of the object.



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  Per StackOverflow (http://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript):
  1 - creates the new object
  2 - set's the new objects prototype object to that of the contstructor function for the object
  3 - executes the constructor function, replacing 'this' keyword in the contstructor with the object being created
  4 - returns the newly created object

  2) What's a good way to describe the keyword 'this'
  It stands in for the object instance so we can refer to the current object within that object or functions that operate on the object.

  3) Can a normal function which creates an object and then returns that object use the prototype?
  No - but you can also use the Object.create(Object.prototype) pattern to create a new object as well.

  4) What happens if you forget to use 'new' when calling a constructor?
  It will call the function directly on the global object - so the this keyword will then refer to the global object. Instead of creating a new object, the new properties, methods, etc will be added to the global window object instead of a new independent object.

*/
