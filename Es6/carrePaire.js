const tab = [2,5,6,3,1,0]

const carrePaire = (tab) => {
  tab2 = tab.filter( tab => tab%2 == 0).map( tab => tab * tab )
  
  return tab2
}

console.log(carrePaire(tab))
