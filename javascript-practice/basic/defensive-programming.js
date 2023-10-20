function letterFinder(word, match){
    
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and is greater than two characters it will be true
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and is equal to one character it will be true

    if (condition1 && condition2){ //if both conditions are true

        for(var i = 0; i < word.length; i++) {
                if (word[i] == match) { //check if the character at this position i is equal to match
                    console.log('found the', match, 'at', i)
                } else {
                    console.log('---No match foiund at', i)
                }
            }

    }else {//if the conditions are not true
        console.log('Pleas pass correct arguments ot the function')
    }
}

letterFinder(4, 2)
letterFinder("cat", "c")