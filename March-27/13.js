// 13. Roman to Integer

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const myMap = {
      'I' : 1 ,
      'V' : 5 ,
      'X' : 10 ,
      'L' : 50 ,
      'C' : 100 ,
      'D' : 500 , 
      'M' : 1000,
    }

    let result = 0;

    for(let i=0;i<s.length; i++){
      const current=myMap[s[i]]
      const prev=myMap[s[i+1]]

      if(current < prev){
        result += current-prev
        i++
      }else {
        result += current 
      }
    }
    return result
};