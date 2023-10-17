// Fill in this regular expression.
// not done (haven't seen solution) will come back later to fix this. Issue is that it works for matching numbers but not all of the string has to match for it to pass the test
let number = /^(\+|-)?(\d+\.$|(\d+(\.\d+)?|\.\d+)(e((\+|-)\d+|\d+))?\b$)/i;

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}
