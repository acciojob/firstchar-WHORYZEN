function firstChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            return str[i];
        }
    }
    return '';
}



const text = prompt("Enter text:");
alert(firstChar(text));
