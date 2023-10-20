// create a try-catch block and demonstrate it's use
try{
    throw new ReferenceError();
} catch(err) {
    console.log(err)
    console.log('There was an error')
    console.log('The eror was saved in the error log')
}
console.log('My program does not stop')
