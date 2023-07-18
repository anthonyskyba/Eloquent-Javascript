let size = 10;
let output = "";

for (let lines = 1; lines <= size; lines++) {
  for (let counter = 1; counter <= size; counter++) {
    if (output.length % 2 != 0){
      output += "#";
    } else {
      output += " ";
    }
  }
  output += "\n";
}
console.log(output);
