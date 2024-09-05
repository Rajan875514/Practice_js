// cheack palindrome or not

const isPalindrome  = (str) => {
    str  = str. toLowerCase()

    let r_str = str.split("").reverse().join("");
    console.log(r_str);
    return str === r_str? true: false ; 
}

console.log(isPalindrome("A man a plan anythying "));
console.log(isPalindrome("rajar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("121"))
// gniyhtyna nalp a nam a
// false
// rajar
// true
// olleh
// false 