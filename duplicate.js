function containsDuplicate(nums) {
    let n = nums.length;
 for(let i=0 ;i<n;i++){
    for(let j= i+1;j<n;j++){
        if(nums[i]===nums[j]){
            return true
        }
    }
 }
 return false
}

//premiere partie  O(n^2)
