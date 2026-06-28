function makeid(l) {
  // write your code here		
 let result = "";

  for (let i = 0; i < l; i++) {
    const index = Math.floor(Math.random() * chars.length);
    result += chars[index];
  }

  return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
