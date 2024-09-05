

const calculateAverage = (arr) => {
     let total = arr.reduce((accum,  curElem) => accum + curElem, 0)  //accum = all value 
     console.log(total);
     return total / arr.length;

}

console.log(calculateAverage([5, 10, 2, 8])); // output 6.2