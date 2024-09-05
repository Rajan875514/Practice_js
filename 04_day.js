
// 05 day write code short array withour short methoe 

 const shotArray = (arr) => {
        // return arr.sort((a , b) => b-a); // desecnding order [ 8, 5, 3, 1 ]
        return arr.sort((a , b) =>  a - b);
    };


 console.log(shotArray([5, 3,  1 , 8]));  