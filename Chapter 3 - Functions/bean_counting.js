const countChar = (string, letter) => {
  let amount = 0
  for (let counter = 0; counter <= string.length - 1; counter++) {
    if (string[0 + counter] == letter) amount++
  }
  return amount
}

console.log(countChar("kakkerlak", "k"));
// → 4
