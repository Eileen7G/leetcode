/**
 * Created by Saniac on 2016/8/22.
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(var i=0;i<s.length;i++){
        if(s.lastIndexOf(s[i])==s.indexOf(s[i])){
            return i;
        }
    }
    return -1;
};