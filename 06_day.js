//   find the factrorial number of singale element 


const factrorial = (num) =>{
     let fact  = 1;
    for(let i =1; i<=num; i++){
       
    fact = fact * i;
}
return fact;
}

console.log(factrorial(5));
console.log(factrorial(0));
console.log(factrorial(3));