function letter(str:String){

    let sentence = str
        .split(" ")
        .map(word => {
            if(word.length <2)
            return word;
            return word[0] + word[1].toLowerCase() + word.slice(2)

        })
        .join( " ");

        console.log(`upper Case : `, sentence)
}

letter('hello typescript world')
letter('HELLO TYPESCRIPT')