// write  a function generatehash to accomplish this task.

const generaterHash = (str) => {
    if(str.length > 280 || str.trim().length === 0){
        return false;

    }
     str = str.split(" ");
    //   str = str.map((curElem) => 
    // curElem.replace(curElem[0], curElem[0].toUpperCase())
    // );
    // str = `#${str.join("")}`;
    console.log(str);
};


console.log(generaterHash("My name is rajan technical"));