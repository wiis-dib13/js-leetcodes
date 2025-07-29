
function singleNumber(nums) {
    let y=[]
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
            y.push(nums[i])
            }

        }
    }
    let b = nums.filter(n => !y.includes(n));  
     //.filter() pour créer un nouveau tableau contenant uniquement les éléments de nums qui ne sont pas dans y

    return b[0];
};
