// 168. Excel Sheet Column Title

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(n) {
    
    var num = n;
    var tmp = 0;
    var res = ''
    while (num > 0) {
        tmp = num % 26
        if(tmp === 0) 
        tmp = 26
        res = getChar (tmp) + res
        num = (num - tmp) /26
    }
    return res
};

var getChar = function (num) {
    var start = 'A'.charCodeAt (0)
    return String.fromCharCode(start + num - 1)
}