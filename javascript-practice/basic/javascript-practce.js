console.log("Hello, World");

function listArrayItems(arr){
  for (i=0; i < arr.length; ++i){
    console.log(i+1, arr[i])
  }
}

var colors = ['red', 'yellow', 'orange', 'blue', 'pink'];

listArrayItems(colors);

console.log("Goodbye, world");
