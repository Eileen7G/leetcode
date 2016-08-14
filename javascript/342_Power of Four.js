/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    var a = num.toString(2);
    var reg = /1(00)*/;
    if(reg.test(a))
        return  a.match(reg)[0]===a;
    else
    {return false;}
};
