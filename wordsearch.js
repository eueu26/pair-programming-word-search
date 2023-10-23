const wordSearch = (letters, word) => { 

    if(letters.length < 1 || word.length < 1) return false;

    const horizontalJoin = letters.map(ls => ls.join(''))

    const verticalJoin = letters[0].map((col, index) => letters.map((row) => row[index]));

    const verticalSwitch = verticalJoin.map((ls) => ls.join(''));

    for (l of horizontalJoin) {
        if (l.includes(word)) 
        return true;

     else {

        for(l of verticalSwitch) {
            if (l.includes(word)) 
            return true;
         }
       }
    }
    return false;
}

module.exports = wordSearch