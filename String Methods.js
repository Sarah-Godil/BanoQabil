let str1 = "International";
let str2 = "Organization";
let length= str1.length;
console.log("1. length of str1 is: " ,  length); 
let firstChar = str1.charAt(0);
console.log("2. 1st char of str1 is: ",  firstChar); 
let thirdchar = str1.at(2);
console.log("3. 3rd char of str1 is: ",  thirdchar); 
let part= str1.slice(5, 13);
console.log("4. national of str1 is: " + part); 
let uppercase = str1.toUpperCase();
console.log("5. Upper case of str1 is: " + uppercase); 
let lowercase = str1.toLowerCase();
console.log("6. Lower case in str1 is: " + lowercase); 
let tgh = str1.concat(" ", str2);
console.log("7. combining of str1 and str2: " + tgh); 
let repeat = str1.repeat(4);
console.log("8. repeatation of str1 is: " + repeat); 
let replace = str1.replace("International", "Global");
console.log("9. Replace in str1 is: " + replace); 

