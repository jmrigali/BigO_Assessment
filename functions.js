//1.
function constant () {
  for(var i = 0; i<10; i++) {
    console.log(i);
  }
}
constant();

//2.
let array = [1,2,3,4,5,6,7,8,9,10];
function linear (arr) {
   for(var i = 0; i < arr.length; i++) {
     console.log(i);
   }
}

linear(array);

//3.
var arr= [1,2,3];
var arr2= [3,4,5];
function quadratic (array, array2) {
  for(var i = 0; i< array.length; i++) {
    for(var j = 0; j< array2.length; i++) {
      if(array[i]===array2[j]) {
        console.log(i);
      }
    }
  }
}

quadratic(arr,arr2);
