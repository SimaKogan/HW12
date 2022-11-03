function getSymbol(digit) {
    let codeA = 'a'.charCodeAt();
    if (digit > 9) {
        digit = String.fromCharCode(codeA + digit - 10);
    }  
   return digit;
}
function fromNumberToString(number, base) {
    number = Math.abs(number);
    let res = "";
    do {
        let digit = number % base;
        let sym = getSymbol(digit);
        res = sym + res;
        number = Math.trunc(number / base);

    } while(number != 0);
    return res;
}
function getDigit(symbol) {
    let codeA = 'a'.charCodeAt();
    let res = symbol < '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}
function fromStringToNumber(string, base) {
    string = string.toLowerCase();
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        let digit = getDigit(string[i]);
        result = result * base + digit;
    }
    return result;
}
console.log(fromNumberToString(900550,36))
console.log(fromStringToNumber("react", 36));
console.log(fromStringToNumber("10110011011011", 2));