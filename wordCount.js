sen="hi hello hi hi hello w"
words=sen.split(" ")
wordCount={}

for( i=0; i< words.length; i++){
    word=words[i]
    console.log(word)
    if(wordCount[word]){
        wordCount[word]++
    }
    else{
        wordCount[word]=1
    }
}

console.log(wordCount)