const student = [
  {nom : " moh" , grade : 10},
  {nom : "sarra" , grade : 20 },
  {nom : "ines" , grade : 4},
  {nom : "yaya" , grade : 9}
]

const stu = (student) => {
  student2 = student.filter(
   student => student.grade >= 10
  )
  return student2
}

console.log(stu(student))
