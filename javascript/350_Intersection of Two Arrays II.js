/**
 * Created by Saniac on 2016/8/20.
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var res = [];
    arr1 = nums1;
    arr2 = nums2;
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