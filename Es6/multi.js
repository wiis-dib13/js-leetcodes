let nombre = [0,1,2,3,4,5,6,7,8,9,10]

let multiple = (n) =>{
  let nombre2 = nombre.map(
    x => n*x );
  return nombre2
}

console.log(multiple(9))                 
