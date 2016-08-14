/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    var res = 1;
    for(var i=2;i<n;i++){
        if(break1(n,i)>res){
            res = break1(n,i);
        }
    }
    return res;
};

function break1(num,n){
    var mc = parseInt(num/n);
    var mm = num%n;
    return Math.pow(mc,n-mm)*Math.pow(mc+1,mm)
}