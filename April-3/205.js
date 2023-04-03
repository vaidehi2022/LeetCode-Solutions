// 205. Isomorphic Strings

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length){
        return false
    }

    let sMap = {}
    let tMap = {}
    let cur = 0

    while(cur <= s.length-1) {
        if(sMap[s[cur]] !== tMap[t[cur]]) {
            return false
        }

        sMap[s[cur]] = cur+1
        tMap[t[cur]] = cur+1
        cur++
    }

    return true
};