// conditinal opreter
// i cen cheack i do vote and i cen not vote
// let age;
// const readline = require ('readline')
// const x = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })

// // x.question("Enter age = ",(age) =>{
//     if(age >= 18){
//         console.log("you cen do vote")

//     }else {
//         console.log('you cen not vote');
//     }
// });


// scend task 

let mode = 'dark';
let color;

if (mode === 'dark') {
    color = 'black';
} else if (mode === 'white') {
    color = 'dark';
} else if (mode === 'pink') {
    color = 'pink';
} else if (mode === 'orange') {
    color = 'yellow';
} else {
    color = 'not color';
}

console.log(color);

// lets cherack score my grad
let grad;
const readline = require ('readline')
 const x = readline.createInterface({
     input:process.stdin,
     output:process.stdout,
});

// x.question('Enter the score number: ', (input) => {
//     const score = parseInt(input, 10); // Convert input to integer
//     let grad; 
  
//     if (score >= 90 && score <= 100) {
//       grad = 'A';
//     } else if (score >= 80 && score < 90) {
//       grad = 'B';
//     } else if (score >= 70 && score < 80) {
//       grad = 'C';
//     } else if (score >= 60 && score < 70) {
//       grad = 'D';
//     } else {
//       grad = 'Fail';
//     }
  
//     console.log(`Grade: ${grad}`);
//     rl.close();
//   });


  //  even and odd number 
  x.question('Enter the number = ', (input) => {
    const num = parseInt(input, 10);
    if (num % 2 == 0) {
      console.log('It is an even number.');
    } else {
      console.log('It is an odd number.');
    }
    x.close();
  });

 
  
  
  
  
  
  
  
  


