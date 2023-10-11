function addTwoNums(a, b){
    try{
        if (typeof(a) != 'number'){
            throw new ReferenceError('A is not a number')
        }else if (typeof(b) != 'number'){
            throw new ReferenceError('B is not a number')
        }else{
            console.log(a + b)
        }
    }catch (err){
        console.log("Hello, idiot!", err)
    }
}

addTwoNums(5, "6")
console.log("It still works")