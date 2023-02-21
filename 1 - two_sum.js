/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var solution = [];

    for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
             if (nums[j] == target - nums[i]){
                solution = [i, j]
                return solution
             }
        }
    }

    return [0, 0]
};