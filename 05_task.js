// loop

// let i = 1; // initilize
// while (i <= 5) {
//   console.log('Hello World');
//   i++;
 
// }


// table print
// let i =1;
// function printTable(number){
//     while(i<=10){
//         //console.log(number * i )
//         console.log(`${number} * ${i} = ${number * i }`); //Using ${} to insert the value of name
//         i++;
//     }
// }
//  printTable(5);

 // both table print
//  function printTable(number) {
//     console.log(`Multiplication Table of ${number}:`);
//     let i = 1;
//     while (i <= 10) {
//       console.log(`${number} * ${i} = ${number * i}`);
//       i++;
//     }
//     console.log(); // Add a blank line between tables
//   }
  
//   function printTables(start, end) {
//     let i = start;
//     while (i <= end) {
//       printTable(i);
//       i++;
//     }
//   }
  
//   // Example usage:
//   printTables(2, 10);
  // task done
  
  
  // for of loop = it dirct access key value of object directly
//    const myName = 'rajan'
//    const myNumber = [1,2,3,4,5,6,7,8];
//    for(let char of myNumber){
//     console.log("my  chracter = " +char);
//    }


   //for in loop = it access key object  than value
   let obj ={
    rajan: 90,
    dwdefc: 98,
    were: 12,
    wesd: 34,
}
      for(variable of obj){
       console.log(`${key}`);
      }