function climbStairs(n) {

  if(n==0||n==1){
    return 1
  }
 let a=1,b=1
  for(let i=2;i<=n;i++){
    let tmp= a+b
    a=b
    b=tmp
  }
  return b

    

};

//used fibonacci for this , and then the time complexity was big so had to change it to dynamic programming !
