function makeid(l) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  return Array.from({ length: l }, function () {
    return chars.charAt(Math.floor(Math.random() * chars.length));
  }).join("");
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));