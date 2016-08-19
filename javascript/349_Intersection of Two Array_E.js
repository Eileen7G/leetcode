/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var res = [];
    var arr1 = [];
    var arr2 = [];
    var dic = function(arr){
        var dic = {};
        for(var i=0;i<arr.length;i++){
            if(dic[arr[i]]){
                dic[arr[i]]++;
            }
            else{
                dic[arr[i]] = 1;
            }
        }
        return dic;
    }
    var dic1 = dic(nums1);
    var dic2 = dic(nums2);
    for(var i in dic1){
        arr1.push(parseInt(i));
    }
    for(var i in dic2){
        arr2.push(parseInt(i));
    }
    arr1.sort(function(a,b){
        return a-b;
    });
    arr2.sort(function(a,b){
        return a-b;
    });
    while(1){
        if(arr1.length==0||arr2.length==0){
            return res;
        }
        else{
            if(arr2[0]>arr1[0]){
                arr1.shift();
            }
            else if(arr1[0]>arr2[0]){
                arr2.shift();
            }
            else{
                res.push(arr1[0]);
                arr1.shift();
                arr2.shift();
            }
        }
    }
};