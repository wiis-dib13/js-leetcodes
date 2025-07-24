function isPalindrome(s) {
    let y = " "
    let k =" "
    y = s.replace(/[^a-zA-Z0-9]/g, '');  //pour enlver les caracteres speciaux
    k = y.toLowerCase()  //pour mettre tout en miniscule
    let n= k.length 

    for(let i=0;i<Math.floor(n / 2);i++){
       if(k[i] !== k[n-1-i]){
       return false
       }
    }

        return true
       
    }
