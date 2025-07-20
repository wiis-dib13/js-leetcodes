function twoSum(nums, target) {
  let j=0
  let n=nums.length

    for(let i=0;i<n;i++)
    {
    for(j=i+1;j<n;j++){

        if((nums[i]+nums[j])-target == 0){
           return [i,j]
        }
    }
    }
};

nums = [3,2,3]
target = 6
twoSum(nums,target)

