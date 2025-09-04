const names = ["amine", "Sara", "Yassine", "Sami", "Amina"];

let nameA = (names) => {
  
  names2 =names.filter(
  names => names.toLowerCase().startsWith("a")
  )
  return names2
}

console.log(nameA(names))
