//forEach()
//iterates over each member of the array
const letters = ['a', 'b', 'c', 'd']
function appendIndex(letter, index){
  console.log(`${index}. ${letter}`)
}
letters.forEach(appendIndex)

// function can also be called directly into the method call 
letters.forEach(function(letter, index) {
  console.log(`${index}. ${letter}`)
})

//filter()
//Filters an array based on a specific toDateString();
console.log(letters.filter(function(letter){
  return letter !== 'a'
}))

//map()
//maps each array item to another arrays items
const numbers = [0,10,20,30,40,50]
console.log(numbers.map( function(num) {
    return num / 10
}))

