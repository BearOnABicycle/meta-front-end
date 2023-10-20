function letterFinder(word, match){
  for(i = 0; i < word.length; ++i){
    if(word[i] == match){
      console.log('Found the ', match,'at', i+1)
    }else{
      console.log("---No match was found at", i+1)
    }
  }
}
var word = 'Hello';

letterFinder(word, 'o');
