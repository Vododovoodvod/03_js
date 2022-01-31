var words = ["quickest", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

function longest(wordsList) {
    var longest = 0;
    var longestIndex = 0;
    for(var i = 0; i < wordsList.length; i++){
        if (wordsList[i].length > longest) {
            longest = wordsList[i].length;
            longestIndex = i;
        }
    }
    console.log(wordsList[longestIndex]);
}

longest(words);