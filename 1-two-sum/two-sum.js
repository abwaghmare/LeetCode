/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let arr=[];

    for(let i=0; i<nums.length; i++){
        let c = target-nums[i];
        for(let j=i+1; j<nums.length; j++){
            if(nums[j] === c){
                arr[0]=i;
                arr[1]=j;
            }
        }
    }

    return arr;
};