// var dulhan = 'lab';
// var dulha = 'laby'; // var is not fix 
// //  const is not change any 
//let b ;
// let b;
// console.log(b);
//  b = 9;
//  function printTable(num)
//  {
//     for(let i=1; i<=10; i++){
//     //    console.log(num * i);
//     // console.log(`${num} * ${i} = ${num * i}`)
//     }
//  }
//  printTable(5);
function printTable(num)
 {  console.log(`multiple number ${num}`)
    for(let i=1; i<=10; i++){
     console.log(`${num} * ${i} = ${num * i}`)
    }
    console.log();
 }
 function printTables(start, end){
    for(let i=start; i<=end; i++){
        printTable(i);
    }
 }
 printTables(5, 9);