/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let arr=[];
    let i=0;
    let j=i+1;

    for(let k=0; k<nums.length; k++){
        if(nums[i]+nums[j] === target){
            arr[0]=i;
            arr[1]=j;
        }
        else if(j>=nums.length-1){
            i++;
            j=i+1;
            k=i;
        }
        else{
            j++;
        }
    }

    return arr;
};