
// String to  convert array

const findLogestWorld = (str) => {
    if(str.trim().length === 0) {
         return false;
    }

    word = str.split(" ");

    //word = word.sort((a , b) => a. length - b.length); // output[ 'i', 'gyz', 'self', 'Hello', 'leran', 'studies', 'javascript' ] asending our
    word = word.sort((a , b) => b. length - a.length) //output  'javascript', 'studies', 'Hello', 'leran', 'self', 'gyz', 'i' ]  diisending

    console.log(word);
  // find the index value
  return word.at(-1); // output i 
};
console.log(
    findLogestWorld("Hello gyz i leran javascript self studies")
);