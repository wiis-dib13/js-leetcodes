const wmap = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
]);

function romanToInt(s) {
  let V = [];
  let somme = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let curr = wmap.get(s[i]);
    let prev = wmap.get(s[i - 1]);

   
    if (i > 0 && prev < curr) {
      V.push(curr - prev);
      i--; 
    } else {
      V.push(curr);
    }
  }

  for (let j = 0; j < V.length; j++) {
    somme += V[j];
  }

  return somme;
}
