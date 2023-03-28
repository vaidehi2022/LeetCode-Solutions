// 28. Find the Index of the First Occurrence in a String

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let j=0, i=0, k=0
    while (i<haystack.length){
        while(needle[j]==haystack[k]){
            k++
            j++
            if(j==needle.length) return i
            if(k==haystack.length) return -1
        }
        if(needle[j] != haystack[k]){
            i++
            k=i
            j=0
        }
    }
    return -1
};