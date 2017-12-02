// Given an array, find the int that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

function findOdd(Array) {

  var num;
  var count = 0;
  // for loop iterating over the items in the array
  for (i = 0; i < Array.length; i++) {
      num = Array[i];
    // for loop to keep count
    for (a = 0; a < Array.length; a++) {
      if (Array[a] === num){
      count ++;
      }
    }
    // is the count odd?
    if (count%2 !== 0) {
      // return the index
      return num;
      }
  }

}

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//
// The binary number returned should be a string.



function addBinary(a,b) {

  var a;
  var b;
  var sum;

  // or let sum = (a + b);

  sum = (a + b);


  return sum.toString(2);

}


// Multiplicative Persistance
var count = 0;

function MultiplicativePersistance(num){
  if(num.toString().length == 1){
    return count;
  }

  count ++;
  var mult = 1;
  var splitStr = num.toString().split("");

  for(var i =0; i< splitStr; i++){
    mult *= parseFloat(splitStr[i]);
  }
  return MultiplicativePersistance(parseFloat(mult));
}

// In this simple assignment you are given a number and have to make it negative.
// But maybe the number is already negative?

function makeNegative(num) {

  if (num > 0) {
    var negNum;
    negNum = num * -1;
    return negNum;
  }
  if (num < 0) {
    return num;
  }
  else {
    return 0;
  }

  // cloning the first level of an object and copying only its properties.

var foo = {
  foo: 1,
  bar: 2,
  baz: 3
};

var bar = {};
Object.keys(foo).forEach(function(prop){
  bar[prop] = null;
});
