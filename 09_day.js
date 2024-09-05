const arraysArEquale = (arr1,  arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }
        return arr1.every((curVal , index) => curVal === arr2 [index])
       // return true;
}

console.log(arraysArEquale([1,2,3], [1,2,3]));  //true
console.log(arraysArEquale([1,2,3], [2,2,4]));  // false