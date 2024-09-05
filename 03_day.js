const countChar = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();

    totalCount = word.split("").reduce((accum, curChar) => {
        if (curChar === char) {
            accum++;
        }
        return accum;
    }, 0);
    
    console.log(totalCount); // This will log the final count
    return totalCount;
};

console.log(countChar("MissIssippi", "I")); // Output: 4
